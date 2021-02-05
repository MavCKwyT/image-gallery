import { makeAutoObservable } from 'mobx';

class TestStore {
  count = 0

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count += 1;
  }
}

export default new TestStore();
