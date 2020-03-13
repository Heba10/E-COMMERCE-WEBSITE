var p = '1';
var j='12';

let data=document.getElementById("allpro");
let pg=document.getElementById("pr");

//console.log(pg);
function getData() {
  data.innerHTML="";

let xhr  = new XMLHttpRequest(); 
xhr.open('GET','https://afternoon-falls-30227.herokuapp.com/api/v1/products?page='+ p +'&limit='+ j );
xhr .send();

xhr .onload = ()=>
{   
  
    let res=JSON.parse(xhr.response);
    res=res.data;
    if(res.length==0)
    {p=1;
     one.classList.add("active")
     plus.classList.remove("active")
     return getData();
  }

    
for(let i=0;i<res.length;i++)
  {
    /* 
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
         */
        
      
    let MainCategory = res[i].MainCategory;
    let Category = res[i].Category;
    let SupplierName = res[i].SupplierName;
    let Price = res[i].Price;
    let Name = res[i].Name;
    let WeightMeasure = res[i].WeightMeasure;
    let WeightUnit = res[i].WeightUnit;
    let Width = res[i].Width;
    let Depth = res[i].Depth;   
    let Height = res[i].Height;
    let DimUnit = res[i].DimUnit;
    let Description = res[i].Description;
    let Img =res[i].ProductPicUrl;
    let Img1 = res[i+1].ProductPicUrl;
    let Img2 = res[i+2].ProductPicUrl;
    let Img3 = res[i+3].ProductPicUrl;
    let Img4 = res[i+4].ProductPicUrl;


   
      
        let div1 = document.createElement("div");
        div1.classList.add('col-md-3','col-sm-6');
        

        let div2 = document.createElement("div");
        div2.classList.add("single-product");

        let div3 = document.createElement("div");
        div3.classList.add("product-f-image");
       
        let imgg = document.createElement("img");
        imgg.setAttribute("src",res[i].ProductPicUrl);
        imgg.classList.add("img-fluid");


        let div4 = document.createElement("div");
        div4.classList.add("product-hover");

        let div5 = document.createElement("div");
        div5.classList.add("product-carousel-price");
        let price = document.createElement("ins");
        price.textContent =(res[i].Price);

        let div6 = document.createElement("div");
        div6.classList.add("product-option-shop");

        let h=document.createElement('h2');
        let name=document.createElement('a');
        name.textContent =(res[i].Name);
        name.href = "single-product.html";  
        h.appendChild(name);
        

        let addtoc=document.createElement('a');
        addtoc.classList.add("add_to_cart_button");
        addtoc.textContent ="Add to cart";
        addtoc.href = "#";  


        let haddtoc=document.createElement('a');
        haddtoc.classList.add("add-to-cart-link");
        haddtoc.textContent ="Add to cart";
        haddtoc.href = "#";  


        let showdetail=document.createElement('a');
        showdetail.classList.add("view-details-link");
        showdetail.textContent ="See details";
        showdetail.onclick = function  () {
        localStorage.setItem('MainCategoryProduct', MainCategory);
        localStorage.setItem('CategoryProduct', Category);
        localStorage.setItem('SupplierNameProduct', SupplierName);
        localStorage.setItem('PriceProduct',Price);
        localStorage.setItem('NameProduct',Name);
        localStorage.setItem('WeightM',WeightMeasure);
        localStorage.setItem('WeightU',WeightUnit);
        localStorage.setItem('Width',Width);
        localStorage.setItem('Depth',Depth);
        localStorage.setItem('Height',Height);
        localStorage.setItem('DimUnit',DimUnit);
        localStorage.setItem('Description',Description);
        localStorage.setItem('Img',Img);
        localStorage.setItem('Img1',Img1);
        localStorage.setItem('Img2',Img2);
        localStorage.setItem('Img3',Img3);
        localStorage.setItem('Img4',Img4);


        window.document.location = 'single-product.html'; };
       
  
       
        data.appendChild(div1);
        div1.appendChild(div2);
        div2.appendChild(div3);
        div2.appendChild(h);
        div2.appendChild(div5);
        div2.appendChild(div6);
        div3.appendChild(div4);
        div3.appendChild(imgg);
        div4.appendChild(haddtoc);
        div4.appendChild(showdetail);
        div5.appendChild(price);
        div6.appendChild(addtoc);
        
       
}}



////////////////////////////////


}
let minus= document.createElement("button");
minus.classList.add("add_to_cart_button");
minus.textContent="<<<";
pg.appendChild(minus);

