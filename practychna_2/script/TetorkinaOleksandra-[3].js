let score = prompt("Enter the number of points:");
let homeworkDone = prompt("Are all homeworks done? (true/false):");
let finalTestPassed = prompt("Is the final test passed? (true/false):");

if (score >= 70 && score <=100 && homeworkDone == "true" && finalTestPassed == "true") {
    console.log("Certificate successfully obtained");
    alert("Certificate successfully obtained");
} else {
    console.log("Conditions for obtaining the certificate are not met");
    alert("Conditions for obtaining the certificate are not met");
}