import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../card/Card";
import AddTicket from "../tickets/add/AddTicket";
import { TableElements } from "../table-elements/TableElements";

const Dashboard = (props) => {
  const { token } = props;

  useEffect(() => {
    AuthToken(token);
  }, [token]);
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
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, {})(Dashboard);
