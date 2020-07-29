import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Table.css";
import io from "socket.io-client";
import moment from "moment";
import { selectedTicket } from "../../../../redux/actions/tickets";
import { editModal } from "../../../../redux/actions/modal";
import { deleteTicket } from "../../../../services/ticket.service";

const TABLE_HEAD = [
  "ID",
  "Fullname",
  "Subject",
  "Priority",
  "Status",
  "Created",
  "Completed",
  "Action",
];

const Table = (props) => {
  const { tickets, entries, selectedTicket, editModal, user } = props;

  const [tableTickets, setTableTickets] = useState(tickets);

  useEffect(() => {
    // show 10 entries
    const tableEntries = tickets.slice(0, parseInt(entries, 10));
    setTableTickets(tableEntries);
  }, [setTableTickets, tickets, entries]);

  const openEditModal = (ticket) => {
    editModal(true);
    selectedTicket(ticket);
  };

  const deleteUserTicket = (id) => {};

  const markUserTicket = (id) => {};

  return (
    <div className="col-sm-12 table-responsive">
      <table className="table table-centered mb-0" id="ticketTable">
        <thead className="font-14 bg-light">
          <tr>
            {TABLE_HEAD.map((tableHead, i) => (
              <th key={i} className="font-weight-medium">
                {tableHead} &nbsp;&nbsp;
                <i className="fas fa-angle-down icon"></i>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-14">
          {tableTickets.map((ticket) => (
            <tr key={ticket._id}>
              <td>#{ticket.ticketId}</td>
              <td>{ticket.fullname}</td>
              <td>{ticket.subject}</td>
              {/* ticket priority */}
              <td>
                {ticket.priority === "High" ? (
                  <span className="badge badge-danger">{ticket.priority}</span>
                ) : ticket.priority === "Medium" ? (
                  <span className="badge badge-warning">{ticket.priority}</span>
                ) : (
                  <span className="badge badge-secondary">
                    {ticket.priority}
                  </span>
                )}
              </td>
              {/* ticket status */}
              <td>
                {ticket.status === "Open" ? (
                  <span className="badge badge-success">{ticket.status}</span>
                ) : (
                  <span className="badge badge-secondary">{ticket.status}</span>
                )}
              </td>
              {/* show dates */}
              <td>{moment(ticket.created).format("DD/MM/YYYY")}</td>
              <td>{moment(ticket.dueDate).format("DD/MM/YYYY")}</td>
              {/* actions */}
              <td
                className={
                  user && user._id === ticket.user
                    ? "actions actions-bg"
                    : "actions"
                }
              >
                {user && user._id === ticket.user ? (
                  <>
                    <a
                      href="#!"
                      className="btn text-white btn-sm"
                      onClick={() => deleteUserTicket(ticket._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </a>
                    <a
                      href="#!"
                      className={
                        ticket.status === "Closed"
                          ? "btn text-white btn-sm disabled"
                          : "btn text-white btn-sm"
                      }
                      onClick={() => markUserTicket(ticket._id)}
                    >
                      <i className="fas fa-check"></i>
                    </a>
                    <a
                      href="#!"
                      className={
                        ticket.status === "Closed"
                          ? "btn text-white btn-sm disabled"
                          : "btn text-white btn-sm"
                      }
                      onClick={() => openEditModal(ticket)}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                  </>
                ) : user && user.role === "Admin" ? (
                  <>
                    <a
                      href="#!"
                      className="btn text-white btn-sm"
                      onClick={() => deleteUserTicket(ticket._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </a>
                    <a
                      href="#!"
                      className={
                        ticket.status === "Closed"
                          ? "btn text-white btn-sm disabled"
                          : "btn text-white btn-sm"
                      }
                      onClick={() => markUserTicket(ticket._id)}
                    >
                      <i className="fas fa-check"></i>
                    </a>
                  </>
                ) : (
                  <>
                    <a href="#!" className="btn btn-sm disabled">
                      <i className="fas fa-trash"></i>
                    </a>
                    <a href="#!" className="btn btn-sm disabled">
                      <i className="fas fa-check"></i>
                    </a>
                    <a href="#!" className="btn btn-sm disabled">
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tickets: PropTypes.array.isRequired,
  entries: PropTypes.any,
  editModal: PropTypes.func.isRequired,
  selectedTicket: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  entries: state.tickets.entries,
});

export default connect(mapStateToProps, { editModal, selectedTicket })(Table);
