import { observable, action, decorate } from 'mobx';

class DashboardStore {
    constructor(rootStore) {
      this.rootStore = rootStore;
    }

    navigationVisible = false

    toggleBoolean = property => {
        this[property] = !this[property]
    }
  
}

export default decorate(
    DashboardStore, {
        navigationVisible: observable,
        toggleBoolean: action,
    })