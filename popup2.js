
window.onload=function(){
    var input = localStorage.getItem('inputRetainedEvenAfterRefresh')
console.log(input)
    document.getElementById("show1").innerHTML = input;
    var rand = Math.floor(Math.random()*2);
    if(rand===0){ 
    document.getElementById("show2").innerHTML = "Detected Fake"
    document.getElementById("show2").style.color = "red"
    }
    else{
    document.getElementById("show2").innerHTML = "Detected Not Fake"
    document.getElementById("show2").style.color = "green"
    }


    
}