// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced!", "through", "the", "trees!", "in", "the", "light!", "of", "the", "moon!"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
	var wordString = "";
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
     for(var i = 0; i < theWordArray.length; i++){
     	wordString = wordString + " " + theWordArray[i];
     	console.log(wordString);
}
}
// Invoke the function and pass in the array
addExcitement(sentence)