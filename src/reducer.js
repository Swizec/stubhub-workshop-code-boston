import { combineReducers } from "redux";

function tickets(state = { page: 0, list: [] }, action) {
    switch (action.type) {
        case "TICKETS_FETCHED":
            return {
                page: state.page + 1,
                list: [...state.list, ...action.tickets.events]
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    tickets
});

export default rootReducer;
