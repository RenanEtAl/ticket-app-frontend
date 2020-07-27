import React, { useState, useEffect } from "react";
import { Modal } from "../../../reusable/modal/Modal";
import AddTicketForm from "./AddTicketForm";

const AddTicket = () => {
  const [visible, setVisible] = useState(false);

  

  const dismiss = () => {};
  return (
    <>
      <Modal
        header="Add New Ticket"
        visible={visible}
        dismiss={dismiss}
        children={<AddTicketForm />}
      />
    </>
  );
};

export default AddTicket;
