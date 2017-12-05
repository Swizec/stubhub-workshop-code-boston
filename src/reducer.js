import { combineReducers } from "redux";

function tickets(state = [], action) {
    switch (action.type) {
        case "TICKETS_FETCHED":
            return [...state, ...action.tickets.events];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    tickets
});

export default rootReducer;
