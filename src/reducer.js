import { combineReducers } from "redux";
import { createSelector } from "reselect";

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

function shoppingCart(state = [], action) {
    switch (action.type) {
        case "SELECT_TICKET":
            if (!state.includes(action.id)) {
                return [...state, action.id];
            } else {
                return state;
            }
        default:
            return state;
    }
}

export const isInShoppingCart = createSelector(
    [(state, item) => item.id, (state, item) => state.shoppingCart],
    (itemId, shoppingCart) => {
        return shoppingCart.includes(itemId);
    }
);

const rootReducer = combineReducers({
    tickets,
    shoppingCart
});

/*

{
    tickets: { 
        page: 0,
        list: []
    },
    shoppingCart: []
}

*/

export default rootReducer;
