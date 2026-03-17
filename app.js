let length = 5;
let width = 3;
let output = length * width;
console.log(output);
console.log(NaN === NaN);

hasPassword = true;
hasBiometric = false;

const acсess = hasBiometric || hasPassword;

console.log(`Есть доступ: ${acсess ? "да" : "Нет"} `);

const isOnline = true;

console.log(!isOnline);

let userInput = null;
let defaultValue = "Гость";

console.log(userInput ?? defaultValue);

let language = "en";

switch (language) {
  case "en":
    console.log("Hallo!");
    break;
  case "he":
    console.log("שלום!");
    break;
  case "de":
    console.log("Gutten tag!");
    break;
  case "ru":
    console.log("Здравствуй!");
    break;
  case "sp":
    console.log("Ola");
    break;
  default:
    console.log("Unknow language");
}