minus.addEventListener('click',(ev) =>
         {  
          five.classList.remove("active") 
          four.classList.remove("active")
          three.classList.remove("active")
          two.classList.remove("active")
          one.classList.remove("active")
          plus.classList.remove("active")
          minus.classList.remove("active");
        if(p==1)
         { one.classList.add("active");
        }
         else
        {p--;
            if(p==2)
          { two.classList.add("active");
          }
         else if(p==3)
          { three.classList.add("active");
          }
          else if(p==4)
          { four.classList.add("active");
          }
         else if(p==5)
          { five.classList.add("active");
          }
        else  if(p==1)
        { one.classList.add("active");
        }
        else {minus.classList.add("active");}
        getData(); }
});
///////////////////////////////////
let one= document.createElement("button");
one.classList.add("add_to_cart_button");
one.textContent="1";
pg.appendChild(one);
one.addEventListener('click',(ev) =>
         {  
          five.classList.remove("active") 
          four.classList.remove("active")
          three.classList.remove("active")
          two.classList.remove("active")
          plus.classList.remove("active")
          minus.classList.remove("active")

          one.classList.add("active");
         p=1;       
         getData();

});
///////////////////////////////////
let two= document.createElement("button");
two.classList.add("add_to_cart_button");
two.textContent="2";
pg.appendChild(two);
two.addEventListener('click',(ev) =>
         { 
          five.classList.remove("active") 
          four.classList.remove("active")
          three.classList.remove("active")
          plus.classList.remove("active")
          one.classList.remove("active")
          minus.classList.remove("active")

          two.classList.add("active"); 
         p=2;
         getData();
});
///////////////////////////////////
let three= document.createElement("button");
three.classList.add("add_to_cart_button");
three.textContent="3";
pg.appendChild(three);
three.addEventListener('click',(ev) =>
         {  
          five.classList.remove("active") 
          four.classList.remove("active")
          plus.classList.remove("active")        
          two.classList.remove("active")
          one.classList.remove("active")
          minus.classList.remove("active")

          three.classList.add("active");
         p=3;
         getData();
     
});
///////////////////////////////////
let four= document.createElement("button");
four.classList.add("add_to_cart_button");
four.textContent="4";
pg.appendChild(four);
four.addEventListener('click',(ev) =>
         { 
          five.classList.remove("active") 
          plus.classList.remove("active")
          three.classList.remove("active")
          two.classList.remove("active")
          one.classList.remove("active")
          minus.classList.remove("active") 

          four.classList.add("active");
         p=4;
         getData();
});
///////////////////////////////////
let five= document.createElement("button");
five.classList.add("add_to_cart_button");
five.textContent="5";
pg.appendChild(five);
five.addEventListener('click',(ev) =>
         {  
          plus.classList.remove("active") 
          four.classList.remove("active")
          three.classList.remove("active")
          two.classList.remove("active")
          one.classList.remove("active")
          minus.classList.remove("active")
          
          five.classList.add("active");
         p=5;
         getData();
});

let plus= document.createElement("button");
plus.classList.add("add_to_cart_button");
plus.textContent=">>>";
pg.appendChild(plus);
plus.addEventListener('click',(ev) =>
         {
          five.classList.remove("active") 
          four.classList.remove("active")
          three.classList.remove("active")
          two.classList.remove("active")
          one.classList.remove("active")
          plus.classList.remove("active")
          minus.classList.remove("active");
        
            p++;
            if(p==2)
          { two.classList.add("active");
          }
         else if(p==3)
          { three.classList.add("active");
          }
          else if(p==4)
          { four.classList.add("active");
          }
         else if(p==5)
          { five.classList.add("active");
          }
        else {plus.classList.add("active");}
         
         getData();
});
one.classList.add("active")
getData();



