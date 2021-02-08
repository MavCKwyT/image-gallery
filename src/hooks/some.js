const myUseState = (initialState) => {
  let state = initialState;
  const setState = (newState) => {
    state = newState;
  };
  return [state, setState];
};

const [abc, setabc] = myUseState(0);
console.log(state);
setabc(42);
console.log(state);
setState(state + 1);
