
import { LoadingSpinner } from "@/Components";
import { ResultsData } from "@/Redux/Featuers/Results/ResultSlice";
import UseActionGet from "@/Utils/Hooks/UseActionGit";

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Results() {
const [ResData, setResData] = useState([])
const [loading, setLoading] = useState(false)



  const AllResults=UseActionGet(ResultsData);
  const fetchData = async() => { 
    setLoading(true)
        const data= await AllResults()
        setResData(data?.data);
        setLoading(false)
      }
      const arr:any=[]
      const ele=ResData.map((ele,index) => { return arr.push(ele?.quiz);
       })

console.log(arr);

      

   
   
useEffect(() => {
 fetchData()
}, [])





  return <>
    {!loading? 
    <>
   <div className="p-5 rounded-lg   border-[#00000033] border-solid border-2">
  <div className="overflow-x-auto">
      <Table className="border-separate  border-spacing-px ">
      <caption className=" py-3 text-lg font-semibold text-left  text-gray-900 bg-white">
      Completed Quizzes
          </caption>
        <TableHead className="text-left text-[#FFFFFF]">
          <TableHeadCell className="rounded-s-lg bg-[#0D1321] px-2 font-semibold">Title</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold ">Group name</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold">No.of persons in group</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold">Participants</TableHeadCell>
          <TableHeadCell className="bg-[#0D1321]  px-2 font-semibold">Date</TableHeadCell>
          <TableHeadCell className="col-span-2 bg-[#0D1321]  rounded-e-lg" ></TableHeadCell>
        </TableHead>
        
        <TableBody className="divide-y divide-black ">

          {arr.map((res,index)=>(
          <TableRow key={index} className="bg-black text-black ">
            <TableCell className=" bg-white  py-2">
              {res?.title}
            </TableCell>
            <TableCell className=" bg-white py-2 " >{res?.difficulty}</TableCell>
            <TableCell className=" bg-white py-2" >{res?.score_per_question}</TableCell>
            <TableCell className=" bg-white py-2" >20 participants</TableCell>
            <TableCell className=" bg-white py-2" >
              {moment(res?.schadule).format("Do MMM YY")}
            </TableCell>
            <TableCell className="bg-white  py-2" >
              <Link to={'/dashboard/results-final'}>
            <button type="button" className="text-black bg-[#C5D86D] font-bold rounded-full  px-5 py-1 text-center">View</button>
              </Link>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
    </div>
    </>
      :<LoadingSpinner/>
    }
  </>
}