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




/* #### Snack 4 #### */

/*const arrGuests = ["daisy", "nick", "tom", "myrtle", "george"];
console.log(arrGuests);

const userName = prompt("Insert your name");

let found = false;
for (let i = 0; i < arrGuests.length; i++) {
    
    if(arrGuests[i] === userName){
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