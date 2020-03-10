var p = '1';
var j='3';





function getData() {
    
    
    document.write('<ul style="list-style-type: none;margin: 0;padding: 0;overflow: hidden;background-color: #333;">\
    <li style="float: left;">\
      <a href="home.html" style="display: block;color: white;text-align: center;padding: 14px 16px; text-decoration: none;" >Home</a>\
    </li>\
    <li style="float: left;">\
      <a href="#" style="display: block;color: white;text-align: center;padding: 14px 16px; text-decoration: none;">About</a>\
    </li>\
    <li style="float: left;">\
      <a href="#" style="display: block;color: white;text-align: center;padding: 14px 16px; text-decoration: none;">Contact us</a>\
    </li>\
    </ul>');

   
const xhr  = new XMLHttpRequest();
 
xhr.open('GET','https://afternoon-falls-30227.herokuapp.com/api/v1/products?page='+ p +'&limit='+ j );
xhr .send();
xhr .onload = ()=>
{   
    let res=JSON.parse(xhr.response);
    res=res.data;
    

   
for(let i=0;i<res.length;i++)
    {
      
        let divv = document.createElement("div");
       
       
        

        let name = document.createElement("p");
        let imgg = document.createElement("img");
        let price = document.createElement("p");

        name.textContent =(res[i].Name);
        imgg.setAttribute("src",res[i].ProductPicUrl);
        price.textContent =(res[i].Price);


        document.body.appendChild(divv);
        
        divv.appendChild(name);
        divv.appendChild(imgg);
        divv.appendChild(price);
        //////////////////////////
        price.style.color = "red";
        price.style.font = "italic bold 20px arial,serif";
        price.style.fontSize = "xx-large";
        
        //////////////////////
        divv.style.textAlign = "center";
        divv.style.outline = "thick solid #0000FF";

        
       
}


////////////////////////////////

let minus= document.createElement("button");
minus.textContent="<<<";
document.body.appendChild(minus);

minus.addEventListener('click',(ev) =>
         {  
          
       document.body.innerHTML="";   
     
        
         p--;
         getData();
        
         

});
///////////////////////////////////
let one= document.createElement("button");
one.textContent="1";
document.body.appendChild(one);
one.addEventListener('click',(ev) =>
         {  
          
       document.body.innerHTML="";   
     
        
         p=1;
         
         getData();
        
         


});
///////////////////////////////////
let two= document.createElement("button");
two.textContent="2";
document.body.appendChild(two);
two.addEventListener('click',(ev) =>
         {  
          
       document.body.innerHTML="";   
     
        
         p=2;
         getData();
        
         


});
///////////////////////////////////
let three= document.createElement("button");
three.textContent="3";
document.body.appendChild(three);
three.addEventListener('click',(ev) =>
         {  
          
       document.body.innerHTML="";   
     
        
         p=3;
         getData();
        
         


});
///////////////////////////////////
let four= document.createElement("button");
four.textContent="4";
document.body.appendChild(four);
four.addEventListener('click',(ev) =>
         {  
          
       document.body.innerHTML="";   
     
        
         p=4;
         getData();
        
         


});
///////////////////////////////////
let five= document.createElement("button");
five.textContent="5";
document.body.appendChild(five);
five.addEventListener('click',(ev) =>
         {  
          
       document.body.innerHTML="";   
     
        
         p=5;
         getData();
        
         


});

let plus= document.createElement("button");
plus.textContent=">>>";
document.body.appendChild(plus);
plus.addEventListener('click',(ev) =>
         {  
        document.body.innerHTML="";
        
        
        

       
       
         p++;
         getData();
         


});

}


}


getData();



