import { configure } from 'mobx';

import SessionStore from './session';
import UserStore from './user';
import DashboardStore from './dashboard'

configure({ enforceActions: "observed" })

class MobxStore {
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.userStore = new UserStore(this);
    this.dashboardStore = new DashboardStore(this);
  }
}

const mobxStore = new MobxStore();

export default mobxStore;