import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../card/Card";
import AddTicket from "../tickets/add/AddTicket";
import { TableElements } from "../table-elements/TableElements";
import { AuthToken } from "../../../helpers/AuthToken";
import { allTickets, updateTableEntries } from "../../../redux/actions/tickets";
import io from "socket.io-client";

const API_ENDPOINT = "http://localhost:5000";

const Dashboard = (props) => {
  const socket = io(API_ENDPOINT);
  const { token, allTickets, updateTableEntries } = props;

  useEffect(() => {
    const dashboardMethods = () => {
      AuthToken(token);
      allTickets();
      updateTableEntries(5);
    };

    dashboardMethods();
    // listen for refreshPage event
    socket.on("refreshPage", () => {
      dashboardMethods();
    });
  }, [token, allTickets, updateTableEntries, socket]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <Card />
            <TableElements />
            <AddTicket />
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  token: PropTypes.string,
  allTickets: PropTypes.func.isRequired,
  updateTableEntries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { allTickets, updateTableEntries })(
  Dashboard
);
