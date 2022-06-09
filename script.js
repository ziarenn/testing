"use strict";

// console.log("Pierwszy console.log");
// alert("Stop");
// console.log("Drugi console.log");

// console.log("Pierwszy console log");

// setTimeout(() => {
//   console.log("Drugi console log");
// }, 3000);

// console.log("Trzeci console log");

const todoListEl = document.querySelector(".todos");
const selectUser = document.getElementById("user-select");
const loadButton = document.querySelector(".load-todos");
// const request = new XMLHttpRequest();

// loadButton.addEventListener("click", function () {
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//   request.send();

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);

//     data.forEach((el) => {
//       const HTML = `<li style="color:${el.completed ? "green" : "red"}">
//                 <p>User id: ${el.userId}, id: ${el.id}, title: ${el.title}</p>
//             </li>`;
//       todoList.insertAdjacentHTML("beforeend", HTML);
//     });
//   });
// });

//////////////////////////////////////////////////////

// const renderTodos = function (todoList) {
//   todoList.forEach((el, i) => {
//     const HTML = `<li style="color:${
//       el.completed ? "green" : "red"
//     }" class="list-element" id="${i}">
//                         <p>User id: ${el.userId}, id: ${el.id}, title: ${
//       el.title
//     }</p>
//                     </li>`;
//     todoListEl.insertAdjacentHTML("beforeend", HTML);
//   });
// };

// const getTodosForCertainUser = function (userId) {
//   fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
//     .then(
//       function (response) {
//         if (!response.ok) {
//           throw new Error("Something went wrong");
//         }

//         return response.json(); // .json zwraca promise
//       }
//       // function (error) {
//       //   alert(error); // then przyjmuje 2 argumenty, 1 callback dla resolve i 1 callback dla reject
//       // }
//     )
//     .then((data) => {
//       renderTodos(data);
//       return fetch("https://jsonplaceholder.typicode.com/posts/");
//     })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const liList = document.querySelectorAll(".list-element");
//       // for (let i = 0; i < liList.length; i++) {
//       //   const element = document.getElementById(`${i}`);
//       //   const p = document.createElement("p");
//       //   p.innerText = `${data[i].title}`;
//       //   element.appendChild(p);
//       // }
//       liList.forEach((el, i) => {
//         const element = document.getElementById(`${i}`);
//         const p = document.createElement("p");
//         p.innerText = `${data[i].title}`;
//         element.appendChild(p);
//       });
//     })
//     .catch((err) => console.error(err))
//     .finally(() => {
//       // tutaj cos co niezaleznie od wyniku operacji musi sie stac, np schowanie spinnera ladowania
//     });
// };

// loadButton.addEventListener("click", function () {
//   todoListEl.innerHTML = "";
//   getTodosForCertainUser(selectUser.value);
// });

//Event loop in practice

// console.log("test start");
// setTimeout(() => console.log("0"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// console.log("test end");

// const loteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) {
//     resolve("You win");
//   } else {
//     reject("You lose");
//   }
// });

// loteryPromise.then((res) => console.log(res));

// //Promisyfing setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("resolved");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("waited 3 seconds in total");
//   });

// fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
//   .then(
//     function (response) {
//       if (!response.ok) {
//         throw new Error("Something went wrong");
//       }

//       return response.json(); // .json zwraca promise
//     }
//     // function (error) {
//     //   alert(error); // then przyjmuje 2 argumenty, 1 callback dla resolve i 1 callback dla reject
//     // }
//   )
//   .then((data) => {
//     renderTodos(data);
//     return fetch("https://jsonplaceholder.typicode.com/posts/");
//   })
//   .then((response) => {
//     return response.json();
//   });

//ARTIFICIAL FETCH

// export const artificialFetch = function (url) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject("Timed out");
//     }, 5000);
//     const request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.send();
//     request.addEventListener("load", function () {
//       const data = JSON.parse(this.responseText);
//       resolve(data);
//     });
//   });
// };

// const displayData = async function () {
//   const data = await artificialFetch(
//     "https://jsonplaceholder.typicode.com/posts/"
//   );
//   console.log(data);
// };

// try/catch

// try {
//   let y = "Kasia";
//   const x = 5;
//   x = "Kacper";
// } catch (err) {
//   console.error(`${err.message} (funkcja mojaFunkcja1)`);
// }

// ZAD 2

// const renderTodos = function (todoList) {
//   todoList.forEach((el, i) => {
//     const HTML = `<li style="color:${
//       el.completed ? "green" : "red"
//     }" class="list-element" id="${i}">
//                         <p>User id: ${el.userId}, id: ${el.id}, title: ${
//       el.title
//     }</p>
//                     </li>`;
//     todoListEl.insertAdjacentHTML("beforeend", HTML);
//   });
// };

// const renderAdditionalInformation = function (data) {
//   const liList = document.querySelectorAll(".list-element");
//   liList.forEach((_, i) => {
//     const element = document.getElementById(`${i}`);
//     const p = document.createElement("p");
//     p.innerText = `${data[i].title}`;
//     element.appendChild(p);
//   });
// };

// const getTodosForCertainUser = async function (userId) {
//   try {
//     const data = await artificialFetch(
//       `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
//     );
//     renderTodos(data);
//     const posts = await artificialFetch(
//       "https://jsonplaceholder.typicode.com/posts/"
//     );
//     renderAdditionalInformation(posts);
//     return "Rendered!";
//   } catch (err) {
//     console.error(
//       `${error.message} (an error occured in function getTodosForCertainUser)`
//     );
//   }
// };

// loadButton.addEventListener("click", function () {
//   todoListEl.innerHTML = "";
//   getTodosForCertainUser(selectUser.value);
// });

// getTodosForCertainUser().then((res) => console.log(res));

// const make3Fetches = async function () {
  // const posts = await artificialFetch(
  //   "https://jsonplaceholder.typicode.com/posts/"
  // );
  // const comments = await artificialFetch(
  //   "https://jsonplaceholder.typicode.com/comments/"
  // );
  // const todos = await artificialFetch(
  //   "https://jsonplaceholder.typicode.com/todos/"
  // );

  // console.log(posts, comments, todos);
//   const data = await Promise.all([
//     artificialFetch("https://jsonplaceholder.typicode.com/posts/"),
//     await artificialFetch("https://jsonplaceholder.typicode.com/todos/"),
//     artificialFetch("https://jsonplaceholder.typicode.com/comments/"),
//   ]);
//   console.log(data);
// };

//dlaczego kazdy fetch ma czekac na poprzedni?

// Promise.race

// (async function () {
//   const response = await Promise.race([
//     artificialFetch("https://jsonplaceholder.typicode.com/posts/1"),
//     artificialFetch("https://jsonplaceholder.typicode.com/posts/2"),
//     artificialFetch("https://jsonplaceholder.typicode.com/posts/3"),
//   ]);
//   console.log(response);
// })();

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error("request took too long"));
//     }, s * 1000);
//   });
// };

// Promise.race([
//   artificialFetch("https://jsonplaceholder.typicode.com/posts/3"),
//   artificialFetch("https://jsonplaceholder.typicode.com/posts/2"),
//   timeout(1),
// ]);

//zwraca pierwszy resolved promise

//Promise.allSettled czeka na wszystkie

// Promise.allSettled([
//   Promise.resolve("Success"),
//   Promise.reject("error"),
//   Promise.resolve("success"),
// ]).then((data) => console.log(data));

// //Promise.any
// // zwroci pierwszy resolved promise
// Promise.any([Promise.resolve("true")]).then((data) => console.log(data));
