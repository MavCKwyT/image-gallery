// closer
// const myUseState = (initialState) => {
//   let state = initialState;
//   const setState = (newState) => {
//     state = newState;
//   };
//   return [state, setState];
// };

// async actions - starts now but finish later
//---------------
// promise
// function showLogPromise() {
//   return new Promise((resolve) => {
//     resolve(1);
//   });
// }

// showLogPromise().then((result) => console.log(result + 1));
// --------------
// callback
// function showLogCallback(callback) {
//   const val = 1;
//   callback(val);
// }
// function callBackFunc(result) {
//   console.log(result + 1);
// }
//
// showLogCallback(callBackFunc);

// ------------------

// function Cat(age) {
//   this.age = age;
//   this.eat = function () {
//     return 'food';
//   };
// }
// const max = new Cat(8);
// console.log(max);
//
// // ------------------
//
// class CatEs6 {
//   constructor(age) {
//     this.age = age;
//   }
//
//     eat = function () {
//       return 'food';
//     }
// }
//
// const leo = new CatEs6(12);
// console.log(leo);
//
// // ------------------
