document.getElementById('start_button').onclick = function changeContent() {
  alert("1");
}

var lastGuess = 0;

document.getElementById('guess_button').onclick = function checkGuess() {
	const randomValue = getRandomIntInclusive(0, 1);
	if(randomValue) {
		alert("נמוך מדי!");
	}else {
		alert("גבוה מדי!");
	}
	lastGuess = document.getElementById('guess_box').value;
}

document.getElementById('sensless').onclick = function sensless() {
	let dot = ".";
	if (lastGuess.includes(".")) {
		dot = "";
	}
	alert("אה אה אה. חג שמח מפסידן! המספר היה: " + lastGuess + dot + 7);
}

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

setInputFilter(document.getElementById("guess_box"), function(value) {
	return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
