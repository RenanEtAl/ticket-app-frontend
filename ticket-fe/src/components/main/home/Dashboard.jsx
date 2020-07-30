import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../card/Card";
import AddTicket from "../tickets/add/AddTicket";
import { TableElements } from "../table-elements/TableElements";
import { AuthToken } from "../../../helpers/AuthToken";
import { allTickets, updateTableEntries } from "../../../redux/actions/tickets";
import { getUser } from "../../../redux/actions/user";
import io from "socket.io-client";
import EditTicket from "../tickets/edit/EditTicket";
import { apiEndPoint } from "../../../Config";

const API_ENDPOINT = apiEndPoint();

const Dashboard = (props) => {
  const socket = io(API_ENDPOINT);
  const { token, allTickets, updateTableEntries, entries, getUser } = props;

  useEffect(() => {
    const dashboardMethods = () => {
      AuthToken(token);
      allTickets();
      updateTableEntries(entries); // 5 entries
      getUser();
    };

    dashboardMethods();
    // listen for refreshPage event
    socket.on("refreshPage", () => {
      dashboardMethods();
    });
  }, [token, allTickets, updateTableEntries, socket, entries, getUser]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <Card />
            <TableElements />
            <AddTicket />
            <EditTicket />
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
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, {
  allTickets,
  updateTableEntries,
  getUser,
})(Dashboard);
