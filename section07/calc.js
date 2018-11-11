var nf1 = document.getElementById('numField1');
var nf2 = document.getElementById('numField2');
var rf1 = document.getElementById("resultField");
var select = document.getElementById("calculatorSelect");

var form = document.getElementById("xypercent_form");

form.addEventListener("submit",function (event){
   //alert("form is clicked");
    
   console.log(nf1.value);
   console.log(nf2.value);
    
   var x = parseFloat(nf1.value);
   var y = parseFloat(nf2.value);
   var selectedCalc = select.value;
    
    //alert(selectedCalc);
       
   console.log(x);
   console.log(y);
    
    var result = "";
    
   if(!x || !y){
       alert("please enter valid numbers in the field");
   }else{
       
       switch(selectedCalc){
       
           case "NoSelection" : alert("please select a calculation");result=""; break;
           case "y_percent_of_x" : 
               result = (x*y/100);break;
           case "x_is_y_percent_of_what" : 
               result= (x*100/y);break;
           case "what_percent_of_x_is_y" :
               result = (y*100/x) + "%"; break;
           case "x_percent_of_what_is_y" :
               result = (y*100/x); break;
           case "y_percent_of_x_is_what" :
               result = (y*x/100); break;
           default : alert("unknown choice");result="";
       
       //alert(percent);
       }
       
       rf1.innerText = "Answer :"+result;
       
   }
    event.preventDefault();
    
});