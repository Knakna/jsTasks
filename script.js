let admin;
let name = "Джон";

admin = name;

console.log(admin);

let house = {
    city: "Минск",
    address: "ул.Короля,7"
}

console.log(house.city);
console.log(house.address);

let user = {
}

user.name = "John"
user.surname = "Smith"

console.log(user);

user.name = "Pete"


delete user.name;


console.log(user);

let musiс = ["Джаз", "Блюз"];

console.log(musiс);


musiс.push("Рок-н-ролл");

console.log(musiс);

console.log( musiс.length );

musiс[Math.floor((musiс.length - 1) / 2)] = "Классика";

console.log( musiс.pop() );

musiс.unshift("Рэп", "Регги");

console.log(musiс);


// function

// let result;

// a = 2;
// b = 3;

// if (a + b < 4) {
// result = "Мало";
// } else {
// result = "Много";
// }
// console.log(result);

let result;
a = 2;
b = 3;

result = (a + b < 4) ? 'Мало' : 'Много';

console.log(result);



let login = "Сотрудник";

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

console.log(message);



// function min (a,b) {


//   if (a <= b) {
//     return a;
//     } else  {
//     return b;
//     }



// }

// console.log(min (2,2));
// console.log(min (4,3));
// console.log(min (-8,4));


function min (a,b) {

  return a <= b ? a : b;

}

console.log(min (2,2));
console.log(min (4,3));
console.log(min (-8,4));


function pow (x,n) {

  return Math.pow (x,n)

}

console.log(pow(3,2))





// WHILE:
let az = 0;
while (az <= 5) {
console.log(az);
az++;
}


// DO...WHILE:
let bz = 0;
do {
console.log(bz);
bz++;
} while (bz <= 5);


// FOR:
for (let cz = 0; cz <= 5; cz++) {
console.log(cz);
}



let numz = 0;
while (numz <3) {
console.log(`Число: ${numz}`);
numz++;
}


sum(2,3);

firstLoop:
for (let numzz = 0; numzz <2; numzz++) {
secondLoop:
for (let size = 0; size < 3; size++) {
console.log(size);
if (size == 1) break firstLoop;
}
}

sum(2,3);


// function sum(aa,bb) {
// var sum = aa + bb;
// console.log(`Ваша сумма: ${sum}`);
// }

// sum(2,3);


function sum(aa = 22, bb = 33) {
  var sum = aa + bb;
  console.log(`Ваша сумма: ${sum}`);
  }

  sum();

  sum(4,4);


  // Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);




// Возврат результата
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);


// function getSumm() {
// 	let numOne, numTwo;

// 	function getNumOne() {
// 		numOne = 1;
// 	}
// 	function getNumTwo() {
// 		numTwo = 2;
// 	}
// 	getNumOne();
// 	getNumTwo();

// 	let numSumm = numOne + numTwo;
// 	console.log(numSumm);
// }
// // getNumOne(); - yбудет не видна вне родительской
// getSumm();


function getSumm() {
	let summ = 1 + 5;
	console.log(summ);
};

let someVar = getSumm;

someVar();
getSumm();
// можем вызывать с помощью функции и переменной с круглыми скобками




'use strict'
if (2 > 1) {
	function getSumm() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();

// let getSumm;

// if (2 > 1) {
// 	getSumm = function () {
// 		let summ = 1 + 2;
// 		console.log(summ);
// 	};
// }
// getSumm();


// function showMessage(text, name) {
// 	console.log(`${text}, ${name}!`);
// 	// setTimeout(showMessage, 500, text, name);
// }
// // setInterval(showMessage, 500, 'Привет', 'Вася');
// setTimeout(showMessage, 500, 'Привет', 'Вася');



// function showName() {
// 	console.log('Василий!');
// }
// setTimeout(showName, 0);
// console.log('Николай!');

let  showText ;
if(2>1){
    showText = function () {console.log("сообщение")
    }
}
showText()


let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne)

let value = '135.58px'
console.log(parseFloat(value))

let value1 = 58 + 'Фрилансер';
if (value1 !== NaN) {
  console.log('Результат выражения NaN')
}

console.log(Math.max(10, 58, 39, -150, 0))




let num = 58.858;
console.log(Math.floor(num))






let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаем получить Привет! Я фрилансер
console.log(text);




// Получаем символы строки

