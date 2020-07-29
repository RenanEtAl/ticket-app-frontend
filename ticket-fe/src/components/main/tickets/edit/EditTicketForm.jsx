import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormInput } from "../../../reusable/FormInput";
import { DropDown } from "../../../reusable/dropdown/DropDown";
import io from "socket.io-client";
import { editTicket } from "../../../../services/ticket.service";
import { Button } from "../../../reusable/Button";
import { departmentsArray, prioritiesArray } from "../../../../helpers/Helpers";

const API_ENDPOINT = "http://localhost:5000";

const EditTicketForm = (props) => {
  const socket = io(API_ENDPOINT);
  const { editModal, selectedTicket } = props;

  let departments = departmentsArray();
  let priorities = prioritiesArray();

  const [department, setDepartment] = useState("Select Department");
  const [priority, setPriority] = useState("Select Priority");
  const [ticket, setTicket] = useState({
    data: {
      fullname: "",
      email: "",
      subject: "",
      description: "",
      department: "",
      priority: "",
    },
  });

  const { fullname, email, subject, description } = ticket.data;

  useEffect(() => {
    if (selectedTicket) {
      setTicket({
        data: {
          fullname: selectedTicket.fullname,
          email: selectedTicket.email,
          subject: selectedTicket.subject,
          description: selectedTicket.description,
          department: selectedTicket.department,
          priority: selectedTicket.priority,
        },
      });

      setDepartment(selectedTicket.department);
      setPriority(selectedTicket.priority);
    }
  }, [selectedTicket]);

  const getDropDownValue = (item) => {
    if (item.key === "departments") {
      setDepartment(item.title);
    } else {
      setPriority(item.title);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    const { data } = ticket;
    setTicket({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  const onEditTicket = async (event) => {
    event.preventDefault();
    const { data } = ticket;
    data.priority = priority;
    data.department = department;

    await editTicket(selectedTicket._id, data);
    socket.emit("refresh", {});
  };

  return (
    <>
      <form onSubmit={onEditTicket}>
        <div className="form-group">
          <FormInput
            type="text"
            name="fullname"
            label="Fullname"
            className="form-control"
            placeholder="Enter Fullname"
            value={fullname}
            error=""
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <FormInput
            type="text"
            name="email"
            label="Email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            error=""
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <DropDown
            title={department}
            label="Departments"
            list={departments}
            getDropDownValue={getDropDownValue}
          />
        </div>
        <div className="form-group">
          <DropDown
            title={priority}
            label="Priority"
            list={priorities}
            getDropDownValue={getDropDownValue}
          />
        </div>
        <div className="form-group">
          <FormInput
            type="text"
            name="subject"
            label="Subject"
            className="form-control"
            placeholder="Enter Subject"
            value={subject}
            error=""
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            row="5"
            col="40"
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <Button
          className="btn btn-primary"
          label="Edit"
          disabled={
            !fullname ||
            !email ||
            !subject ||
            !description ||
            !department ||
            !priority
          }
        />
        &nbsp;&nbsp;&nbsp;
        <Button
          className="btn btn-danger"
          label="CANCEL"
          handleClick={() => editModal(false)}
        />
      </form>
    </>
  );
};

EditTicketForm.propTypes = {
  selectedTicket: PropTypes.object,
};

const mapStateToProps = (state) => ({
  seletectedTicket: state.tickets.seletectedTicket,
});

export default connect(mapStateToProps, {})(EditTicketForm);
