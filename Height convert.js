const prompt = require('prompt-sync')();
function inchToFeet(inch) {
    let feet = inch / 12;
    let inches = inch % 12;
    console.log("Your height is: ", Math.round(feet), "Feet", inches, "Inches");
}
inchToFeet(prompt('Enter your height in inch: '));