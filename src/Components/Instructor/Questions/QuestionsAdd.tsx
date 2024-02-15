import { Button, Label, Modal, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function QuestionsAdd({ openModal, setOpenModal }) {
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <h2>Set up a new question</h2>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-screen-lg mx-auto"
          >
            <div className="flex flex-col my-3">
              <div className="flex-1 flex items-center border border-gray-300 rounded-md mb-3">
                <h3 className="p-3 bg-secondColor rounded-l-md">Title:</h3>
                <input type="text" className="flex-1 border-0 outline-none" />
              </div>
              <div className="flex-1 flex items-center border border-gray-300 rounded-md mb-3">
                <h3 className="p-3 bg-secondColor rounded-l-md">
                  Description:
                </h3>
                <textarea className="flex-1 border-0 outline-none" rows={2} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 my-3">
              <div className="flex-1 flex items-center border border-gray-300 rounded-md mb-3 md:mb-0">
                <h3 className="p-3 bg-secondColor rounded-l-md">A:</h3>
                <input type="text" className="flex-1 border-0 outline-none" />
              </div>
              <div className="flex-1 flex items-center border border-gray-300 rounded-md mb-3 md:mb-0">
                <h3 className="p-3 bg-secondColor rounded-l-md">B:</h3>
                <input type="text" className="flex-1 border-0 outline-none" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 my-3">
              <div className="flex-1 flex items-center border border-gray-300 rounded-md mb-3 md:mb-0">
                <h3 className="p-3 bg-secondColor rounded-l-md">C:</h3>
                <input type="text" className="flex-1 border-0 outline-none" />
              </div>
              <div className="flex-1 flex items-center border border-gray-300 rounded-md mb-3 md:mb-0">
                <h3 className="p-3 bg-secondColor rounded-l-md">D:</h3>
                <input type="text" className="flex-1 border-0 outline-none" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-5 my-3">
              <div className="flex items-center border-[1px] border-[#ddd] border-solid rounded-[10px]">
                <h3 className="flex-shrink-0 p-3 bg-secondColor m-0 rounded-l-[10px]">
                  Right Answer:
                </h3>
                <input
                  type="text"
                  className="border-0 flex-1 h-[40px] outline-none"
                />
              </div>
              <div className="flex items-center border-[1px] border-[#ddd] border-solid rounded-[10px]">
                <h3 className="flex-shrink-0 p-3 bg-secondColor m-0 rounded-l-[10px]">
                  Right Answer:
                </h3>
                <select className="border-0 flex-1 h-[40px] outline-none">
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                  <option value="C">Option C</option>
                  <option value="D">Option D</option>
                </select>
              </div>
            </div>

            <Button color="gray" className="mx-auto">
              {t("Create")}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
