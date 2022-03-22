// // Exercise 1  Simple If/Else Statement

let x = 5;
let y = 2;

//You should display:
//x is the biggest number

if (x >= y) {

	console.log (`${x} is the bigger number`)
}

//Exercise 2: Chihuahua

//1
let newDog = "Chihuahua";

//2
let = ["Chihuahua"]
console.log(newDog.length)

//3
console.log('Chihuahua'.toUpperCase());
console.log('Chihuahua'.toLowerCase());

//4

if (newDog=="Chihuahua"){
	console.log (`I love Chihuahuas, it’s my favorite dog breed`)
}


//Exercise 3: Even or Odd 

let number = prompt("number", "10");

console.log (`10 is an even number`)


// Exercise 4 Group chat 

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let len = users.length;

if (len === 0){
	console.log(`no one`);

}
else if (len ===1){
	console.log(users[0]);
}

else if (len ===2){
	console.log (users[0],users[1]);
}
else if (len >2){
	console.log(users[0], users[1] `more ${len-2}users are online`);
}