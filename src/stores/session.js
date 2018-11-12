import { observable, action } from 'mobx';

class SessionStore {

    constructor(rootStore) {
      this.rootStore = rootStore;
    }

  @observable authUser = null;


  @action setAuthUser = authUser => {
    this.authUser = authUser;
  }
  
}

export default SessionStore;