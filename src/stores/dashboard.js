import { observable, action, decorate } from 'mobx';

class DashboardStore {
    constructor(rootStore) {
      this.rootStore = rootStore;
    }
    
    authUser = null
    sessionName = "Mobx is Awesome"
    navigationVisible = false


   setAuthUser = authUser => {
       this.authUser = authUser
   }

   setSessionName = () => {
       this.sessionName = Math.round(Math.random().toFixed(4) * 10000)
    }
    
    toggleBoolean = property => {
        this[property] = !this[property]
    }
  
}

// export default DashboardStore;

export default decorate(
    DashboardStore, {
        navigationVisible: observable,
        authUser: observable,
        sessionName: observable,
        setAuthUser: action,
        setSessionName: action,
        toggleBoolean: action,
    })