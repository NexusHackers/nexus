const texts = [
    "White hat hackers with a dark side",
    "Ethical hackers in the shadows", 
    "We bend the rules for good", 
    "White hats with a touch of grey", 
    "Navigating the fine line of ethics", 
    "Hacking for justice, with style", 
    "The light side of hacking’s dark art", 
    "Breach the code, protect the future", 
    "Masters of the digital underworld", 
    "Securing systems with a twist of mischief."
]; 

let textIndex = Math.floor(Math.random() * texts.length);  
let charIndex = 0;  
const headerElement = document.getElementById('header');
const cursorElement = document.querySelector('.cursor');

function getRandomTypingSpeed() {
    return Math.floor(Math.random() * (70 - 65 + 1)) + 65; 
}

function typeText() {
    const currentText = texts[textIndex];

    headerElement.textContent = currentText.substring(0, charIndex);
    cursorElement.style.display = 'inline';

    if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeText, getRandomTypingSpeed());
    } else {
        cursorElement.style.display = 'inline';
    }
}

window.onload = typeText;

function toggleDetails(serviceId) {
    const details = document.getElementById(serviceId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
