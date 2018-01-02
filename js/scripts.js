var buttonItemsClass = document.getElementsByClassName('button');

console.log(buttonItemsClass);

var numberOfButtons = buttonItemsClass.length
for (i = 0 ; i <= numberOfButtons ; i++) {
  
  alert(buttonItemsClass[i].innerText);
}