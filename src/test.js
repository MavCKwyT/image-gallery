// closer
// const myUseState = (initialState) => {
//   let state = initialState;
//   const setState = (newState) => {
//     state = newState;
//   };
//   return [state, setState];
// };

// const promise = new Promise((resolve) => {
//   setTimeout(() => resolve(1), 1000);
// }).then((res) => console.log(res + 1));
//
// console.log(promise);

function showLog(val, callback) {
  const totalSum = val + 1;
  callback(totalSum);
}

function sum(totalSum) {
  console.log(totalSum + 0);
}

showLog(1, sum);
