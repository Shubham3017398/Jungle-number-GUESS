// 1. Typing Effect for the Title
const title = document.querySelector('h1');
const text = "🌿 JUNGLE GUESS 🌿"; // I added the text here directly for safety
title.innerText = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// 2. Button Interaction
document.querySelector('.download-btn').onclick = function() {
    alert("🌿 Survival kit downloading... Good luck, Explorer!");
    console.log("Download started...");
};

// Start typewriter on load
window.onload = typeWriter;