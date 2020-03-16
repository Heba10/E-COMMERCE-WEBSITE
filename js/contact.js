var cart_price=document.getElementById('elements_total');
var cart_amount=document.getElementById('elements_no');
if (localStorage.getItem('cart_price') === null&&localStorage.getItem('cart_amount') === null) {
  cart_price.innerText=0;
  cart_amount.innerText=0;
}
else{
cart_price.innerText=window.localStorage.getItem('cart_price');
cart_amount.innerText=window.localStorage.getItem('cart_amount');
}
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "The Length Of Name Is Too Short Please Enter valid Name  ";
      error_message.innerHTML = text;
      return false;
    }
    if(name.length > 50){
        text = "The Length Of Name Is Too Long Please Enter valid Name ";
        error_message.innerHTML = text;
        return false;
      }
    if(subject.length < 5){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
   
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 5){
      text = "Please Enter More Than 5 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
  
 