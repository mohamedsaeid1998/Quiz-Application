import React from "react";
import "./ResultFinal.module.scss";
import { Table, TableHead, TableHeadCell } from "flowbite-react";
import { TableBody } from "flowbite-react";
import { TableRow } from "flowbite-react";
import { TableCell } from "flowbite-react";

const ResultFinal = () => {
  return (
    <>
    <div className="p-5 rounded-lg  md:w-[50%] border-[#00000033] border-solid border-2">
    <div className="overflow-x-auto">
        <Table className="border-separate  border-spacing-px ">
          <caption className=" py-3 text-lg font-semibold text-left  text-gray-900 bg-white">
          Results
          </caption>
          <TableHead className="text-left text-[#FFFFFF]">
            <TableHeadCell className="rounded-s-lg bg-[#0D1321] px-2 font-semibold">
              Student name
            </TableHeadCell>
            <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold ">
              Score
            </TableHeadCell>
            <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold">
              Average
            </TableHeadCell>
            <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold rounded-e-lg">
              Time submitted
            </TableHeadCell>
          </TableHead>

          <TableBody className="divide-y divide-black ">
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
            <TableRow className="bg-black text-black">
              <TableCell className=" bg-white  py-2">Jacob Hamuel</TableCell>
              <TableCell className=" bg-white py-2 ">16</TableCell>
              <TableCell className=" bg-white py-2">20</TableCell>
              <TableCell className=" bg-white py-2">09 : 00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    </>
  );
};

export default ResultFinal;