import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import matchSorter from "match-sorter";

import Downshift from "downshift";
import { fetchTickets } from "./actions";
import { Button, Input } from "./FormElements";

import { SelectableTicket } from "./Ticket";

const TicketListStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 760px;
    margin: 0 auto;
`;

const mapStateToProps = state => ({});
const mapDispatchToProps = {
    fetchTickets
};

const Tickets = connect(mapStateToProps, mapDispatchToProps)(
    ({ fetchTickets }) => <button onClick={fetchTickets}>Fetch Tickets</button>
);

export default Tickets;
