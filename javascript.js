function btn(){
    document.querySelector(".none").style.display = "block"
}
function buy(){
    document.getElementById("buy").style.display = "block"
    document.querySelector(".count").style.display = "block"
    document.getElementById("calc").value = ""
    document.getElementById("calc").style.display = "none"
    document.getElementById("result").style.display = "none"

}
function rent(){
    document.getElementById("buy").style.display = "none"
    document.getElementById("calc").style.display = "block"
    document.querySelector(".count").style.display = "none"
}
function calc(){
    let calc = document.getElementById("calc").value
    if(calc != ""){
    let x = +calc * .5
    document.getElementById("result").style.display = "block"
    document.getElementById("result").innerHTML =   x + " كيس منديل" 
    document.querySelector(".count").style.display = "block"
    document.getElementById("calc").style.background = "#16760039"
}else{
    document.querySelector(".count").style.display = "none"
    document.getElementById("result").style.display = "none"
    document.getElementById("calc").style.background = "#76000039"
}
}
function good(){
    alert("تمت عملية الشراء بنجاح مبروك عليك تعيش و تركبه ")
    document.getElementById("result").style.display = "none"
    document.querySelector(".count").style.display = "none"
    document.getElementById("buy").style.display = "none"
    document.querySelector(".go").style.display = "none"
    document.querySelector(".lets").style.display = "none"
    document.getElementById("calc").style.display = "none"
    setTimeout(function(){location.reload()},.5000)

}


// --------------------------------------------------------------------------------------------



function btn2(){
    document.querySelector(".none2").style.display = "block"
}
function buy2(){
    document.getElementById("buy2").style.display = "block"
    document.querySelector(".count2").style.display = "block"
    document.getElementById("calc2").value = ""
    document.getElementById("calc2").style.display = "none"
    document.getElementById("result2").style.display = "none"

}
function rent2(){
    document.getElementById("buy2").style.display = "none"
    document.getElementById("calc2").style.display = "block"
    document.querySelector(".count2").style.display = "none"
}
function calc2(){
    let calc = document.getElementById("calc2").value
    if(calc != ""){
    let x = +calc * 1
    document.getElementById("result2").style.display = "block"
    document.getElementById("result2").innerHTML =   x + " كيس منديل" 
    document.querySelector(".count2").style.display = "block"
    document.getElementById("calc2").style.background = "#16760039"
}else{
    document.querySelector(".count2").style.display = "none"
    document.getElementById("result2").style.display = "none"
    document.getElementById("calc2").style.background = "#76000039"
}
}
function good2(){
    alert("تمت عملية الشراء بنجاح مبروك عليك تعيش و تركبه ")
    document.getElementById("result2").style.display = "none"
    document.querySelector(".count2").style.display = "none"
    document.getElementById("buy2").style.display = "none"
    document.querySelector(".go2").style.display = "none"
    document.querySelector(".lets2").style.display = "none"
    document.getElementById("calc2").style.display = "none"
    setTimeout(function(){location.reload()},.5000)
}


// ------------------------------------------------------------------------------






function btn3(){
    document.querySelector(".none3").style.display = "block"
}
function buy3(){
    document.getElementById("buy3").style.display = "block"
    document.querySelector(".count3").style.display = "block"
    document.getElementById("calc3").value = ""
    document.getElementById("calc3").style.display = "none"
    document.getElementById("result3").style.display = "none"

}
function rent3(){
    document.getElementById("buy3").style.display = "none"
    document.getElementById("calc3").style.display = "block"
    document.querySelector(".count3").style.display = "none"
}
function calc3(){
    let calc = document.getElementById("calc3").value
    if(calc != ""){
    let x = +calc * 1
    document.getElementById("result3").style.display = "block"
    document.getElementById("result3").innerHTML =   x + " كيس منديل" 
    document.querySelector(".count3").style.display = "block"
    document.getElementById("calc3").style.background = "#16760039"
}else{
    document.querySelector(".count3").style.display = "none"
    document.getElementById("result3").style.display = "none"
    document.getElementById("calc3").style.background = "#76000039"
}
}
function good3(){
    alert("تمت عملية الشراء بنجاح مبروك عليك تعيش و تركبه ")
    document.getElementById("result3").style.display = "none"
    document.querySelector(".count3").style.display = "none"
    document.getElementById("buy3").style.display = "none"
    document.querySelector(".go3").style.display = "none"
    document.querySelector(".lets3").style.display = "none"
    document.getElementById("calc3").style.display = "none"
    setTimeout(function(){location.reload()},.5000)

}
