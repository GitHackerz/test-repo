// Read input from STDIN
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

// Debug output goes to STDERR (not captured in actual output)
console.error("[DEBUG] This is a test repository.");
console.error("[DEBUG] Input received:", input);

// Process the input - detect if it contains secrets
if (input.includes('AWS_SECRET') || input.includes('AKIA')) {
  console.log("SECRET_DETECTED");  // Actual output to STDOUT
} else {
  console.log("NO_SECRET");        // Actual output to STDOUT
}

// Debug: echo the input back to stderr
console.error("[DEBUG] Processed input:", input);