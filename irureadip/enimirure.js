// Example pulses array
const pulses = [
    { id: 1, stamp: 162 },
    { id: 2, stamp: 163 },
    { id: 3, stamp: 164 }
];

// Object to compare
const p = { id: 4, stamp: 163 };

// Function to find and handle a match
function findAndHandleMatch(pulses, p) {
    for (let i = 0; i < pulses.length; i++) {
        if (pulses[i].stamp === p.stamp) {
            console.log(`Match found at index ${i}:`, pulses[i]);
            // Perform additional actions here if needed
            break; // Exit the loop after finding a match
        }
    }
}

// Call the function
findAndHandleMatch(pulses, p);
