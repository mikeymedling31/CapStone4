var indexId = 0;
var items = [indexId];
var total = [indexId];
var final = 0;
var text = "Your items: ";
function myFunction(price, name){
	total[indexId] = price;
	items[indexId] = name;
		indexId++;
}

function numb2(){
var i;

	for (i = 0; i < total.length; i++) {
  final += total[i];
}
	for (i = 0; i < items.length; i++) {
  text += items[i] + "  ";
}

if (confirm(text + "Your total is $" + final)) {
  alert("Your order is on the way!");
} else {
  alert("Your order was Cancelled!");
}
}