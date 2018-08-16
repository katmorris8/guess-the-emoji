let emoji = [];
const emojis = {
    femaleDetective: {
        gender: 'female',
        hairColor: 'dark',
        skinColor: 'light',
        holding: true,
        headCover: true,
        mustache: false,
        eyeCover: false,
        collar: true,
    },

};
const emojiElement = document.querySelectorAll('.emoji');
const femaleDetectiveElement = emojiElement[0].getAttribute('id');
let selectedEmoji; // selected emoji index
const questions = document.getElementById('questions');
// const value = questions.value;
const modalBox = document.querySelector('.modal-box');
let answerMessage = document.querySelector('.answer-message');
const modalBoxButton = document.querySelector('.continue-button');

// ! evaluate the answer of the question
// display the answer in a prompt (later modal box)
// make this happen for every question
// remove that question from the option list

// prompt an answer using a modal box w answer


// click event for a start button that runs chooseEmoji()
function chooseEmoji() {
    const randomEmoji = Math.floor(Math.random() * Object.keys(emojis).length);
    selectedEmoji = Object.keys(emojis)[randomEmoji];
    emoji.push(emojis[selectedEmoji]);
    const askButton = document.querySelector('.ask-button');
    askButton.addEventListener('click', getQuestion);
}

function getQuestion() {
    const value = questions.value;
    modalBox.style.display = 'block';
    
    if (value === 'gender') {
        answerMessage.innerHTML = `I am ${emojis[selectedEmoji][value]}.`;
    } else if (value === 'hairColor') {
        answerMessage.innerHTML = `I have ${emojis[selectedEmoji][value]} hair.`;
    } else if (value === 'skinColor') {
        answerMessage.innerHTML = `I have ${emojis[selectedEmoji][value]} skin.`;
    } else if (value === 'holding') {
        if (emojis[selectedEmoji].holding === true) {
            answerMessage.innerHTML = `Yes, I am holding something.`;
        } else {
            answerMessage.innerHTML = `No, I am holding something.`;
        }
    } else if (value === 'headCover') {
        if (emojis[selectedEmoji].headCover === true) {
            answerMessage.innerHTML = `Yes, I do have something on my head.`;
        } else {
            answerMessage.innerHTML = `No, I don't have something on my head.`;
        }
    } else if (value === 'mustache') {
        if (emojis[selectedEmoji].mustache === true) {
            answerMessage.innerHTML = `Yes, I do have a mustache.`;
        } else {
            answerMessage.innerHTML = `No, I don't have a mustache.`;
        }
    } else if (value === 'eyeCover') {
        if (emojis[selectedEmoji].eyeCover === true) {
            answerMessage.innerHTML = `Yes, I do have something over my eyes.`;
        } else {
            answerMessage.innerHTML = `No, I don't have something over my eyes.`;
        }
    } else if (value === 'collar') {
        if (emojis[selectedEmoji].collar === true) {
            answerMessage.innerHTML = `Yes, I am wearing a collar.`;
        } else {
            answerMessage.innerHTML = `No, I am not wearing a collar.`;
        }
    }
    modalBoxButton.addEventListener('click', nextQuestion);

}

function nextQuestion() {
    modalBox.style.display = 'none';
}

chooseEmoji();


console.log(emojis.femaleDetective); // properties and values
console.log(selectedEmoji);
console.log(emojis[selectedEmoji]); //properties and values of selected emoji
console.log(emojis[selectedEmoji].holding);


