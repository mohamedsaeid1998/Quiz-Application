/** @format */

import { Modal } from "flowbite-react";
import React from "react";

const ModalDeleteSection = ({
  openModal,
  setOpenModal,

  textBtn,
  children,
  modalTitle,
  ...res
}) => {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      size="4xl"
      popup
    >
      <Modal.Header className="p-4 capitalize">{modalTitle}</Modal.Header>
      <Modal.Body>
        <form>
          {children}
          <div className="">
            <button
              onClick={res}
              type="submit"
              className={` modalDeleteBtn block m-auto w-1/4 p-2 space-y-6 border border-[#ddd] rounded-[2rem] px-5 text-gray-100   `}
            >
              {textBtn}
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDeleteSection;
