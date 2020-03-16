var db;
var cart_body=document.getElementById('cart_table');
var total_price=document.getElementById('total');
var cart_price=document.getElementById('elements_total');
var cart_amount=document.getElementById('elements_no');
//==========================================================================
//create his db
var his;
var request = window.indexedDB.open("his_Database",3);
request.onerror = function() {
       console.log("doesnt create his_Database")
 };
request.onsuccess = function(event) {
    his = event.target.result;
        console.log(" created his_Database")
 };

request.onupgradeneeded = function(event) { 
    his = event.target.result;
console.log(his);
{var t_cart = his.createObjectStore('shop_cart', { keyPath: "product_id" });
var nameIndex = t_cart.createIndex("by_id", "product_id");
}
 }; 

//==========================================================================
        //open cart database
        var request = window.indexedDB.open("Cart_Database");
        request.onerror = function() {
               console.log("doesnt create")
         };
        //success
        request.onsuccess = function(event) {
                db = event.target.result;
                console.log(" created")
                if(!db.objectStoreNames.contains("shop_cart"))
                {}
                else
                {show_all();}

         };

         function add_to_his(p_id,Name,Img,price,qunt)
         {    
                 var product_id=p_id;
                 var pName=Name;
                 var pImg=Img;
                 var pPrice=price;
                 var pQuantity=qunt;
                  
         
                 var new_product={
                         product_id:product_id,
                         pName:pName,
                         pImg:pImg,
                         pPrice:pPrice,
                         pQuantity:pQuantity
                 }
         
                 var transaction = his.transaction(["shop_cart"], "readwrite");
                 var order = transaction.objectStore("shop_cart");
         
                 var request= order.add(new_product);
                 request.onerror = function(event) {
                  console.log("cant added")
                   };
                  //success
                  request.onsuccess = function(event) {
                     console.log("added")
                   };
         }
//==========================================================================

function remove_product(product_id,subtotal,quantity)
{
  console.log(product_id)
  var transaction = db.transaction("shop_cart", "readwrite");
  var order = transaction.objectStore("shop_cart");
  var request=order.delete(product_id)
  request.onsuccess = function() {
    console.log(" deleted")
    $('#'+product_id).remove();
    total_price.innerText=total_price.innerText-(+subtotal);
    cart_price.innerText=total_price.innerText;
    cart_amount.innerText=(+cart_amount.innerText)-quantity;
    window.localStorage.setItem('cart_price',cart_price.innerText );
    window.localStorage.setItem('cart_amount',cart_amount.innerText );
};
}     

function removeProducts()
{
  var transaction = db.transaction("shop_cart", "readonly");
  var order = transaction.objectStore("shop_cart");
  order.openCursor().onsuccess = function(event) {
   var cursor = event.target.result;
            if(cursor) {
            
       let his_id= cursor.value.product_id
       let his_img= cursor.value.pImg
       let his_name= cursor.value.pName
       let his_price= cursor.value.pPrice
       let his_quantity= cursor.value.pQuantity
       add_to_his(his_id,his_name,his_img,his_price,his_quantity)
       cursor.continue();

}
  }
  indexedDB.deleteDatabase('Cart_Database');
  window.localStorage.setItem('cart_price',0);
  window.localStorage.setItem('cart_amount',0);
  window.location.href="cart.html";
  
}
function updateCart(product_id,newData)
{ 
  var transaction = db.transaction("shop_cart", "readwrite");
  var order = transaction.objectStore("shop_cart");
  var request=order.get(product_id)
  request.onsuccess = function() {
   var data=request.result;
   
   data.pQuantity=newData;
   console.log(data.pQuantity);
   order.put(data);
   console.log(data.product_id);
  window.location.href="cart.html";
};
}


 function show_all()
 {  
    var transaction = db.transaction("shop_cart", "readonly");
        var order = transaction.objectStore("shop_cart");

        order.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor) {
                let newRow = document.createElement("tr");
                newRow.classList.add("cart_item");
                newRow.id=cursor.value.product_id;


                let removeBtn = document.createElement("td");
                removeBtn.classList.add("product-remove");

                let removeLink=document.createElement('a');
                removeLink.classList.add("remove");
                removeLink.title="Remove this item";
                removeLink.textContent ="X";
                removeLink.onclick =function()
                {remove_product(id_span.textContent,total_span.textContent,quantity);};
        
                let pro_id = document.createElement("td");
                pro_id.classList.add("product-price");

                let id_span=document.createElement('span');
                id_span.classList.add("amount");
                id_span.textContent =cursor.value.product_id;

               
                let pro_img = document.createElement("td");
                pro_img.classList.add("product-thumbnail");
            
               
                let imgg = document.createElement("img");
                imgg.setAttribute("src",cursor.value.pImg);
                imgg.classList.add("shop_thumbnail");
                imgg.width="145";
                imgg.height="145";


                let pro_name = document.createElement("td");
                pro_name.classList.add("product-name");

                let nameLink=document.createElement('a');
               // nameLink.href = "single-product.html";
                nameLink.textContent=cursor.value.pName;

//==============================================================                
                let pro_price = document.createElement("td");
                pro_price.classList.add("product-price");

                let price_span=document.createElement('span');
                price_span.classList.add("amount");
                price_span.textContent =cursor.value.pPrice;
                let price=(+cursor.value.pPrice);
//===============================================================
                let pro_quan = document.createElement("td");
                pro_quan.classList.add("product-quantity");

                let quantity_div = document.createElement("div");
                quantity_div.classList.add('quantity', 'buttons_added');
               
                let quantity_input = document.createElement("input");
                quantity_input.classList.add('input-text','qty','text');
                quantity_input.type="number";
                quantity_input.size="4";
                quantity_input.title="Qty"
                quantity_input.value=cursor.value.pQuantity
                quantity_input.min="0"
                quantity_input.step="1"

                let update_button=document.createElement('a');
                update_button.classList.add("button");
                update_button.textContent ="update";
                update_button.onclick =function()
                {updateCart(id_span.textContent,quantity_input.value);};
                 
                quantity_div.appendChild(quantity_input);
                quantity_div.appendChild(update_button);
                let quantity=(+quantity_input.value)
//===============================================================
                let pro_tot = document.createElement("td");
                pro_tot.classList.add("product-subtotal");

                let total_span=document.createElement('span');
                total_span.classList.add("amount");
                total_span.textContent =price*quantity;
//================================================================                
                cart_body.appendChild(newRow);
                newRow.appendChild(removeBtn);
                removeBtn.appendChild(removeLink);

                newRow.appendChild(pro_id);
                pro_id.appendChild(id_span);

                newRow.appendChild(pro_img);
                pro_img.appendChild(imgg);

                newRow.appendChild(pro_name);
                pro_name.appendChild(nameLink);

                newRow.appendChild(pro_price);
                pro_price.appendChild(price_span);

                newRow.appendChild(pro_quan);
                pro_quan.appendChild(quantity_div);

                newRow.appendChild(pro_tot);
                pro_tot.appendChild(total_span);

                total_price.innerText=(+total_price.innerText)+(+total_span.textContent)
                cart_price.innerText=total_price.innerText;
                cart_amount.innerText=(+cart_amount.innerText)+quantity;
                window.localStorage.setItem('cart_price',cart_price.innerText );
                window.localStorage.setItem('cart_amount',cart_amount.innerText );
              cursor.continue();
            } else {
              console.log('Entries all displayed.');
            }
          };
 }
 
 

 

 


