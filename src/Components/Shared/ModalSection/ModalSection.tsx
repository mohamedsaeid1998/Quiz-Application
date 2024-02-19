/** @format */

import React, { Children } from "react";
import { Modal } from "flowbite-react";
import "../../../Styles/global.scss";
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
      <div className="pb-6">
        <button
          type="submit"
          className={` modalBtn block m-auto w-1/4 p-2 space-y-6 border border-[#ddd] rounded-[2rem] px-5 bg-slate-800 text-gray-100 hover:text-black   `}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default ModalSection;
