const _ = {
    boundScale: 1.5,
    boundTolerance: 5
};

if (_.boundScale && _.boundTolerance >= 0) {
    console.log("Both conditions are met.");
    // Additional code to execute when both conditions are true
} else {
    console.log("One or both conditions are not met.");
    // Code to execute if one or both conditions are not met
}
