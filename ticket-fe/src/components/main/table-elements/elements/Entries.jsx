import React from "react";
import PropTypes from "prop-types";

const Entries = (props) => {
  const { entries, updateTableEntries, tickets, tableEntries } = props;

  const onSelectTag = (event) => {
    
  }
  return (
    <div className="form-group">
      <select
        className="form-control form-control-sm"
        name="entries"
        value={tableEntries}
        onChange={onSelectTag}
        style={selectTagStyle}
      >
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="10">10</option>
        <option value="10">All</option>
      </select>
    </div>
  );
};
const selectTagStyle = {
  backgroundColor: "#8a929a",
  color: "white",
  border: "none",
  width: "100px",
  height: "auto",
};
Entries.propTypes = {
  updateTableEntries: PropTypes.func.isRequired,
  entries: PropTypes.any.isRequired,
  tickets: PropTypes.array.isRequired,
};

export default Entries;
