window.addEventListener("load", addListerners);
function addListerners(){
    document.getElementById("subscribe").addEventListener("click", popup);
}
function popup(){
    var message = "Thank you!";
    alert(message);
}