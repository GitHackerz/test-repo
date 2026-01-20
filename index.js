// Read input from STDIN
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

// Log what we received
console.debug("This is a test repository.");
console.debug("Input received:", input);

// Process the input - detect if it contains secrets
if (input.includes('AWS_SECRET') || input.includes('AKIA')) {
  console.log("SECRET_DETECTED");
} else {
  console.log("NO_SECRET");
}

// Echo the input back
console.debug(input);