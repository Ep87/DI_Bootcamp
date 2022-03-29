//exercise 1 : list of people 

//1 
let people = ["Greg", "Mary", "Devon", "James"];
people.shift("Greg");

//2
people.splice(2,1,"Jason");
console.log(people)

//3
people.push("Ephy");
console.log(people) 

//4 - 5 
let inx1 = people.indexOf("Mary");
let inx2 = people.indexOf("Ephy");
console.log ('indexes',inx1,inx2);
console.log(inx1);
let copy = people.slice(inx1+1,inx2)
console.log(copy)

//6

let inx3 = people.indexOf("Foo");
console.log (inx3);

//7

let last = people["James"];

//part2 Loops 

for (let i in people) {
   console.log(i); //0 1 2
   console.log(people[i]) //Greg Mary Jaspn Ephy
}

for (let i = 0; i < people.length -1; i++) {
	if (people[i] === "jason") 
		{ break; 
		}
		console.log(people[i])
	}


//exercise 2 Your Favorite Colors 

const array_colors = ["blue,green,yellow,red"]; 

//exercise 3 Repest the question

let num=0
while (num < 10){
	num = prompt ('pick a number');
	console.log(num);
	if(!isNaN(num) && num > 10) {
		break;
	}
}

console.log(num+"is greater than 10");

//excercise 4

let building = {
	numberOfFloors : 4,
	numberOfAptByFloor : {
		firstFloor : 3,
		secondFloor : 4,
		thirdFloor : 9,
		fourthFloor : 2,
	},
	nameOfTenants : ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
		sarah: [3, 990],
		dan :  [4, 1000],
		david : [1, 500],
	},
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
console.log(building.numberOfRoomsAndRent.dan)

//exercize 5 family 

let family = "";

//exercize 6 


let details = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer'
}
for (x in details) {
	console.log([x])
	console.log(details[x])

	//exercize 7 secret group 

	let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
	let arr = []
	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		arr.push(name[0]);
		console.log (arr.sort().join(''));
	}
}