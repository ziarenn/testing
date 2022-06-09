// // // import { artificialFetch } from "./script.js";

// // /const currencybtnselector = window.document.querySelector(".currency-button");

// // // KOD SYNCHRONICZNY / BLOKUJĄCY
// // // console.log("Pierwszy console.log");
// // // alert("Alert");
// // // console.log("Drugi console.log");

// // // KOD ASYNCHRONICZNY

// // // console.log("Pierwszy console.log");
// // // setTimeout(() => {
// // //   console.log("Drugi console.log");
// // // }, 1500);
// // // console.log("Trzeci console.log");

// // // artificialFetch("https://jsonplaceholder.typicode.com/posts/").then((data) =>
// // //   console.log(data)
// // // );

// // // const select = document.getElementById("user-select");

// // // select.addEventListener("change", function () {
// // //   console.log(123);
// // // });

// // // console.log(123)
// // // fetch('https://mojastrona.pl/endpoint')
// // // console.log(321)

// // const todoListEl = document.querySelector(".todos");
// // const selectUser = document.getElementById("user-select");
// // const loadButton = document.querySelector(".load-todos");

// // // XMLHttpRequest

// // // loadButton.addEventListener("click", function () {
// // //   const request = new XMLHttpRequest();
// // //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// // //   request.send();

// // //   request.addEventListener("load", function () {
// // //     const data = JSON.parse(this.responseText);
// // //     console.log(data);

// // //     data.forEach((el) => {
// // //       const HTML = `<li style="color:${el.completed ? "green" : "red"}">
// // //         <p>User id: ${el.userId}, id: ${el.id}, title: ${el.title}</p>
// // //         </li>
// // //       `;
// // //       todoListEl.insertAdjacentHTML("beforeend", HTML);
// // //     });
// // //   });
// // // });

// // // Fetch API

// // // const renderTodos = function (todoList) {
// // //   todoList.forEach((el, i) => {
// // //     const HTML = `<li style="color:${
// // //       el.completed ? "green" : "red"
// // //     }" class="list-element" id="${i}">
// // //         <p>User id: ${el.userId}, id: ${el.id}, title: ${el.title}</p>
// // //         </li>
// // //       `;
// // //     todoListEl.insertAdjacentHTML("beforeend", HTML);
// // //   });
// // // };

// // // const getTodosForUser = function (userId) {
// // //   fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`) //PROMISE
// // //     .then((response) => {
// // //       if (!response.ok) {
// // //         throw new Error();
// // //       }
// // //       return response.json();
// // //     })
// // //     .then((data) => {
// // //       renderTodos(data);
// // //       return fetch("https://jsonplaceholder.typicode.com/posts/");
// // //     })
// // //     .then((response) => response.json())
// // //     .then((data) => {
// // //       const liList = document.querySelectorAll(".list-element");
// // //       liList.forEach((_, i) => {
// // //         const element = document.getElementById(`${i}`);
// // //         const p = document.createElement("p");
// // //         p.innerText = `${data[i].title}`;
// // //         element.appendChild(p);
// // //       });
// // //     })
// // //     .catch((err) => console.log(err.message))
// // //     .finally(() => {
// // //       // tutaj cos co niezaleznie od wyniku operacji musi sie stac
// // //     });
// // // };

// // // loadButton.addEventListener("click", function () {
// // //   todoListEl.innerHTML = "";
// // //   getTodosForUser(selectUser.value);
// // // });

// // // Promise

// // // const fetch2 = function (url) {
// // //   return new Promise(function (resolve, reject) {
// // //     setTimeout(() => {
// // //       reject("Timed out");
// // //     }, 2000);
// // //     const request = new XMLHttpRequest();
// // //     request.open("GET", url);
// // //     request.send();
// // //     request.addEventListener("load", function () {
// // //       const data = JSON.parse(this.responseText);
// // //       resolve(data);
// // //     });
// // //   });
// // // };

// // // fetch2("https://jsonplaceholder.typicode.com/posts/").then((response) => {
// // //   console.log(response);
// // // });

