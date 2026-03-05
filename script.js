const profile = {
	name: null,
	age: null,
	favoriteColor: null,
};

let responseCount = 0;
let questionCount = 3;

function question1() {
	profile.name = prompt("What is your name?");
	responseCount++;
	logStats();
	checkIfComplete();
}

function question2() {
	profile.age = prompt("What is your age?");
	responseCount++;
	logStats();
	checkIfComplete();
}

function question3() {
	profile.favoriteColor = prompt("What is your favorite color?");
	responseCount++;
	logStats();
	checkIfComplete();
}

function logStats() {
	console.log(
		"You have answered " +
			responseCount +
			" questions out of " +
			questionCount +
			" total question.",
	);
}

function checkIfComplete() {
	//figure out if the user has answered all the questions
	//if they do, display an alert() popup showing their completed profile
	//example output: "Your profile is complete! Name: Peter, Age: 30, Favorite Color: Blue"
}
