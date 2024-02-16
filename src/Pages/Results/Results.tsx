import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Results() {
  return <>
  
  <div className="overflow-x-auto">
      <Table className="border-separate  border-spacing-1 ">
        <TableHead className="text-left text-[#FFFFFF]">
          <TableHeadCell className="rounded-s-lg bg-[#0D1321] px-2 font-semibold">Title</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold ">Group name</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold">No.of persons in group</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold">Participants</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold">Date</TableHeadCell>
          <TableHeadCell className="col-span-2 bg-[#0D1321]  rounded-e-lg" ></TableHeadCell>
        </TableHead>
        
        <TableBody className="divide-y divide-black ">
          <TableRow className="bg-black">
            <TableCell className=" bg-white  py-2">
            Assembly language
            </TableCell>
            <TableCell className=" bg-white py-2 " >Group 1</TableCell>
            <TableCell className=" bg-white py-2" >23 persons</TableCell>
            <TableCell className=" bg-white py-2" >20 participants</TableCell>
            <TableCell className=" bg-white py-2" >
            12 / 02 / 2023
            </TableCell>
            <TableCell className="bg-white  py-2" >
            <button type="button" className="text-black bg-[#C5D86D] font-bold rounded-full  px-5 py-1 text-center">View</button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-black">
            <TableCell className=" bg-white py-2">
            Assembly language
            </TableCell>
            <TableCell className=" bg-white py-2 " >Group 1</TableCell>
            <TableCell className=" bg-white py-2" >23 persons</TableCell>
            <TableCell className=" bg-white py-2" >20 participants</TableCell>
            <TableCell className=" bg-white py-2" >
            12 / 02 / 2023
            </TableCell>
            <TableCell className="bg-white  py-2" >
            <button type="button" className="text-black bg-[#C5D86D] font-bold rounded-full  px-5 py-1 text-center">View</button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-black">
            <TableCell className=" bg-white py-2">
            Assembly language
            </TableCell>
            <TableCell className=" bg-white py-2 " >Group 1</TableCell>
            <TableCell className=" bg-white py-2" >23 persons</TableCell>
            <TableCell className=" bg-white py-2" >20 participants</TableCell>
            <TableCell className=" bg-white py-2" >
            12 / 02 / 2023
            </TableCell>
            <TableCell className="bg-white  py-2" >
            <button type="button" className="text-black bg-[#C5D86D] font-bold rounded-full  px-5 py-1 text-center">View</button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-black">
            <TableCell className=" bg-white py-2">
            Assembly language
            </TableCell>
            <TableCell className=" bg-white py-2 " >Group 1</TableCell>
            <TableCell className=" bg-white py-2" >23 persons</TableCell>
            <TableCell className=" bg-white py-2" >20 participants</TableCell>
            <TableCell className=" bg-white py-2" >
            12 / 02 / 2023
            </TableCell>
            <TableCell className="bg-white  py-2" >
            <button type="button" className="text-black bg-[#C5D86D] font-bold rounded-full  px-5 py-1 text-center">View</button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-black">
            <TableCell className=" bg-white py-2">
            Assembly language
            </TableCell>
            <TableCell className=" bg-white py-2 " >Group 1</TableCell>
            <TableCell className=" bg-white py-2" >23 persons</TableCell>
            <TableCell className=" bg-white py-2" >20 participants</TableCell>
            <TableCell className=" bg-white py-2" >
            12 / 02 / 2023
            </TableCell>
            <TableCell className="bg-white  py-2" >
            <button type="button" className="text-black bg-[#C5D86D] font-bold rounded-full  px-5 py-1 text-center">View</button>
            </TableCell>
          </TableRow>

         

         

        </TableBody>
      </Table>
    </div>
  
  
  
  
  </>
}
