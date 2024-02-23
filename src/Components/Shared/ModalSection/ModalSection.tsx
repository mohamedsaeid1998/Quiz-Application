/** @format */

import React, { Children } from "react";
import { Modal } from "flowbite-react";
import "../../../Styles/global.scss";
import { TbFidgetSpinner } from "react-icons/tb";

const ModalSection = ({
  openModal,
  setOpenModal,
  design,
  textBtn,
  children,
  modalTitle,
  handleSubmit,
  loading,
}) => {
  // onClose={() => setOpenModal(false)}
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      size="4xl"
      popup
    >
      <Modal.Header className="p-4 capitalize">{modalTitle}</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {children}
          <div className="py-2 ">
            <button
              disabled={loading}
              type="text"
              className={` ${design} block m-auto w-1/6 p-2 space-y-6 border border-[#ddd] rounded-[2rem] px-5 text-gray-100   `}
            >
              <span className="text-center m-auto flex justify-center ">
                {loading ? (
                  <span className="py-2">
                    <TbFidgetSpinner className="animate-spin" />
                  </span>
                ) : (
                  textBtn
                )}
              </span>
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSection;
