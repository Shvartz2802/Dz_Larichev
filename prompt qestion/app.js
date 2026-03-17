let answer = prompt("Сколько будет 7 + или - 15?");
switch (answer) {
  case "22":
  case "-8":
  case "Я не робот":
    alert("Правильно!");
    console.log("Правильно,впускаем!");
    break;
  default:
    alert("Ты робот!");
    console.log("Уходи!");
}
