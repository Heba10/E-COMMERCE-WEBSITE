var p = '1';
var j='3';
function getData() {
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

let page= document.createElement("button");
page.textContent="page";
document.body.appendChild(page);
page.addEventListener('click',(ev) =>
         {  
        document.body.innerHTML="";
         p++;
         getData();
         


});


///////////////////////
let pack= document.createElement("button");
pack.textContent="pack";
document.body.appendChild(pack);
pack.addEventListener('click',(ev) =>
         {  
        document.body.innerHTML="";
         p--;
         getData();
         


});
}

}
getData();



