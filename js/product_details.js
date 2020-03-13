
      let MainCategory = document.getElementById("one");
      let Category = document.getElementById("two");
      let SupplierName = document.getElementById("three");
      let Price = document.getElementById("four");
      let Name = document.getElementById("five"); 
      let CategoryName = document.getElementById("six");
      let ProductName = document.getElementById("seven");
      let ProductWeight = document.getElementById("eight");
      let Width = document.getElementById("nine");
      let Depth = document.getElementById("ten");
      let Height = document.getElementById("eleven");
      let Description = document.getElementById("twelve");
      let imgdiv = document.getElementById("thirteen");
      let imgesdiv = document.getElementById("fourtheen");


     


      let MC = localStorage.getItem('MainCategoryProduct');
     let Ca = localStorage.getItem('CategoryProduct');
     let SN = localStorage.getItem('SupplierNameProduct');
      let Pr = localStorage.getItem('PriceProduct');
      let Na = localStorage.getItem('NameProduct'); 
      let WM = localStorage.getItem('WeightM');
      let WU = localStorage.getItem('WeightU');
      let Weight = WM + WU ;
      let Wi = localStorage.getItem('Width');
      let De = localStorage.getItem('Depth');
      let He = localStorage.getItem('Height');
      let Du = localStorage.getItem('DimUnit');
      let height = He + Du ;
      let description = localStorage.getItem('Description');
      let Img = localStorage.getItem('Img');
      let Img1= localStorage.getItem('Img1');
      let Img2= localStorage.getItem('Img2');
      let Img3= localStorage.getItem('Img3');
      let Img4= localStorage.getItem('Img4');

     

      let img = document.createElement("img");
      let img1 = document.createElement("img");
      let img2 = document.createElement("img");
      let img3 = document.createElement("img");
      let img4 = document.createElement("img");

      img.setAttribute("src",Img);
      img1.setAttribute("src",Img1);
      img2.setAttribute("src",Img2);
      img3.setAttribute("src",Img3);
      img4.setAttribute("src",Img4);


      imgdiv.appendChild(img);
      imgesdiv.appendChild(img1);
      imgesdiv.appendChild(img2);
      imgesdiv.appendChild(img3);
      imgesdiv.appendChild(img4);




   


      MainCategory.innerHTML = MC;
      Category.innerHTML = Ca;
      SupplierName.innerHTML = SN;
      Price.innerHTML = Pr;
      Name.innerHTML = Na;
      CategoryName.innerHTML = Ca;
      ProductName.innerHTML = Na;
      ProductWeight.innerHTML = Weight;
      Width.innerHTML = Wi;
      Depth.innerHTML = De;
      Height.innerHTML = height;
      Description.innerHTML = description;
     



   /*    localStorage.setItem('Img1',Img1);
      localStorage.setItem('Img2',Img2);
      localStorage.setItem('Img3',Img3);
      localStorage.setItem('Img4',Img4); */