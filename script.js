var sidenav = document.querySelector(".side-navbar")
function opennav(){
    sidenav.style.left="0"
}
function closenav(){
    sidenav.style.left="-40%"
}
var products = document.getElementById("Products")
var search = document.getElementById("search")
var productlist = products.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()
    for(count = 0; count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("h4").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }

    }
} )