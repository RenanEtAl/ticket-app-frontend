import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../card/Card";
import AddTicket from "../tickets/add/AddTicket";
import { TableElements } from "../table-elements/TableElements";
import { AuthToken } from "../../../helpers/AuthToken";
import { allTickets, updateTableEntries } from "../../../redux/actions/tickets";

const Dashboard = (props) => {
  const { token, allTickets, updateTableEntries } = props;

  useEffect(() => {
    AuthToken(token);
    allTickets();
    updateTableEntries(5);
  }, [token, allTickets, updateTableEntries]);
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
