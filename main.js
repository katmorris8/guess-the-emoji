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
const value = questions.value;

// ! add event listener to get the options
// ! when the option is clicked, get the index number for the nodelist
// ! get the value of the option at that index number

// ! event listener for when ask button is click
// ! check which question was selected when the ask button was clicked
// ! compare the question value to the selected object's key

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
    if (value === 'gender') {
        alert(`I am ${emojis[selectedEmoji][value]}.`);
    } else if (value === 'hairColor') {
        alert(`I have ${emojis[selectedEmoji][value]} hair.`);
    } else if (value === 'skinColor') {
        alert(`I have ${emojis[selectedEmoji][value]} skin.`);
    } else if (value === 'holding') {
        if (emojis[selectedEmoji].holding === true) {
            alert(`Yes, I am holding something.`);
        } else {
            alert(`No, I am holding something.`);
        }
    } else if (value === 'headCover') {
        if (emojis[selectedEmoji].headCover === true) {
            alert(`Yes, I do have something on my head.`);
        } else {
            alert(`No, I don't have something on my head.`);
        }
    } else if (value === 'mustache') {
        if (emojis[selectedEmoji].mustache === true) {
            alert(`Yes, I do have a mustache.`);
        } else {
            alert(`No, I don't have a mustache.`);
        }
    } else if (value === 'eyeCover') {
        if (emojis[selectedEmoji].eyeCover === true) {
            alert(`Yes, I do have something over my eyes.`);
        } else {
            alert(`No, I don't have something over my eyes.`);
        }
    } else if (value === 'collar') {
        if (emojis[selectedEmoji].collar === true) {
            alert(`Yes, I am wearing a collar.`);
        } else {
            alert(`No, I am not wearing a collar.`);
        }
    }
}

chooseEmoji();


console.log(emojis.femaleDetective); // properties and values
console.log(selectedEmoji);
console.log(emojis[selectedEmoji]); //properties and values of selected emoji
console.log(emojis[selectedEmoji].holding);


