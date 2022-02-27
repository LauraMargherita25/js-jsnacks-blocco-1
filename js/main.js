/*const num1 = parseInt(prompt("Insert a number"));
const num2 = parseInt(prompt("Insert another number"));

if (num1 > num2){
    alert(num1);
}else if (num2 > num1){
    alert(num2);
}else{
    alert("even");
}*/

/*const word1 = prompt("Write a word");
const word2 = prompt("Write another word");

if (word1.length > word2.length){
    alert(word1 + " " + word2);
} else if (word2.length > word1.length){
    alert(word1 + " " + word2);
}else {
    alert("They have the same length ");
}*/



let arrNum = []

for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt("inserisci un numero"));
    arrNum.push(num);
}

console.log(arrNum);

let somma = 0;
for (let i = 0; i < arrNum.length; i++) {
    somma = somma + arrNum[i];
}

alert(somma);  