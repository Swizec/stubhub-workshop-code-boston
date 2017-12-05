import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import matchSorter from "match-sorter";

import Downshift from "downshift";
import { fetchTickets, selectTicket } from "./actions";
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
    fetchTickets,
    selectTicket
};

const Tickets = connect(mapStateToProps, mapDispatchToProps)(
    ({ tickets, fetchTickets, selectTicket }) => (
        <div>
            <Button onClick={fetchTickets} label="More tickets" />
            <React.Fragment>
                {tickets.map(ticket => (
                    <Ticket info={ticket} selectTicket={selectTicket} />
                ))}
            </React.Fragment>
        </div>
    )
);

export default Tickets;
