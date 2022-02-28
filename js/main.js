/* #### Snack 1 #### */

/*const num1 = parseInt(prompt("Insert a number"));
const num2 = parseInt(prompt("Insert another number"));

if (num1 > num2){
    alert(num1);
}else if (num2 > num1){
    alert(num2);
}else{
    alert("even");
}*/




/* #### Snack 2 #### */

/*const word1 = prompt("Write a word");
const word2 = prompt("Write another word");

if (word1.length > word2.length){
    alert(word1 + " " + word2);
} else if (word2.length > word1.length){
    alert(word1 + " " + word2);
}else {
    alert("They have the same length ");
}*/




/* #### Snack 3 #### */

/*let arrNum = [];

for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt("inserisci un numero"));
    arrNum.push(num);
}

console.log(arrNum);

let somma = 0;
for (let i = 0; i < arrNum.length; i++) {
    somma = somma + arrNum[i];
}

alert(somma);*/

/*let sum = 0; questo valore deve rimanere fuori dal ciclo

for (let i = 0; i < 10; i++) {
    
    let num = parseInt(prompt("Write a number"));
    
    sum = sum + num;
    
}

console.log(sum);*/



/* #### Snack 4 #### */

/*const arrGuests = ["daisy", "nick", "tom", "myrtle", "george"];
console.log(arrGuests);

const userName = prompt("Insert your name");

let found = false;
for (let i = 0; i < arrGuests.length; i++) {
    
    if(arrGuests[i].toLowerCase() == userName.toLowerCase()){
        found = true;
    }

}

if (found) {
    console.log("You are in");        
}else{
    console.log("Get out of here");
}*/




/* #### Snack 5 #### */

/*const arrNum = []
console.log (arrNum);

for (let i = 0; i < 6; i++) {
    const num = parseInt(prompt("Write a nuber"));

    if (num % 2 != 0) {
        arrNum.push(num);
    }
}*/




/* #### Snack 6 #### */

/*const num = prompt("Write a four-digit number");

let sum = 0;
for ( let i = 0; i < num.toString().length; i++) {
    sum += parseInt(num.toString()[i]);
}

alert(sum);*/


/*const stringNum = prompt("Write a four-digit number");

let sum = 0;

for (let i = 0; i < stingNum.length; i++) {
    sum = sum + parseInt(stringNum[i]);
}

console.log(sum);*/


/* con la divisione */
/*let num = parseInt(prompt("Write a four-digit number"));

if (num < 1000 || num > 9999){
    console.log("numero di cifre sbagliato")
}else{
    let sum = 0;
    for (let i = 0; i < 4; i++){
        sum += num % 10;
        num = Math.floor(num / 10)
    }
    console.log(sum)
}*/




/* #### Snack 1.9 #### */

/*let sum = 0;
for (let number = 1; number <= 10; number++) {

    sum += number;
    console.log(number);

}

let media = sum / 10;

console.log(sum);
console.log(media);*/




/* #### Snack 2.1 #### */


/*let sum = 0;
for (let i = 0; i < 5; i++) {
    
    let userInput = parseInt(prompt("Write a number"));
    console.log(userInput);
    
    sum = sum + userInput;
    console.log(sum);
}
console.log(sum);*/

let i = 0;
let sum = 0;

while (i < 5) {
    let userInput = parseInt(prompt("Write a number"));
    
    sum = sum + userInput;
    console.log(sum);

    i++;
}

console.log(sum);