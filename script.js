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
	if (name != null && age != null && favoriteColor != null) {
		alert("Hello " + name + "! You are " + age + "years old, and your favorite color is " + favoriteColor + ".",);
			  }
	
}


