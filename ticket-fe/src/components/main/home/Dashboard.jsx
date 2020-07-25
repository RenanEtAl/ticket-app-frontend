import React from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";

const Dashboard = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <Card />
           
      
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
