import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

export default function QuestionsList() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border  text-sm font-light dark:border-neutral-500">
                <thead className="border-b font-medium bg-[#0D1321] text-white text-left">
                  <tr>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Question Title
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Question Desc
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Question difficulty level
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap border-r px-6  font-medium dark:border-neutral-500">
                      What is Html
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                      Lorem lorem ..
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                      Entry Level
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                      12 / 02 / 2023
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500 flex text-[30px] text-center text-[#FB7C19]">
                      <TbEdit className=" cursor-pointer" />
                      <RiDeleteBinLine className="ml-5 cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
