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
    maleAstronaut: {
        gender: 'male',
        hairColor: 'dark',
        skinColor: 'dark',
        holding: false,
        headCover: true,
        mustache: true,
        eyeCover: true,
        collar: false,
    },
    femaleRockstar: {
        gender: 'female',
        hairColor: 'light',
        skinColor: 'light',
        holding: true,
        headCover: false,
        mustache: false,
        eyeCover: true,
        collar: true,
    },
};

const emojiElement = document.querySelectorAll('.emoji');
const emojisElement = document.querySelector('.emojis');
let selectedEmojiElement;
let selectedEmoji; // selected emoji index
const questions = document.getElementById('questions');
//document.querySelectorAll('option'); = Array of Option elements with questions
// const value = questions.value;
const modalBox = document.querySelector('.modal-box');
let answerMessage = document.querySelector('.answer-message');
const modalBoxButton = document.querySelector('.continue-button');
emojisElement.addEventListener('click', handleEmojiClick);

// display the answer in a prompt (later modal box)
// make this happen for every question
// remove that question from the option list

// after closing modal box, eliminate emojis that don't match that description
// when the emoji is clicked, 
// add class to apply red overlay

// click make a guess button or after 4 questions,
// player has to click emoji
// on click event, see if the clicked emoji matches the selected emoji

// click event for a start button that runs chooseEmoji()
function chooseEmoji() {
    const randomEmoji = Math.floor(Math.random() * Object.keys(emojis).length);
    selectedEmoji = Object.keys(emojis)[randomEmoji];
    console.log(randomEmoji);
    
    selectedEmojiElement = emojiElement[randomEmoji].getAttribute('id');
    if (parseInt(selectedEmojiElement) === randomEmoji) {
        emojiElement[randomEmoji].classList.add('selected');
    }

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
    modalBoxButton.addEventListener('click', closeModalBox);
}

function closeModalBox() {
    modalBox.style.display = 'none';
}

// emojis left function?
// emoji elements that don't have an .eliminated class and who's 
function handleEmojiClick() {
    // emojiElement.classList.contains('eliminate);
    // emojiElement.classList.add('eliminate');

    // check if class has target emoji
    // if not, return
    // ! check does the element have the class eliminated
    // ! return
    // check if it's the right answer
    // if it is the right answer, display winning message
    // if not, add the eliminated class
    
    
    if (event.target.classList.contains('eliminate')) {
        return console.log('has eliminate class');
    }

    
}

chooseEmoji();


console.log(emojis.femaleDetective); // properties and values
console.log(selectedEmoji);
console.log(emojis[selectedEmoji]); //properties and values of selected emoji
console.log(emojis[selectedEmoji].holding);