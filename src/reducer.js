import { combineReducers } from "redux";

function tickets(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    tickets
});

export default rootReducer;