// // const currencyInput = document.querySelector("#currency-input");
// // const currencySelect = document.querySelector("#currency-select");
// // const output = document.querySelector("#output");
// // const currencySelect2 = document.getElementById("currency-select2");
// // let exData;

// // const fetchCurrencies = () => {
// //   fetch("http://api.nbp.pl/api/exchangerates/tables/A/")
// //     .then((response) => {
// //       return response.json();
// //     })
// //     .then((data) => {
// //       console.log(data);
// //       data[0].rates.forEach((curr) => {
// //         const option = document.createElement("option");
// //         option.textContent = curr.code;
// //         option.setAttribute("value", curr.code);
// //         currencySelect.appendChild(option);
// //       });
// //       data[0].rates.forEach((curr) => {
// //         const option = document.createElement("option");
// //         option.textContent = curr.code;
// //         option.setAttribute("value", curr.code);
// //         currencySelect2.appendChild(option);
// //       });
// //       exData = data[0].rates;
// //       //   const selectInnerHTML = select.innerHTML;
// //       //   currencySelect2.innerHTML = selectInnerHTML;
// //     });
// // };

// // fetchCurrencies();
// // console.log(exData);

// // const calculate = document.querySelector(".currency-button");
// // calculate.addEventListener("click", function () {
// //   const amount = currencyInput.value;
// //   const baseCurrency = currencySelect.value;
// //   const outputCurrency = currencySelect2.value;
// //   const baseCurrencyObj = exData.find((el) => el.code === baseCurrency);

// //   const outputCurrencyObj = exData.find((el) => el.code === outputCurrency);
// //   output.textContent = `${(
// //     amount *
// //     (baseCurrencyObj.mid / outputCurrencyObj.mid)
// //   ).toFixed(2)} ${outputCurrencyObj.code}`;
// // });

// // function waitXSeconds(seconds) {
// //   return new Promise(function (resolve, reject) {
// //     setTimeout(() => {
// //       resolve("Resolved");
// //     }, seconds * 1000);
// //   });
// // }

// // waitXSeconds(2).then(() => {
// //   console.log(123);
// // });

// // async function waitThenLog() {
// //   try {
// //     console.log("To jest wykonanie funkcji asynchronicznej...");

// //     const fetchedData = await fetch(
// //       "http://api.nbp.pl/api/exchangerates/tables/A/"
// //     );
// //     const parsedData = await fetchedData.json();

// //     const resolvedValue = await waitXSeconds(4);
// //     console.log(resolvedValue);
// //     return resolvedValue;
// //   } catch (err) {
// //     console.log(err);
// //   }
// // }

// // async function x() {
// //   console.log(123);
// //   const y = await waitThenLog();
// //   console.log(y);
// // }

// // x();

// export const x = function (data) {
//   console.log(data);
//   data.forEach((curr) => {
//     const currencySelect = document.getElementById("currency-select");
//     const option = document.createElement("option");
//     option.textContent = curr.code;
//     option.setAttribute("value", curr.code);
//     currencySelect.appendChild(option);
//   });

//   return data[0].rates;
// };

// const fetchCurrencies = () => {
//   fetch("http://api.nbp.pl/api/exchangerates/tables/A/")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       exData = x(data);
//       data[0].rates.forEach((curr) => {
//         const option = document.createElement("option");
//         option.textContent = curr.code;
//         option.setAttribute("value", curr.code);
//         currencySelect2.appendChild(option);
//       });
//     });
// };

// // import fetchfile from "./modules/fetch2.js";

// // fetchfile
// //   .fetch2("http://api.nbp.pl/api/exchangerates/tables/A/")
// //   .then((data) => fetchfile.logToTheConsole(data));

// // console.log(fetchfile.obj3);
// // console.log(fetchfile.imie);

// const x = () => {
//   console.log(123);
// };

// x();

// let zmienneGlobalne;
// let zmiennaKontrolna;

