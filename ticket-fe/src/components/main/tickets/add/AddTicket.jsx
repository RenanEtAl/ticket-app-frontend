import React, { useState, useEffect } from "react";
import { Modal } from "../../../reusable/modal/Modal";
import AddTicketForm from "./AddTicketForm";
import { connect } from "react-redux";
import { addModal } from "../../../../redux/actions/modal";

const AddTicket = (props) => {
  const { add, addModal } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(add);
  }, [setVisible, add]);

  const dismiss = () => {
    // hide
    addModal(false);
  };
  return (
    <>
      <Modal
        header="Add New Ticket"
        visible={visible}
        dismiss={dismiss}
        children={<AddTicketForm addModal={addModal} />}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  addModal: state.modal.add,
});
export default connect(mapStateToProps, { addModal })(AddTicket);
