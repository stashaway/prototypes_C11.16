function myMessage(){
    console.log("This is my first function!");
}
function add(x,y) {
    console.log(x+y);
}
function add2(x,y) {
    var total=x+y;
    return total;
}
var add2result = add2(10, 36);
function flipCard(element){
    $(element).hide();
}