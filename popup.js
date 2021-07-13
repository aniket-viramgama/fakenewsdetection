var input="arr";
window.onload=function(){

let form = document.getElementById('form');
if(form){ 
form.addEventListener('submit', function(e){
    e.preventDefault();

    input = form.elements[0].value;
    console.log(input);
    localStorage.setItem('inputRetainedEvenAfterRefresh',input)
    window.location.href = "popup2.html"

})
}
}
