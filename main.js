const emojis = {
    femaleDetective: {
        gender: 'female',
        hairColor: 'dark',
        skinColor: 'light',
        holding: 'magnifying glass',
        headCover: 'hat',
        mustache: false,
        eyeCover: false,
        collar: true,
    },

};
const emojiElement = document.querySelectorAll('.emoji');
const femaleDetectiveElement = emojiElement[0].getAttribute('id');
let selectedEmoji; // selected emoji index

// have computer randomly choose an emoji by id
// get the object keys to the corresponding emoji

// event listener for when questions are clicked
// based on the question get the value of the question
// compare the value to the key
// prompt an answer using a modal box


// click event for a start button that runs chooseEmoji()
function chooseEmoji() {
    const randomEmoji = Math.floor( Math.random() * Object.keys(emojis).length);
    selectedEmoji = Object.keys(emojis)[randomEmoji];
}

chooseEmoji();
console.log(emojis.femaleDetective); // properties and values
console.log(emojis[selectedEmoji]); //properties and values of selected emoji


