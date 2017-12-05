import Api from "./Api";

export function fetchTickets() {
    return function(dispatch, getState) {
        console.log("actually trying to fetch");
        Api.events().then(tickets => {
            dispatch({
                type: "TICKETS_FETCHED",
                tickets
            });
        });
    };
}
