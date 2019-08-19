import Emitter from "es6-event-emitter";

let state = {};

let initialState = {
    city: {name: "CITY"},
    list: [],
    isLoggedIn: false,
    searchTerm: "Omaha"
};

class Store extends Emitter {
    constructor(initialState) {
        state = initialState;
        super();
    }

    updateGlobalState(changes) {
        state = Object.assign({}, state, changes);
        this.trigger("stateChange");
    }

    getGlobalState() {
        //bad practice, returning whole state
        return state;
    }

    subscribe(cb) {
        this.on("stateChange", cb);
    }

    unsubscribe(cb) {
        this.off("stateChange", cb);
    }
}

const instance = new Store(initialState);
export default instance;