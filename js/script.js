var allproducts = document.querySelectorAll(".product-info h1")
var  div1 = document.querySelector("#content")
var btn = document.querySelector("#showbtn")
var totalprice=0



allproducts.forEach(function(furniture){
    furniture.onclick = function(){
        div1.innerHTML += furniture.textContent +  " + "
        totalprice += +(furniture.getAttribute("price"))

        if(div1.innerHTML != ""){
            btn.style.display="block";
            btn.style.height="50px";
            btn.style.width="150px";
            btn.style.backgroundColor="rgb(197, 79, 79)";
            btn.style.color="white";
            btn.style.fontSize="22px";
            btn.style.borderRadius="10px";
        }
    }
})
showbtn.onclick = function(){
   document.getElementById("totalprice").innerHTML= totalprice
}