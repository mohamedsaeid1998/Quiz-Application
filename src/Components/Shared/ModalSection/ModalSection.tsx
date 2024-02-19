/** @format */

import React, { Children } from "react";
import { Modal } from "flowbite-react";

const ModalSection = ({ openModal, setOpenModal, children }) => {
  // onClose={() => setOpenModal(false)}
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      size="4xl"
      popup
    >
      <Modal.Header className="p-4 capitalize">set up a new quiz</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
};

export default ModalSection;
