import { configure } from 'mobx';

import SessionStore from './session';
import UserStore from './user';

configure({ enforceActions: true });

class RootStore {
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.userStore = new UserStore(this);
  }
}

const mobxStore = new RootStore();

export default mobxStore;