function sayHi(name) {
  console.log(`Hello, ${"Teacher"}`);
}

sayHi("Taecher");

var intro = alert("Здравствуйте, добро пожаловать на наш сайт! Пожалуйста, заполните его перед посещением нашего сайта!")
var firstName = prompt("Пожалуйста, введите свое Имя 🙂").trim();
var sureName = prompt("Пожалуйста, введите ваше Фамилия").trim();
var number = prompt("Пожалуйста введите ваш номер телефона").trim();
var age = prompt("Пожалуйста, введите ваш возраст").trim();
var where = prompt("Откуда вы").trim();
var thanks = prompt("Спасибо за регистрацию будте здоровы.")

console.log(
  `Name: ${firstName}\nSure Name: ${sureName}\nPhone Number ${number}\nAge ${age}\nWhere are you from?${where}`
);
