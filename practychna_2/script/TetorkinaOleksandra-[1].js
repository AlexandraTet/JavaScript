let isAuthorized = prompt("Is the user authorized? (true/false):");
let internetSpeed = prompt("Enter internet speed (Mbps):");
let isBanned = prompt("Is the account banned? (true/false):");

if (isAuthorized == "true" && internetSpeed >= 20 && isBanned == "false") {
    console.log("Access to online mode granted");
    alert("Access to online mode granted");
} else {
    console.log("Access denied");
    alert("Access denied");
}