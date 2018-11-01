import { configure } from 'mobx';

import SessionStore from './session';
import UserStore from './user';

configure({ enforceActions: true });

class MobxStore {
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.userStore = new UserStore(this);
  }
}

const mobxStore = new MobxStore();

export default mobxStore;