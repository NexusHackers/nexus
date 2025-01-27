// Generate stars for the galaxy background
const starsContainer = document.querySelector('.stars');
const numStars = 100;
const starList = [];

// Function to create and append a new star
function createStar(i) {
  const star = document.createElement('div');
  star.className = 'star';

  // Randomly position the stars
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;

  // Make 1 in 5 stars blueish
  if (i % 5 === 0) {
    star.style.backgroundColor = 'rgba(0, 174, 255, 1)';  // Full opacity blueish (brighter)
  } else {
    star.style.backgroundColor = 'white';  // Regular white stars
  }

  // 1 in 3 stars slightly bigger
  if (i % 3 === 0) {
    star.style.width = '4px';   // Bigger stars
    star.style.height = '4px';
  } else {
    star.style.width = '2px';   // Regular size stars
    star.style.height = '2px';
  }

  // 1 in 10 stars have a glow, with color matching the star
  if (i % 10 === 0) {
    if (i % 5 === 0) {
      // Blueish stars get a bright blue glow
      star.style.boxShadow = '0 0 10px rgb(0, 229, 255)';
    } else {
      // White stars get a white glow
      star.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
    }
  }

  starsContainer.appendChild(star);
  starList.push(star);
}

// Create initial stars
for (let i = 0; i < numStars; i++) {
  createStar(i);
}

// Function to move and replace stars when they go off screen
function moveStars() {
  for (let star of starList) {
    const rect = star.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.left > window.innerWidth) {
      // Remove the star that is out of view
      star.remove();
      // Create and add a new star to replace it
      const newIndex = starList.indexOf(star);
      createStar(newIndex);
    }
  }
}

// Set interval to move stars every frame (to ensure continuous movement)
setInterval(moveStars, 999999999);

// Windows download functionality
document.querySelector('.windows').addEventListener('click', () => {
  window.location.href = 'windows.html';
});

// Mac coming soon functionality
document.querySelector('.mac').addEventListener('click', () => {
  window.location.href = 'mac.html';
});
