/** @format */
import React from "react";

import ModalSection from "@/Components/Shared/ModalSection/ModalSection";
import { FaCirclePlus } from "react-icons/fa6";

const Groups = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <main>
        <ModalSection
          openModal={openModal}
          setOpenModal={setOpenModal}
          toggleModal={toggleModal}
        >
          <div>AAAAAAAAAAAAAAAA</div>
        </ModalSection>
        <div className="container">
          <button
            onClick={toggleModal}
            className="border-2 p-1 rounded-full flex  justify-center items-center gap-2"
          >
            <span className="text-2xl">
              <FaCirclePlus />
            </span>{" "}
            Add Group
          </button>
        </div>
      </main>
    </>
  );
};

export default Groups;
