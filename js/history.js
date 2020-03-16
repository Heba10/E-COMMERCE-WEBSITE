var db;
var cart_body=document.getElementById('cart_table');
var total_price=document.getElementById('total');
var cart_price=document.getElementById('elements_total');
var cart_amount=document.getElementById('elements_no');
//==========================================================================
//create his db
var his;
var request = window.indexedDB.open("his_Database");
request.onerror = function() {
       console.log("cant open his_Database")
 };
request.onsuccess = function(event) {
    his = event.target.result;
        console.log(" open his_Database")
        show_all();
 };

request.onupgradeneeded = function(event) { 
    his = event.target.result;
console.log(his);
{var t_cart = his.createObjectStore('shop_cart', { keyPath: "product_id" });
var nameIndex = t_cart.createIndex("by_id", "product_id");
}
 }; 

//==========================================================================


 function show_all()
 {  
    var transaction = his.transaction("shop_cart", "readonly");
        var order = transaction.objectStore("shop_cart");

        order.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor) {
                let newRow = document.createElement("tr");
                newRow.classList.add("cart_item");
                newRow.id=cursor.value.product_id;


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

                let quantity=(+quantity_input.value)
//===============================================================
                let pro_tot = document.createElement("td");
                pro_tot.classList.add("product-subtotal");

                let total_span=document.createElement('span');
                total_span.classList.add("amount");
                total_span.textContent =price*quantity;
//================================================================                
                cart_body.appendChild(newRow);
               

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
                quantity_div.appendChild(quantity_input);

                newRow.appendChild(pro_tot);
                pro_tot.appendChild(total_span);
                total_price.innerText=(+total_price.innerText)+(+total_span.textContent)

              cursor.continue();
            } else {
              console.log('Entries all displayed.');
            }
          };
 }
 
 

 

 


