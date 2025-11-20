// Setup Canvas
const canvas = document.getElementById('rippleLayer');
const display = canvas.getContext('2d');

// Quick size
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = document.body.scrollWidth; 
canvas.height = document.body.scrollHeight;

// Background Varables
const noiseScale = 0.1;
const pixelSize = 5;
const refreshRate = 1000;

const cols = Math.floor(width / pixelSize);
const rows = Math.floor(width / pixelSize);
const frame = 0
const noiseValues = [];




// Resize Canvas
function resizeCanvas() {
    canvas.width = document.body.scrollWidth; 
    canvas.height = document.body.scrollHeight;
}

// Generate Noise
function genNoise() {
    for (let y = 0; y < rows; y++) {
        noiseValues[y] = [];
        for (let x = 0; x < cols; x++); {
            const newX = x * noiseScale
            const newY = y * noiseScale
            const value = perlin.noise(newX,newY);
            noiseValues[y][x] = value
        }
    }
    return noiseValues
}

// Noise to Colors
function noiseValToColor(noiseVal) {
    if (noiseVal < -0.3) return 'white';
    if (noiseVal > 0.7) return 'black';

    const intensity = (noiseVal + 0.3) / (0.7 + 0.3);
    const greyValue = Math.floor(255 * (1-intensity));
    return `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
}

// Apply generated pixels
function fillCanvas(noiseValues) {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            display.fillStyle = noiseValToColor(noiseValues[y][x])
            display.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
        }
    }
}



// Resize Listener
window.addEventListener('resize');
resizeCanvas();

noiseValues = genNoise()
fillCanvas(noiseValues)