const btn=document.querySelectorAll("button");
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnitem=event.target
        var product=btnitem.Element
        var productimg=product.querySelector("img").src 
        var productname=product.querySelector("span").innertext
        var productprice=product.querySelector("p").innertext
        console.log(productprice)

    })
})