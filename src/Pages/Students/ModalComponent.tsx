/** @format */
"use client";

import React, { useRef } from "react";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

const ModalComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="">
      <Button
        className="ms-auto my-2 studentBtn"
        color="light"
        onClick={() => setOpenModal(true)}
      >
        <span className="spinIcon px-2 text-lg ">
          <FaCirclePlus />
        </span>
        <span className="text-lg">Add Student</span>
      </Button>
      <Modal
        show={openModal}
        size="3xl"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div>
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-5 start-0 flex items-center ps-3 pointer-events-none">
                <div className="insideInput w-50 h-100 p-2 text-gray-500 dark:text-gray-400">
                  Name
                </div>
              </div>
              <input
                type="text"
                id="website-admin"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bonnie Green"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
export const inputFiled = () => {};
