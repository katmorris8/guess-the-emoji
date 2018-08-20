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
    maleArtist: {
        gender: 'male',
        hairColor: 'light',
        skinColor: 'light',
        holding: true,
        headCover: true,
        mustache: true,
        eyeCover: false,
        collar: false,
    },
    femaleJudge: {
        gender: 'female',
        hairColor: 'light',
        skinColor: 'light',
        holding: true,
        headCover: false,
        mustache: false,
        eyeCover: false,
        collar: true,
    },
    maleVampire: {
        gender: 'male',
        hairColor: 'dark',
        skinColor: 'light',
        holding: false,
        headCover: false,
        mustache: false,
        eyeCover: false,
        collar: true,
    },
    maleFirefighter: {
        gender: 'male',
        hairColor: 'dark',
        skinColor: 'light',
        holding: true,
        headCover: true,
        mustache: true,
        eyeCover: true,
        collar: true,
    },
    femaleScientist: {
        gender: 'female',
        hairColor: 'dark',
        skinColor: 'dark',
        holding: true,
        headCover: false,
        mustache: false,
        eyeCover: true,
        collar: true,
    },
    maleCop: {
        gender: 'male',
        hairColor: 'dark',
        skinColor: 'dark',
        holding: false,
        headCover: true,
        mustache: true,
        eyeCover: false,
        collar: true,
    },
    femaleFarmer: {
        gender: 'female',
        hairColor: 'light',
        skinColor: 'light',
        holding: true,
        headCover: true,
        mustache: false,
        eyeCover: false,
        collar: true,
    },
    femaleMuslim: {
        gender: 'female',
        hairColor: 'dark',
        skinColor: 'dark',
        holding: false,
        headCover: true,
        mustache: false,
        eyeCover: false,
        collar: false,
    },
    maleTeacher: {
        gender: 'male',
        hairColor: 'light',
        skinColor: 'light',
        holding: true,
        headCover: false,
        mustache: true,
        eyeCover: true,
        collar: false,
    },
};

const emojiElements = document.querySelectorAll('.emoji');
const emojisElement = document.querySelector('.emojis');

let selectedEmojiElementIndex; // selected emoji index
let selectedEmoji; // selected emoji object name
// let selectedEmojiElementId = Number(selectedEmojiElementIndex);
// let selectedEmojiElement = document.getElementById(selectedEmojiElementId);
// let selectedEmojiElementId = Number(selectedEmojiElementIndex);
let selectedEmojiElement;
let selectedEmojiElementId;
let notEliminatedEmoji;
// let selectedEmojiElement = document.getElementById('selectedEmojiElementId');
// let eliminatedEmojis = document.querySelectorAll('.eliminate');
const questions = document.getElementById('questions');
//document.querySelectorAll('option'); = Array of Option elements with questions
// const value = questions.value;
let score = document.querySelector('.score');
let scoreText = 10000;
const modalBox = document.querySelector('.modal-box');
let answerMessage = document.querySelector('.answer-message');
const modalBoxButton = document.querySelector('.continue-button');
// emojisElement.addEventListener('click', handleEmojiClick);
let guessButton = document.querySelector('.guess-button');
guessButton.addEventListener('click', makeEarlyGuess);


for (let i = 0; i < emojiElements.length; i++) {
    emojiElements[i].addEventListener('click', handleEmojiClick);
}
console.log(emojiElements.length);

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


    selectedEmojiElementIndex = emojiElements[randomEmoji].getAttribute('id');
    if (Number(selectedEmojiElementIndex) === randomEmoji) {
        emojiElements[randomEmoji].classList.add('selected');
    }

    const askButton = document.querySelector('.ask-button');
    askButton.addEventListener('click', getQuestion);


    selectedEmojiElementId = Number(selectedEmojiElementIndex);
    selectedEmojiElement = document.getElementById(selectedEmojiElementId);
    console.log(selectedEmojiElement);
}

function getQuestion() {
    score.innerHTML = scoreText -= 1000;
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
            answerMessage.innerHTML = `No, I am not holding anything.`;
        }
    } else if (value === 'headCover') {
        if (emojis[selectedEmoji].headCover === true) {
            answerMessage.innerHTML = `Yes, I do have something on my head.`;
        } else {
            answerMessage.innerHTML = `No, I don't have anything on my head.`;
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
            answerMessage.innerHTML = `No, I don't have anything over my eyes.`;
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
// click to add eliminate class to an emoji
// 
function handleEmojiClick(event) {
    event.target.classList.add('eliminate');
    notEliminatedEmoji = document.querySelector('.not-eliminated');
    event.target.classList.remove('not-eliminated');
    console.log(event.target.id);
    console.log(notEliminatedEmoji);
    


    event.target.removeEventListener('click', handleEmojiClick);
    let eliminatedEmojis = document.querySelectorAll('.eliminate');

    if (eliminatedEmojis.length === emojiElements.length - 1) {
        if (notEliminatedEmoji && notEliminatedEmoji.classList.contains('selected')) {
            setTimeout(() => {
                winningMessage();
            }, 500);
            
        } else {
            setTimeout(() => {
                losingMessage();
            }, 500);
            
        }

    }

    if (event.target.classList.contains('selected')) {
        console.log('selected!');
    }
}

function makeEarlyGuess() {
    emojisElement.addEventListener('click', earlyGuess)
}

function earlyGuess(event) {
    if (event.target.classList.contains('selected')) {
        setTimeout(() => {
            winningMessage();
        }, 500);
        
    } else {
        setTimeout(() => {
            losingMessage();
        }, 500);
        
    }
}

function winningMessage() {
    alert('you won!');
}

function losingMessage() {
    alert('you lost!');
}


chooseEmoji();


console.log(emojis.femaleDetective); // properties and values
console.log(selectedEmoji);
console.log(emojis[selectedEmoji]); //properties and values of selected emoji
console.log(emojis[selectedEmoji].holding);