let text1 = "Привет!";
let firstSymbol = text1[0];
let lasttSymbol = text1[text1.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);


for (const char of text1) {
	console.log(char);
}

let text2 = 'фрилансер';
let symbol5 = text2[5];
console.log(symbol5);


let text3 = 123 + "456";
console.log(text3);


let text4 = 'фрилансер';
console.log(text4.toUpperCase());

let text5 = 'фрилансер';
console.log(text5.slice(3, 6));

let text6 = 'фрилансер';
console.log(text6.includes('лан', 4));


// Метод str.indexOf(substr, pos)
/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
*/

let text7 = "Привет!";
console.log(text7.indexOf('рив'));
console.log(text7.indexOf('рив', 3));


// Методы includes, startsWith, endsWith
/*
Более современный метод str.includes(substr, pos) возвращает true,
если в строке есть искомая подстрока, либо false, если нет.
*/

let text8 = "Привет!";
console.log(text8.includes('рив'));
console.log(text8.includes('рив', 3));

console.log(text8.startsWith('рив'));
console.log(text8.endsWith('!'));


// Регистр имеет значение!

let text9 = "Привет!";
let searchText9 = "пР";

console.log(text9.toLowerCase().includes(searchText9.toLowerCase()));


/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/


let arrOne1 = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne1);
console.log(arrOne1.length);



arrOne1.length = 0;
console.log(arrOne1);

// Таким образом, самый простой способ
// очистить массив – это arrOne.length = 0;


/*
Напомню что массив является объектом и, следовательно,
ведёт себя как объект. Например, копируется по ссылке:
*/

let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);





// / Удаление/добавление/изменение конкретных элементов
// empty  при  delete


let arr1 = ['Ваня', 'Иштван', 'Оля',];

delete arr1[1];
console.log(arr1);
console.log(arr1[1]);
console.log(arr1.length);


// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])


// Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);


// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
let arrOne2 = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwo2 = arrOne2.slice(1, 2);
console.log(arrTwo2);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThree2 = arrOne2.slice(-2, -1);
console.log(arrThree2);

// Копируем весь массив
let arrFour2 = arrOne2.slice();
console.log(arrFour2);


// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOne3 = ['Ваня', 'Иштван', 'Оля',];
let arrTwo3 = arrOne3.concat('Петя');
console.log(arrTwo3);



// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам

// 1. arr.indexOf(item, from) ищет item, начиная с индекса from,
// 	и возвращает индекс, на котором был найден искомый
// 	элемент, в противном случае - 1.
// 2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// 3. arr.includes(item, from) – ищет item, начиная с индекса from,
// 	и возвращает true, если поиск успешен.



let arr11 = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arr11.indexOf('Иштван'));
console.log(arr11.indexOf('Вася'));
console.log(arr11.indexOf('Иштван', 2));

// includes
console.log(arr11.includes('Иштван'));
console.log(arr11.includes('Вася'));
console.log(arr11.includes('Иштван', 2));



// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
*/

let arr12 = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr12.find(function (item, index, array) {
	return item.age === 18;
});

//let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);


//findIndex
let resultTwo = arr12.findIndex(item => item.age === 18);
console.log(resultTwo);



// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.

let results = arr.filter(function (item, index, array) {
	// если true - элемент добавляется к результату, и перебор продолжается
	// возвращается пустой массив в случае, если ничего не найдено
});

let arr55 = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let result55 = arr55.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(result55);


// Сортировка массивов

// Сотритовка слов
let arrOne15 = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne15.sort());

// Сотритовка чисел
let arrTwo15 = [8, 22, 1,];
console.log(arrTwo15.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".

console.log("8" > "22");

//--------

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.

/*
// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// Функция сортировки

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	//return a - b
}

//console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric));
*/

//--------

/*
// Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());
*/


let arr17 = [9, 2, 8,];
let reduceValue = arr17.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});





