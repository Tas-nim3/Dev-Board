function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

function setInnerTextByID(id,value){
    document.getElementById(id).innerText = value;
}