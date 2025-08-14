//
// -------------------------------------------
// GLOBAL FUNCTIONS AND INITIALIZERS
// -------------------------------------------
//

document.addEventListener("DOMContentLoaded", function() {
    // Check which page the user is on to run the correct script
    const currentPage = window.location.pathname;

    if (currentPage.includes("love.html")) {
        setupFadeInReasons();
    }

    if (currentPage.includes("promise.html")) {
        startHeartAnimation();
    }

    if (currentPage.includes("surprise.html")) {
        setupSurprisePage();
    }
});


//
// -------------------------------------------
// WHY I LOVE YOU PAGE FADE-IN SCRIPT
// -------------------------------------------
//
function setupFadeInReasons() {
    const reasons = document.querySelectorAll('.love-reason');
    reasons.forEach((reason, index) => {
        setTimeout(() => {
            reason.classList.add('visible');
        }, index * 500); // 500ms delay between each reason
    });
}


//
// -------------------------------------------
// PROMISE PAGE FLOATING HEARTS SCRIPT
// -------------------------------------------
//
function startHeartAnimation() {
    const container = document.querySelector('.floating-hearts-container');

    // Create a new heart element
    function createHeart() {
        const heart = document.createElement('span');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        
        // Randomize starting position and animation duration
        const left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 5 + 's'; // 5 to 10 seconds
        const size = Math.random() * 2 + 1 + 'em'; // 1em to 3em

        heart.style.left = left;
        heart.style.animationDuration = duration;
        heart.style.fontSize = size;

        container.appendChild(heart);

        // Remove the heart after it finishes its animation to prevent memory issues
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Create a new heart every 300 milliseconds
    setInterval(createHeart, 300);
}


//
// -------------------------------------------
// SURPRISE PAGE REVEAL AND CONFETTI SCRIPT
// -------------------------------------------
//
function setupSurprisePage() {
    const revealBtn = document.getElementById('reveal-button');
    const surpriseMessage = document.getElementById('surprise-message');

    revealBtn.addEventListener('click', () => {
        surpriseMessage.style.display = 'block';
        revealBtn.style.display = 'none';
        
        // Trigger confetti animation
        createConfetti();
    });
}

function createConfetti() {
    const confettiCount = 100;
    const colors = ['#ff69b4', '#ffc0cb', '#fce4ec', '#d81b60'];
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Randomize color, size, and position
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDelay = Math.random() * 3 + 's';
        confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(confettiPiece);
    }
}