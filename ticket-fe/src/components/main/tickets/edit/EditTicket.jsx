import React, { useState, useEffect } from "react";
import { Modal } from "../../../reusable/modal/Modal";
import { connect } from "react-redux";
import { editModal } from "../../../../redux/actions/modal";
import connect from "react-redux";
import EditTicketForm from "./EditTicketForm";

const EditTicket = (props) => {
  const { edit, editModal } = props;

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(edit);
  }, [edit, setVisible]);

  const dismiss = () => {
    editModal(false);
  };
  return (
    <>
      <Modal
        header="Edit Ticket"
        visible={visible}
        dismiss={dismiss}
        children={<EditTicketForm editModal={editModal} />}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  edit: state.modal.edit,
});

export default connect(mapStateToProps, { editModal })(EditTicket);
