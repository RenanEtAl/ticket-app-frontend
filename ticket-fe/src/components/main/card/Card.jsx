import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import "./Card.css";
import { Box } from "./Box";
import { Button } from "../../reusable/Button";
import { addModal } from "../../../redux/actions/modal";

const Card = (props) => {
  const { tickets, addModal } = props;

  const findByPriority = (value) => {
    return _.filter(tickets, ["priority", value]).length;
  };

  const findByStatus = (value) => {
    return _.filter(tickets, ["status", value]).length;
  };
  return (
    <div>
      <Button
        className="btn btn-primary btn-add"
        type="submit"
        label="Add Ticket"
        handleClick={() => addModal(true)}
      />
      <div className="text-center mb-2">
        <div className="row">
          <Box
            title="Total Tickets"
            cardValue={tickets.length}
            iconClass="fas fa-tag"
            type="total"
            status="all"
          />
          <Box
            title="Open Tickets"
            cardValue={findByStatus("Open")}
            iconClass="fas fa-archive"
            cardValueClass="text-success"
            type="Open"
            status="status"
          />
          <Box
            title="Closed Tickets"
            cardValue={findByStatus("Closed")}
            iconClass="fas fa-shield-alt"
            cardValueClass="text-muted"
            type="Closed"
            status="status"
          />
          <Box
            title="High Priority Tickets"
            cardValue={findByPriority("High")}
            iconClass="fas fa-temperature-high"
            cardValueClass="text-danger"
            type="High"
            status="priority"
          />
          <Box
            title="Medium Priority Tickets"
            cardValue={findByPriority("Medium")}
            iconClass="fas fa-folder-minus"
            cardValueClass="text-warning"
            type="Medium"
            status="priority"
          />
          <Box
            title="Low Priority Tickets"
            cardValue={findByPriority("Low")}
            iconClass="fas fa-battery-quarter"
            cardValueClass="text-muted"
            type="Low"
            status="priority"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  tickets: PropTypes.array.isRequired,
  addModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
});

export default connect(mapStateToProps, { addModal })(Card);
