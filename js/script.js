const unorderedListElement = document.querySelector(".unordered-list"); 
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".text");
const emptyPara = document.querySelector(".empty-para");
const remainingGuessElement = document.querySelector(".remaining-guess");
const remainingGuessSpan = document.querySelector(".remaining-guess-span");
const remainingMessages = document.querySelector(".remaining-messages");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//using placeholders until the correct word is guessed//

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    emptyPara.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = textInput.nodeValue;
    console.log(guess);
    textInput.value = "";
});