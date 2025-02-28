document.getElementById("Box-2").addEventListener('click',function(){
    window.location.href="./insideMain.html"
})

document.getElementById("back-btn").addEventListener('click',function(){
    window.location.href="./index.html"
})







document.getElementById("Completed-btn").addEventListener('click', function(event){
event.preventDefault();

let plusNumber =getInnerTextByID("plus-number");
let minusNumber =getInnerTextByID("minus-number");

if ( minusNumber > 0) {
    plusNumber =  plusNumber + 1;
    minusNumber = minusNumber - 1;

setInnerTextByID("plus-number",plusNumber);
setInnerTextByID("minus-number",minusNumber);

alert("Board updated Successfully")
this.disabled = true;
}
})