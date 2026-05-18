let day = prompt("Enter day of the week:");

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
        console.log("Ticket price is 150 UAH");
        alert("Ticket price is 150 UAH");
        break;
    case "thursday":
    case "friday":
        console.log("Ticket price is 200 UAH");
        alert("Ticket price is 200 UAH");
        break;
    case "saturday":
    case "sunday":
        console.log("Ticket price is 250 UAH");
        alert("Ticket price is 250 UAH");
        break;
    default:
        console.log("Invalid day of the week entered");
        alert("Invalid day of the week entered");
}