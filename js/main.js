const num1 = parseInt(prompt("Insert a number"));
const num2 = parseInt(prompt("Insert another number"));

if (num1 > num2){
    alert(num1);
}else if (num2 > num1){
    alert(num2);
}else{
    alert("even");
}