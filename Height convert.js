const prompt = require('prompt-sync')();
function inchToFeet(inch) {
    let feet = inch / 12;
    let inches = inch % 12;
    console.log("Your height is: ", Math.round(feet), "Feet", inches, "Inches");
    // Instead of using Math.rount(feet), you can use parseInt(feet) too
}
inchToFeet(prompt('Enter your height in inch: '));