// WINDOW
const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth}px`);



console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}



console.log(navigator.platform);


//Получаем URL
console.log(location.href);
//Меняем URL
// location.href = "https://google.by";



//Alert
// alert("Привет!");

//Сonfirm
// const confirmResult = confirm("Хочешь научиться верстать?");
// console.log(confirmResult);

//Prompt
// const promptResult = prompt("Кто ты по жизни?");
// console.log(promptResult);


/*
Самые верхние элементы дерева
доступны как свойства объекта document
*/

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);


// / Получаем объект body
// const bodyElement = document.body;

// Первый и последний дочерние элементы
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);

/*
В документе, возможено, есть ещё «какой-то HTML-код»,
но на момент выполнения скрипта браузер ещё
до него не дошёл.
Поэтому следует размещать скрипт в самом конце
документа
*/



//Коллекция childNodes содержит список всех детей,
//включая текстовые узлы.
const childNodes = bodyElement.childNodes;
console.log(childNodes);

//Для проверки наличия дочерних узлов
//существует также специальная функция hasChildNodes()
console.log(bodyElement.hasChildNodes());




/*
Как мы уже видели,
childNodes похож на массив. На самом деле это не массив,
а коллекция – особый перебираемый объект - псевдомассив.

Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of:
2.Методы массивов не будут работать, потому что
коллекция – это не массив
*/

// /Перебор коллекции
for (let node of childNodes) {
	console.log(node); // покажет все узлы из коллекции
}



// "Живые" коллекции
/*
Почти все DOM-коллекции, за небольшим исключением, "живые".
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы в DOM, то они появятся в сохранённой коллекции автоматически.

*/

/*
DOM-коллекции, и даже более – все навигационные свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = ....
Для изменения DOM требуются другие методы.
*/

// Соседние и родительский узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

/*
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов
const childNodes1 = bodyElement.childNodes;
console.log(childNodes1);









// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
Но для большинства задач текстовые узлы и
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой теги и
формируют структуру страницы.
*/

// Получаем коллекцию всех дочерних элементов

const bodyСhildren = bodyElement.children;
console.log(bodyСhildren);


// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);

// Соседние и родительский элементы
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);





// / Поиск произвольного элемента

// querySelectorAll - статичная коллекция

// // Поиск по селектору класса
// const elemsOne = document.querySelectorAll('.lesson__list');
// console.log(elemsOne);

// // Поиск по селектору тега
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo);

// // Поиск по смешанному селектору тега и класса
// const elemsThree =
// 	document.querySelectorAll('li.lesson__item-list');
// console.log(elemsThree);

// // Поиск по тегу первого уровня вложенности
// const elemsFour =
// 	document.querySelectorAll('.lesson__list>li');
// console.log(elemsFour);

// // Поиск по нескольким классам
// const elemsFive =
// 	document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemsFive);

// // Поиск по вложенным классам
// const elemsSix =
// 	document.querySelectorAll('.lesson__list .lesson__text');
// console.log(elemsSix);

// // Поиск по ID
// const elemsSeven =
// 	document.querySelectorAll('#listItem');
// console.log(elemsSeven);

// // Поиск по атрибуту
// const elemsEight =
// 	document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// // Поиск по атрибуту со значением
// const elemsNine =
// 	document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine);


// / Получение конкретного элемента коллекции
//const elems = document.querySelectorAll('li');
//console.log(elems[2]);

/*
for (const item of elems) {
	console.log(item);
}
*/
/*
elems.forEach(item => {
	console.log(item);
});
*/


//elem.querySelector(CSS);
/*
Возвращает первый элемент внутри elem, соответствующий
данному CSS-селектору.
*/
/*
//const lessonList = document.querySelectorAll('.lesson__list')[0];
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);
*/



//document.getElementById(ID)
/*
Если у элемента есть атрибут id,
то мы можем получить его вызовом document.getElementById(id),
где бы он ни находился.
*/
/*
const elem = document.getElementById('listItem');
console.log(elem);
*/
/*
1. id - уникален
2. Поиск полько внутри document.
*/

//-------

/*
elem.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
коллекцию.Передав "*" вместо тега, можно получить всех потомков.
*/
/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/
//-------

/*
elem.getElementsByClassName(className)
возвращает элементы, которые имеют данный CSS - класс.
*/
/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/
//-------

//document.getElementById(ID) и elem.getElementsBy*
/*
На данный момент, они используются редко,
так как querySelectorAll может их заменить.
Но отличия все же есть!
*/

//getElementsBy*
// ВНИМАНИЕ - getElementsBy.. а не getElementBy..

/*
document.getElementsByName(name) возвращает элементы с
заданным атрибутом name.Очень редко используется.
Поиск полько внутри document.
*/

const elems = document.getElementsByName('list');
console.log(elems);




// /---------------------!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!

// Живая статическа коллекции

// Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.list');

// Получаем "живую" коллекцию
const listLive = document.getElementsByClassName('list');

console.log(listStatic);
console.log(listLive);



// Создаем новый HTML-объект.
const lessonList = document.querySelector('.list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="list">Новый пункт</li>'
);

// после этого статическая и живая коллекция будет разная












//closest
/*
Метод elem.closest(css) ищет ближайшего предка,
который соответствует CSS - селектору.Сам элемент
также включается в поиск.

Предки элемента это родитель, родитель родителя,
его родитель и так далее.Вместе они образуют цепочку
иерархии от элемента до вершины.

Другими словами, метод closest поднимается вверх от
элемента и проверяет каждого из родителей.Если он
соответствует селектору, поиск прекращается. Метод возвращает
либо предка, либо null, если такой элемент не найден.

Напомню свойство parentElement возвращает только
непосредственного родителя элемента
*/

const elem = document.querySelector('.list');
const parentList = elem.closest('.lesson__text');
console.log(parentList);

/*
Очень полезный метод, часто используется для проверки
на существование того или иного родителя, либо для изменения
родителя конкретного элемента
*/

// Проверка matches
/*
ничего не ищет, а проверяет, удовлетворяет ли
элемент CSS-селектору, и возвращает true или false.
*/

const elems3 = document.querySelectorAll('.list');
for (let elem of elems3) {
	if (elem.matches('[class$="list--red"]')) {
		console.log('Крассный');
	} else if (elem.matches('[class$="list"]')) {
		console.log('Синий');
	}
}





const text66 = document.querySelector('.lesson');
const list = text66.nextElementSibling;
console.log(list);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =================================================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Изменение документа


// Cодержимое элемента innerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

// Перезаписываем содержимое объекта
textElement.innerHTML = `Живи, а работай в свободное время!`;

// Дописываем содержимое объекта
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи, а работай в
	<span class="list">свободное</span> время!</p>`;

