function playTheGame(){
	let userAnswer = confirm (`Do you want to play the game?`);
	console.log(userAnswer); 

	if (userAnswer === "false"){
		alert("Goodbye")
	}
	else{
		alert("Lets Play")

		let userNumber = Number(prompt("Whats your number?")); 
		console.log(userNumber);
		console.log(typeof(userNumber));
		if (isNaN(userNumber))
		{
			alert(`Sorry not a number, Goodbye`);

		}
		else if (userNumber<0 || userNumber >10){
			alert (`Sorry not a good number goodbye`);
		}
		else{ 
			let computerNumber = Math.floor(Math.random()* 11);
			console.log(computerNumber);

			test(userNumber,computerNumber)

		}
	}
}
let counter = 0 

function test(userNum,computerNum){
	console.log(counter,userNum,computerNum);
	if (counter >3){
		alert (` sorry you lose not other chance`)
		return  
	}
	if (userNum === computerNum){
		alert(`Winner`)
	}
	else if (userNum > computerNum){
		alert (	`“Your number is bigger then the computer’s, guess again”` );
		prompt(`Have anoter guess!`);
		counter++
	}

	else if (userNum < computerNum){
		alert (`“Your number is smaller then the computer’s, guess again”`);
		prompt(`Have anoter guess!`);
		counter++
	}
}










