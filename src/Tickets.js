import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import matchSorter from "match-sorter";

import Downshift from "downshift";
import { fetchTickets } from "./actions";
import { Button, Input } from "./FormElements";

import { Ticket } from "./Ticket";

const TicketListStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 760px;
    margin: 0 auto;
`;

const mapStateToProps = state => ({
    tickets: state.tickets.list
});
const mapDispatchToProps = {
    fetchTickets
};

const getTickets = (value, tickets) => {
    return value
        ? matchSorter(tickets, value, {
              keys: ["name", "description"]
          })
        : tickets;
};

const SearchableTicketList = ({ tickets, children }) => (
    <Downshift itemToString={item => (item ? item.name : "")}>
        {({ getInputProps, inputValue }) => (
            <div>
                <Input
                    {...getInputProps({
                        placeholder: `Search from ${tickets.length} tickets`
                    })}
                />

                {getTickets(inputValue, tickets).map(ticket =>
                    children(ticket)
                )}
            </div>
        )}
    </Downshift>
);

const Tickets = connect(mapStateToProps, mapDispatchToProps)(
    ({ tickets, fetchTickets }) => (
        <div>
            <Button onClick={fetchTickets} label="More tickets" />
            <SearchableTicketList tickets={tickets}>
                {ticket => <Ticket info={ticket} key={ticket.id} />}
            </SearchableTicketList>
        </div>
    )
);

export default Tickets;
