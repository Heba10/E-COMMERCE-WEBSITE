var p = '1';
var j='3';





function getData() {
    
    
    document.write('<ul>\
    <li>\
      <a href="home.html">Home</a>\
    </li>\
    <li>\
      <a href="#">About</a>\
    </li>\
    <li>\
      <a href="#">Contact us</a>\
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
        let imgg = document.createElement("img");
        let id = document.createElement("p");
        imgg.setAttribute("src",res[i].ProductPicUrl);
        id.textContent =(res[i].ProductId);
        document.body.appendChild(divv);
        divv.appendChild(imgg);
        divv.appendChild(id);
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


///////////////////////
let plus= document.createElement("button");
plus.textContent=">>>";
document.body.appendChild(plus);
plus.addEventListener('click',(ev) =>
         {  
        document.body.innerHTML="";
        // document.getElementById('header').innerHTML="";
        
        

       
       
         p++;
         getData();
         


});
}

}
getData();



