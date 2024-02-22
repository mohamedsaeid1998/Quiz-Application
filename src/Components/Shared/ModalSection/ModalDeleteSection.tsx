
import { Modal } from "flowbite-react";


interface IProps {
  openModalDelete: any
  setOpenModalDelete: any
  textBtn: any
  children: any
  modalTitle: any
  handleFunction: any
}

const ModalDeleteSection = ({
  openModalDelete,
  setOpenModalDelete,
  textBtn,
  children,
  modalTitle,
  handleFunction
}: IProps) => {
  return (
    <Modal
      show={openModalDelete}
      onClose={() => setOpenModalDelete(false)}
      size="4xl"
      popup
    >
      <Modal.Header className="p-4 capitalize">{modalTitle}</Modal.Header>
      <Modal.Body>

        {children}
        <div className="">
          <button
            onClick={handleFunction}
            type="submit"
            className={` modalDeleteBtn block m-auto w-1/4 p-2 space-y-6 border border-[#ddd] rounded-[2rem] px-5 text-gray-100   `}
          >
            {textBtn}
          </button>
        </div>

      </Modal.Body>
    </Modal>
  );
};

export default ModalDeleteSection;