// (() => {
//   zmienneGlobalne = 5;
//   zmiennaKontrolna = 3;
//   renderHeader();
// })()(
//   // IIFE = Immediately Invoked Function Expression
//   function () {
//     console.log("zwykla deklaracja funkcji w iife");
//   }
// )();

// (() => {
//   console.log("IIFE sktrzałkowa");
// })();
// console.log(123);
// let dataStorage;
// (async () => {
//   const response = await fetch("http://api.nbp.pl/api/exchangerates/tables/A/");
//   const json = await response.json();
//   console.log("srodek iife");
//   dataStorage = json;
// })();
// console.log(321);

// const makeWithdraw = (balance) =>
//   ((copyBalance) => {
//     let balance = copyBalance; // ta zmienna jest prywatna
//     const kradnij = () => {
//       console.log("Ukradlem ci siano");
//     };
//     kradnij();
//     return {
//       withdraw(amount) {
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         }
//         return "Za malo pieniedzy na koncie";
//       },
//     };
//   })(balance);

// const konto = makeWithdraw(123);

// console.log(konto.balance);
// console.log(konto.withdraw(20));

// for (let i = 0; i < 3; i++) {
//   const button = document.createElement("button");
//   button.textContent = `Button ${i}`;
//   button.onclick = (function (copyIterator) {
//     return () => {
//       console.log(copyIterator);
//     };
//   })(i);
//   document.body.appendChild(button);
// }

// function fn() {
//   const imie = "Kacper";
//   function wyswietlImie() {
//     console.log(imie);
//   }
//   wyswietlImie();
// }

// function createNewFunction() {
//   // const obj = {

//   // }
//   const imie = "Janek";
//   function wyswietlImie() {
//     console.log(imie);
//   }
//   return wyswietlImie;
// }

// const newFunction = createNewFunction();
// newFunction();

// const stworzDodaj = (liczba1) => {
//   return (liczba2) => {
//     return liczba1 + liczba2;
//   };
// };

// const dodaj5 = stworzDodaj(5);
// const dodaj25 = stworzDodaj(25);

// console.log(dodaj5(7));
// console.log(dodaj25(17));

// const x = (function () {
//   const y = 5;
//   return () => {
//     console.log(y);
//   };
// })();

// x();

// const counter = (function () {
//   let licznik = 0;
//   function dodajDoLicznika(liczba) {
//     licznik += liczba;
//   }
//   return {
//     zwiekszO1() {
//       dodajDoLicznika(1);
//     },
//     zmniejszO1() {
//       dodajDoLicznika(-1);
//     },
//     pokazLicznik() {
//       return licznik;
//     },
//   };
// })();

// console.log(counter);

// counter.zwiekszO1();
// counter.zwiekszO1();
// counter.zwiekszO1();
// counter.zwiekszO1();

// console.log(counter.pokazLicznik());

// const add = (a, b, c, d) => {
//   return a + b + c + d;
// };

// console.log(add(1, 2, 3, 4));

// const addCurrying = (a) => {
//   return (b) => {
//     return (c) => {
//       return (d) => {
//         return a + b + c + d;
//       };
//     };
//   };
// };

// console.log(addCurrying(1)(3)(4));

// function* generator() {
//   console.log("to jest generator");
//   yield "abc";
//   console.log("a nie zwykla funkcja");
//   yield "123"; //next
//   // yield renderPromise() // symulacja async
//   console.log(123);
//   return 890;
// }

// const iterator = generator();
// const nextCall1 = iterator.next();
// const nextCall2 = iterator.next();
// const nextCall3 = iterator.next();
// console.log(nextCall1);
// console.log(nextCall2);
// console.log(nextCall3);

// Proxy - wraper dla innych obiektów

const person = {
  name: "Janek",
  surname: "Kowalski",
  email: "janek.kowalski@gmail.com",
};

const handler = {
  get(target, property) {
    console.log(`Własność ${property} została właśnie przeczytana`);
    return target[property];
  },
};

const personProxy = new Proxy(person, handler);

console.log(personProxy.name);
