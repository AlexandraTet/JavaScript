let genre = prompt("Choose a music genre (rock, pop, jazz, classical):");

switch (genre) {
    case "rock":
        console.log("Rock playlist enabled");
        alert("Rock playlist enabled");
        break;
    case "pop":
        console.log("Pop playlist enabled");
        alert("Pop playlist enabled");
        break;
    case "jazz":
        console.log("Jazz playlist enabled");
        alert("Jazz playlist enabled");
        break;
    case "classical":
        console.log("Classical music enabled");
        alert("Classical music enabled");
        break;
    default:
        console.log("Genre not found");
        alert("Genre not found");
}