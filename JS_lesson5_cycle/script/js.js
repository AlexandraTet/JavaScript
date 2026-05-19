// Task 1
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 2
// let num = prompt("Num: ");
// for (let i = 1; i <= num; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 3
// let num = prompt("Num: ");
// let sum = 0;
// for (let i = 1; i <= num; i++){
//     sum += i;
// }
//
// console.log(sum);
// alert(sum);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 4
// let num = prompt("Num: ");
// for (let i = num; i >= 1; i--){
//     console.log(i);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 5
// let num = prompt("Num: ");
// for (let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 6
// let password;
// let correct_password = "admin123";
// do{
//     password = prompt("Password:");
//     if (password !== correct_password){
//         alert("Wrong password!");
//         console.log("Wrong password!");
//     }
// }while (password !== correct_password)
//
// console.log("Correct password!");
// alert("Correct password!");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 7
// let password;
// let correct_password = "admin123";
// const attempt = 3;
//
// for (let i = 1; i <= attempt; i++){
//     password = prompt("Password:");
//     if (password === correct_password){
//         console.log("Access allowed");
//         alert("Access allowed");
//         break;
//     }
//
//     if (i === attempt){
//         console.log("Access is denied");
//         alert("Access is denied");
//         break;
//     }else{
//         console.log("Помилка в паролі");
//         alert("Помилка в паролі");
//     }
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 8
// for (let i = 1; i <= 20; i ++){
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 9
// let num = prompt("Num: ");
// let count = 0;
// for (let i = 0; i < num.length; i++){
//     count++;
// }
//
// console.log(count);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Task 10
let n = Math.floor(Math.random() * 100); // Math.random() gives a random number. Math.floor() rounds a number down to the nearest whole integer
let num;

do {
    num = Number(prompt("Num: 1-100"));
    if (num < n) {
        console.log("More");
        alert("More");
    } else if (num > n) {
        console.log("Less");
        alert("Less");
    }
} while (num !== n);

console.log("You guessed it!");
alert("You guessed it!");
