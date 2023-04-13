let password = 'пароль';
let pws = prompt("Введите пароль");
if (condition) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

let c = 35;
if (c > 0 && c < 10) {
    console.log("верно");
} else {
    console.log("неверно");
}

let d = 35;
let e = 25;
if (d || e > 100) {
    console.log("верно");
} else {
    console.log("неверно");
}

let a = 2;
let b = 3;
let num = Number(a + b);
alert(num);

let jan = "Январь";
let feb = "Февраль";
let mar = "Март";
let apr = "Апрель";
let may = "Май";
let jun = "Июнь";
let jul = "Июль";
let aug = "Август";
let sep = "Сентябрь";
let oct = "Октябрь";
let nov = "Ноябрь";
let dec = "Декабрь";

let month = prompt("Ведите первые три буквы месяца по английски");

if (month === "jan") {
    console.log("Январь")
} else if (month === "feb") {
    console.log("Февраль")
} else if (month === "mar") {
    console.log("Март")
} else if (month === "apr") {
    console.log("Апрель")
} else if (month === "may") {
    console.log("Май")
} else if (month === "jun") {
    console.log("Июнь")
} else if (month === "jul") {
    console.log("Июль")
} else if (month === "aug") {
    console.log("Август")
} else if (month === "sep") {
    console.log("Сентябрь")
} else if (month === "oct") {
    console.log("Октябрь")
} else if (month === "nov") {
    console.log("Ноябрь")
} else if{
    console.log("Декабрь")
}else {
    console.log("No release")
}

let funtic = prompt("Пожалуйста, введите любое число");
if (funtic === Number) {
    console.log(funtic);
} else {
    console.log(NaN);
}
if (funtic % 2 == 0) {
    alert("Число четное");
} else {
    alert("Число нечетное");
}

let clietOS = 0;
let clietAndroid = 1;
if (clietOS) {
    alert("Установите версию приложения для iOS по ссылке");
} else (clietAndroid){
    alert("Установите версию приложения для Android по ссылке");
}