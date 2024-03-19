// Function to create and animate raining emojis
function createEmoji() {
  const container = document.getElementById('emoji-container');
  const maxEmojis = 20; // Maximum number of emojis allowed

  if (container.children.length < maxEmojis) {
    const emoji = document.createElement('span');
    emoji.innerHTML = '🍊'; // Use any orange emoji you like
    emoji.classList.add('emoji-rain');

    // Randomize starting position, size, and animation duration
    const startPosition = Math.random();
    const size = Math.random() * 20 + 10; // Random size between 10 and 30 pixels
    const duration = Math.random() * 3 + 2; // Random duration between 2 to 5 seconds

    emoji.style.setProperty('--x', startPosition);
    emoji.style.setProperty('--y', -0.2); // Start slightly above the viewport
    emoji.style.setProperty('--duration', `${duration}s`);
    emoji.style.setProperty('--size', `${size}px`); // Set the size property

    container.appendChild(emoji);

    // Remove the emoji from DOM after animation ends
    emoji.addEventListener('animationend', () => {
      emoji.remove();
    });
  }
}

// Generate raining emojis every second
setInterval(createEmoji, 1000);
