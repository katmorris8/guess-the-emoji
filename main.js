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

const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startGame);
const guessButton = document.querySelector('.guess-button');

const emojiElements = document.querySelectorAll('.emoji');
const emojisElement = document.querySelector('.emojis');
let selectedEmojiElementIndex;
// selected emoji object name
let selectedEmoji;

let selectedEmojiElement;
let selectedEmojiElementId;
let notEliminatedEmoji;
let eliminatedEmojis;
let winMessageEmoji = document.querySelector('.win-emoji');
let loseMessageEmoji = document.querySelector('.lose-emoji');
const questions = document.getElementById('questions');
const askButton = document.querySelector('.ask-button');
askButton.addEventListener('click', getQuestion);
let score = document.querySelector('.score');
let scoreText = 10000;
const modalBox = document.querySelector('.modal-box');
let answerMessage = document.querySelector('.answer');
const modalBoxButton = document.querySelector('.continue-button');
const winBox = document.querySelector('.win-box');
const loseBox = document.querySelector('.lose-box');

guessButton.addEventListener('click', makeEarlyGuess);
const restartButton = document.querySelectorAll('.restart-button');
const arrowRestartButton = document.querySelector('.restart-button');
const backToHomeMessage = document.querySelector('.speech-bubble');

for (let j = 0; j < restartButton.length; j++) {
  restartButton[j].addEventListener('click', restart);
}

for (let i = 0; i < emojiElements.length; i++) {
  emojiElements[i].addEventListener('click', handleEmojiClick);
}

function startGame() {
  startScreen.style.display = 'none';
  gameScreen.style.display = 'block';
}

function chooseEmoji() {
  const randomEmoji = Math.floor(Math.random() * Object.keys(emojis).length);
  selectedEmoji = Object.keys(emojis)[randomEmoji];

  selectedEmojiElementIndex = emojiElements[randomEmoji].getAttribute('id');
  if (Number(selectedEmojiElementIndex) === randomEmoji) {
    emojiElements[randomEmoji].classList.add('selected');
  }
  selectedEmojiElementId = Number(selectedEmojiElementIndex);
  selectedEmojiElement = document.getElementById(selectedEmojiElementId);

  console.log(selectedEmoji);

}

function getQuestion() {
  window.scrollTo(0, 0);
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

function handleEmojiClick(event) {
  event.target.classList.remove('not-eliminated');
  event.target.classList.add('eliminate');
  event.target.removeEventListener('click', handleEmojiClick);
  eliminatedEmojis = document.querySelectorAll('.eliminate');
  notEliminatedEmoji = document.querySelector('.not-eliminated');

  if (eliminatedEmojis.length === emojiElements.length - 1) {
    if (notEliminatedEmoji && notEliminatedEmoji.classList.contains('selected')) {
      setTimeout(() => {
        return winningMessage();
      }, 500);
    } else {
      setTimeout(() => {
        return losingMessage();
      }, 500);
    }
  }
}

function showSpeechBubble() {
  backToHomeMessage.style.display = 'block';
}

function hideSpeechBubble() {
  backToHomeMessage.style.display = 'none';
}

function makeEarlyGuess() {
  emojisElement.addEventListener('click', earlyGuess)
}

function earlyGuess(event) {
  if (event.target.classList.contains('selected')) {
    setTimeout(() => {
      return winningMessage();
    }, 500);
  } else {
    setTimeout(() => {
      return losingMessage();
    }, 500);
  }
}

function winningMessage() {
  winBox.style.display = 'block';
  winMessageEmoji.innerHTML = selectedEmojiElement.innerHTML;
}

function losingMessage() {
  loseBox.style.display = 'block';
  loseMessageEmoji.innerHTML = selectedEmojiElement.innerHTML;
}

function restart() {
  window.location.reload();
  window.scrollTo(0, 0);
}

chooseEmoji();


// if the emojis that don't have the class name eliminated
// after a question is asked
// and if they don't qualify for the question
// add the class to highlight and animate every emoji to eliminate