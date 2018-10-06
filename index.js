/* var admin, name;
name = "Василий";
admin = name;
alert(admin); */

/* var a;
console.log("The value of a is " + a); //Значение переменной a undefined

console.log("The value of b is " + b); //Uncaught ReferenceError: b не определена

console.log("The value of c is " + c); //Значение переменной c undefined
var c;

console.log("The value of x is " + x); //Uncaught ReferenceError: x не определена
let x;
 */

/* // Вы можете использовать undefined, чтобы определить, имеет ли переменная значение. В следующем примере переменной input не присвоено значение, и оператор if будет вычислен как true:

var input;
if (input === undefined) {
  alert("правда");
} else {
  doThat("ложь");
}
 */
/* var myArray = [];
if (!myArray[0]) alert("Привет, Красотка");

var n = null;
console.log(n + 6); // В консоль выведется 0 или число */

/* var planet = "Земля";
var name = "Петя"; */

/*var nam = "55";

x = parseFloat(nam);
y = parseInt(nam);
console.log(typeof x, typeof y);
  */

/*  var name = prompt("«Каково «официальное» название JavaScript?»", "");
if (name == "ECMAScript") {
  alert("Точно!");
} else {
  alert("Агаа, не знаете? «ECMAScript»!");
}*/

/*  var nam = prompt("Введите число", "");

if (nam > 0) {
  alert("1");
} else if (nam < 0) {
  alert("-1");
} else {
  alert("0");
}*/

/*
(a = -5), (b = 6);
if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}
result = a + b < 4 ? "Мало" : "Много";
console.log(result);
  */

/*var login = prompt("Кто пришел? ", "");

if (login == "Админ") {
  var password = prompt("Пароль? ", "");
  if (password == "Чёрный Властелин") {
    alert("Добро пожаловать!");
  } else if (password == null) {
    alert("Вход отменен");
  } else {
    alert("Пароль неверен");
  }
} else if (login == null) {
  alert("Вход отменен");
} else {
  alert("Я вас не знаю");
}  */

/* if (login == "Вася") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
} */

var message;

var login = prompt("Введите логин?", "");

login == "Вася"
  ? (message = "Привет")
  : login == "Директор"
    ? (message = "Здравствуйте")
    : login == ""
      ? (message = "Нет логина")
      : (message = "");
alert(message);
/*  */
