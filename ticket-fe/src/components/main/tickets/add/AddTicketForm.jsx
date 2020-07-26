import React from "react";
import { FormInput } from "../../../reusable/FormInput";
import { Button } from "../../../reusable/Button";

// children for the Modal
const AddTicketForm = () => {
  const onAddTickets = (event) => {};
  const onChange = (event) => {};
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
