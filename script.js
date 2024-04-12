const eyes = document.querySelectorAll('.eye');
const mouth = document.querySelector('.mouth');

const expressions = [
    { eyes: 'normal', mouth: 'smile' },
    { eyes: 'blink', mouth: 'open' },
    { eyes: 'wink', mouth: 'neutral' } 
];

let currentExpressionIndex = 0;

setInterval(() => {
    const expression = expressions[currentExpressionIndex];

    eyes.forEach(eye => {
        eye.classList.remove('normal', 'blink', 'wink'); // Clear old classes
        eye.classList.add(expression.eyes);
    });

    mouth.classList.remove('smile', 'open', 'neutral'); // Clear old classes
    mouth.classList.add(expression.mouth); 

    currentExpressionIndex = (currentExpressionIndex + 1) % expressions.length; 
}, 3000); 
// ... your existing code ...

setInterval(() => {
    // ... your existing code ...

    // Temporary: Forcefully exaggerate expression changes for testing
    eyes.forEach(eye => {
        eye.style.backgroundColor = 'red'; // Temporary bright color
        eye.style.width = '30px';        // Temporary bigger size
        eye.style.height = '30px';       // Temporary bigger size
    });
   
    mouth.style.backgroundColor = 'blue';   // Temporary bright color
    mouth.style.width = '60px';            // Temporary bigger size
}, 3000); 
