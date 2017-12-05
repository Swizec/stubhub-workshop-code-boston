import React, { Component } from "react";
import { addToCart } from "./actions";
import styled from "styled-components";
import format from "date-fns/format";
import { connect } from "react-redux";

import { isInShoppingCart } from "./reducer";

export const TicketStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
`;

const SelectableTicketStyle = TicketStyle.extend`
    cursor: pointer;
    &:hover {
        background: rgba(219, 112, 147, 0.3);
    }
`;

const SelectedTicketStyle = TicketStyle.extend`
    cursor: default;
    background: rgba(219, 112, 147, 0.3);
`;

const Thumbnail = styled.img`
    display: flex;
    flex: 1;
    width: 350px;
`;

const TicketMeta = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 20px;
`;

class Ticket extends Component {
    selectTicket = () => this.props.selectTicket({ id: this.props.info.id });

    render() {
        const {
            info: { imageUrl, name, description, eventDateLocal }
        } = this.props;

        return (
            <SelectableTicketStyle onClick={this.selectTicket}>
                <Thumbnail src={imageUrl} />
                <TicketMeta>
                    <h2>{name}</h2>
                    <p>{format(eventDateLocal, "ddd Do MMMM, hh:mma")}</p>
                    <p>{description}</p>
                </TicketMeta>
            </SelectableTicketStyle>
        );
    }
}

export { Ticket };
