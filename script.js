let celcinput=document.querySelector(".celcius > input");
let farinput=document.querySelector(".Fahrenheit > input");
let kelinput=document.querySelector(".kelvin > input");
let btn=document.querySelector(".button button");

console.log(farinput);
function roundnum(number)
{
    return Math.round(number*100)/100
}
 celcinput.addEventListener('input',function(){
    let ctemp = parseFloat(celcinput.value)
    let ftemp = (ctemp*(9/5))+32
    let ktemp = ctemp+273.15

    farinput.value=roundnum(ftemp)
    kelinput.value=roundnum(ktemp)
})
farinput.addEventListener('input',function(){
    let ftemp = parseFloat(farinput.value)
    let ctemp = (ftemp-32)*(5/9)
    let ktemp = (ftemp-32)*(5/9)+273.15

    celcinput.value=roundnum(ctemp)
    kelinput.value=roundnum(ktemp)
})
kelinput.addEventListener('input',function(){
    let ktemp = parseFloat(kelinput.value)
    let ctemp = ktemp -273.15
    let ftemp = (ktemp-273.15)*(9/5)+32

    celcinput.value=roundnum(ctemp)
    farinput.value=roundnum(ftemp)
})

btn.addEventListener("click",function()
{
    celcinput.value=""
    farinput.value=""
    kelinput.value=""
})
