let grade = prompt("Enter student's grade (from 1 to 12):");
grade = Number(grade);

switch (grade) {
    case 12:
    case 11:
    case 10:
        console.log("Excellent result");
        alert("Excellent result");
        break;
    case 9:
    case 8:
    case 7:
        console.log("Good result");
        alert("Good result");
        break;
    case 6:
    case 5:
    case 4:
        console.log("Satisfactory result");
        alert("Satisfactory result");
        break;
    case 3:
    case 2:
    case 1:
        console.log("Needs to improve knowledge");
        alert("Needs to improve knowledge");
        break;
    default:
        console.log("Invalid grade");
        alert("Invalid grade");
}