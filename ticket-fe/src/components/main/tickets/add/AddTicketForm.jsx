import React, { useState } from "react";
import { FormInput } from "../../../reusable/FormInput";
import { Button } from "../../../reusable/Button";
import { DropDown } from "../../../reusable/dropdown/DropDown";
import { departmentsArray, prioritiesArray } from "../../../../helpers/Helpers";
import { addNewTicket } from "../../../../services/ticket.service";
import { addModal } from "../../../../redux/actions/modal";
import io from "socket.io-client";
// children for the Modal

const API_ENDPOINT = "http://localhost:5000";

const AddTicketForm = (props) => {
  const socket = io(API_ENDPOINT);

  const { addModal } = props;
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

  const onAddTickets = async (event) => {
    event.preventDefault();
    const { data } = ticket;
    data.priority = priority;
    data.department = department;

    // add ticket
    await addNewTicket(data);
    socket.emit("refresh", {});
    clearFormFields();
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    const { data } = ticket;
    // tickets
    setTicket({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  const getDropDownValue = (item) => {
    if (item.key === "departments") {
      setDepartment(item.title);
    } else {
      setPriority(item.title);
    }
  };

  const clearFormFields = () => {
    setTicket({
      data: {
        fullname: "",
        email: "",
        subject: "",
        description: "",
        department: "",
        priority: "",
      },
    });
    setDepartment("Select Department");
    setPriority("Select Priority");
  };

  return (
    <>
      <form onSubmit={onAddTickets}>
        {/* name */}
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
        {/* email address */}
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
        {/* Department */}
        <div className="form-group">
          <DropDown
            title={department}
            label="Departments"
            list={departments}
            getDropDownValue={getDropDownValue}
          />
        </div>
        {/* Priority */}
        <div className="form-group">
          <DropDown
            title={priority}
            label="Priority"
            list={priorities}
            getDropDownValue={getDropDownValue}
          />
        </div>
        {/* subject */}
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
        {/* Description */}
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
          label="ADD"
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
          handleClick={() => addModal(false)}
        />
      </form>
    </>
  );
};

export default AddTicketForm;
