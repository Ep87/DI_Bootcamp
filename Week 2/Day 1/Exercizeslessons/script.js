console.log ("hello")



let adressNumber = 22;
let addressStreet = "Nachalat Binyamin";
let country = "Israel";

// concatenate
let globalAddress = `I live in the ${adressNumber} ${addressStreet} in ${country}`; 

console.log("I live in the 22 Nachalat Binyamin in Israel");

// exercise 2
let birthyear = 1987;
//alert (Birthyear);
let futureyear = 2023;
let futureage = futureyear-birthyear;
console.log(futureage)
console.log(`I will be ${futureage} in ${futureyear}`)


// ['cat','dog','fish','rabbit','cow']
// .push horse 
// .splice rabbit

//exercise 1: Your Favorite Food 

let breakfast = 'pancakes';
let favourite_meal_of_the_day = 'lunch';
console.log(breakfast);
console.log(`I ate ${breakfast} in every ${favourite_meal_of_the_day}`)

//exercise 2: Series

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]; 
console.log(`I watched 3 series ${myWatchedSeries}`)

//part 2 

myWatchedSeries.splice (2,1,"Friends");
myWatchedSeries.push("unorthodox") 
myWatchedSeries.unshift("the people vs OJ")
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1][2])


//exercise 3 The Temperature Converter

let c = 17; 
let f = ((c / 5) * 9) + 32;
console.log(`${c}°C = ${f}°F`)

//exercise 4 Guess the answer #1

//let c;
//let a = 34;
//let b = 21;

    //console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

    //console.log(a+b) //second expression
    // Prediction:23
    // Actual:23

    //3.  value of c is undefined  
// 4. console.log(3 + 4 + '5');75 

//Exercise 5 : Guess The Answers #2

typeof(15)
// Prediction: ? 
// Actual: number

typeof(5.5)
// Prediction: ? 
// Actual: number

typeof(NaN)
// Prediction: ? 
// Actual: number

typeof("hello")
// Prediction: ?
// Actual: String 

typeof(true)
// Prediction:? 
// Actual:Boolean

typeof(1 != 2)
// Prediction:?
// Actual: boolean 

"hamburger" + "s"
// Prediction:?
// Actual:Hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: nan

"1" + "3"
// Prediction:?
// Actual:13

"1" - "3"
// Prediction:? 
// Actual: -2

"johnny" + 5
// Prediction:?
// Actual: Johnny5

"johnny" - 5
// Prediction:?
// Actual:nan

99 * "hello"
// Prediction:?
// Actual:nan

1 != 1
// Prediction:?
// Actual: false

1 == "1"
// Prediction:?
// Actual: true

1 === "1"
// Prediction:? 
// Actual:False

//Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction: 39
// Actual:534

5 - "4"
// Prediction:?
// Actual:1 

10 % 5
// Prediction:?
// Actual:0 

5 % 10
// Prediction:?
// Actual:5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction:?
// Actual: ''

" " + 0
// Prediction:? 
// Actual: '0'

true + true
// Prediction:?
// Actual:2 

true + false
// Prediction:?
// Actual:1

false + true
// Prediction:1 
// Actual:1 

false - true
// Prediction:?
// Actual:-1

!true
// Prediction:?
// Actual:False 

3 - 4
// Prediction:? 
// Actual: -1 

"Bob" - "bill"
// Prediction:? 
// Actual:nan 


//Daily Challenge JS arrays&methods
//Exercise 1 

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1)
fruits.sort();
fruits.push("kiwi")  
fruits.splice (0,1)
fruits.reverse();
console.log(fruits)


//Exercise 2:
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])

