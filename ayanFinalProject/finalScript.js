// Function to display a message along with user input
function userAnswer() {
    // Get the value of what the user entered. Then return it as part of a sentence
	var x = document.getElementById("in").value;
	document.getElementById("display").innerHTML = "Liberty and " + x + "!";
}

// Function to play audio
function playAudio() {
  // Grab the audio tag with the "launch" ID and allow it to play
  var audio = document.getElementById("launch");
  audio.play();
}

// Function to stop audio
function stopAudio() {
  // Grab the audio tag with the "launch" ID and stop it from playing
  var audio = document.getElementById("launch");
  audio.pause();
}