console.log(textElement.innerHTML);




// / Cодержимое элемента целиком outerHTML

// Получаем объект
const textElement1 = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
// const textElementContent1 = textElement1.outerHTML;
// console.log(textElementContent1);


// textElement1.outerHTML = `<p>Живи, а работай в
// 	<span class="yellow">свободное</span> время!</p>`;

// console.log(textElement1.outerHTML);






// / Просто текст элемента textContent

// Получаем объект
const textElement3 = document.querySelector('.lesson__text');
const textElementContent3 = textElement3.textContent;
console.log(textElementContent3);

/*
Полезная возможность textContent - записывать
текст «безопасным способом».
*/
/*
textElement.textContent = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.textContent);
*/
/*
Мы не хотим, чтобы на сайте появлялся произвольный HTML-код.
Присваивание через textContent – один из способов от
этого защититься.
*/



// data.
// Cодержимое текстового узла/комментария

// Получаем объект
const textElement4 = document.querySelector('.lesson__text');
const getComment4 = textElement4.nextSibling;

console.log(getComment4);
console.log(getComment4.data);


// Изменение текстового узла/комментария
getComment4.data = 'Привет';
console.log(getComment4.data);




// / Создание элементов и узлов.

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;
console.log(newElement);

// Создание нового текстового узла
const newText = document.createTextNode('Привет!');
console.log(newText);

/*
Созданные объекты находятся в константах,
но не являются частью документа
*/




// / Методы вставки


// Получаем объект
const textElement5 = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement1 = document.createElement('div');
// Наполняем новый элемент
newElement1.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;


// Вставляем новый элемент...

//...перед объектом
textElement.before(newElement);
//...после объекта
textElement.after(newElement);
//...внутрь и в начало объекта
textElement.prepend(newElement);
//...внутрь и в конец объекта
textElement.append(newElement);

// Вставка нескольких фрагментов сразу
textElement.append(newElement, "Привет!");

/*
// Можно вставлять строку
textElement.append(`Живи, а работай в
	<span class="yellow">свободное</span> время!`);
*/
/*
Другими словами, строки вставляются безопасным способом,
как делает это textContent. Поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов. А что, если мы хотим вставить
HTML именно "как HTML", со всеми тегами и прочим,
как это делает innerHTML?
*/