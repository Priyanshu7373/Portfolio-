
    var car="";
document.getElementsByClassName("1")[0].addEventListener("click", function() {
  car=car+"1";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("0")[0].addEventListener("click", function() {
  car=car+"0";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("2")[0].addEventListener("click", function() {
  car=car+"2";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("3")[0].addEventListener("click", function() {
  car=car+"3";[0]
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("4")[0].addEventListener("click", function() {
  car=car+"4";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("5")[0].addEventListener("click", function() {
  car=car+"5";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("6")[0].addEventListener("click", function() {
  car=car+"6";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName(".")[0].addEventListener("click", function() {
  car=car+".";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("7")[0].addEventListener("click", function() {
  car=car+"7";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("8")[0].addEventListener("click", function() {
  car=car+"8";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("9")[0].addEventListener("click", function() {
  car=car+"9";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});

document.getElementsByClassName("+")[0].addEventListener("click", function() {
  car=car+"+";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("-")[0].addEventListener("click", function() {
  car=car+"-";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("/")[0].addEventListener("click", function() {
  car=car+"/";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("*")[0].addEventListener("click", function() {
  car=car+"*";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("%")[0].addEventListener("click", function() {
  car=car+"%";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("C")[0].addEventListener("click", function() {
  car=" ";
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("D")[0].addEventListener("click", function() {
   car = car.slice(0,car.length-1);
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
document.getElementsByClassName("=")[0].addEventListener("click", function() {
  car=eval(car);
document.getElementsByClassName("input")[0].setAttribute("value", car);
});
  