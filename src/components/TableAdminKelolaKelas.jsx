import React, { useEffect, useState } from "react";
import { useFetchDataCourses } from "../services/admin/get-courses";
import { ModalAddCourse } from "./ModalAddCourse ";
import { ModalDelete } from "./ModalDelete";
import {ForwardIcon} from "@heroicons/react/24/outline"
import {BackwardIcon} from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux";
import { DeleteCourseAct } from "../redux/actions/Admin/DeleteCourse";
import { ModalUpdate } from "./ModalUpdate";
import { UpdateCourseACT } from "../redux/actions/Admin/UpdateCourse";

export const TableAdminKelolaKelas = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDelete, setmodalDelete] = useState(false);
  const [modalUpdate, setmodalUpdate] = useState(false)
  const [idCorse, setidCorse] = useState()
  const [Page, setPage] = useState(1);
  const dispatch = useDispatch()
  const { data: fetchData } = useFetchDataCourses({
    page: Page,
    limit: 10,
  });



  const handleDelete = () => {
    dispatch(DeleteCourseAct(datarender.id))
  }
  
  

  
  console.log(fetchData?.data?.courses, "inidata");
  const datarender = fetchData?.data?.courses;
  

  console.log(idCorse, "id")
  return (
    <div className="">
      <div className=" my-1 flex justify-between items-center px-[2rem]">
      <h2 className="font-bold text-[1.2rem]">Kelola Kelas</h2>
        <button
          className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Tambah Course
        </button>
    
        {modalOpen && <ModalAddCourse setOpenModal={setModalOpen} />}
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Category</th>
              <th className="py-2 px-4 border-b text-left">Author</th>
              <th className="py-2 px-4 border-b text-left">Title</th>
              <th className="py-2 px-4 border-b text-left">Level</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
              <th className="py-2 px-4 border-b text-left">Ratings</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {datarender?.map((value) => (
              <tr
                key={value.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 space-y-[0.8rem]"
              >
                <td className="py-2 px-4 border-b">{value.id}</td>
                <td className="py-2 px-4 border-b">{value.category_id}</td>
                <td className="py-2 px-4 border-b">{value.author}</td>
                <td className="py-2 px-4 border-b">{value.title}</td>
                <td className="py-2 px-4 border-b">{value.level}</td>
                <td className="py-2 px-4 border-b">{value.price}</td>
                <td className="py-2 px-4 border-b">{value.ratings}</td>
                <td className="py-2 px-4 border-b space-x-3 flex">
                  <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={()=> {
                   dispatch(UpdateCourseACT(value.id))
                    setidCorse(parseInt(value.id))
                    setmodalUpdate(true)
                  }}
                  >
                    Ubah
                  </button>
                  <button 
                   onClick=
                   { () =>{
                     setmodalDelete(true);
                     setidCorse(parseInt(value.id))
                   }
                   }
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            {modalDelete && <ModalDelete setDeleteModal={setmodalDelete}  idCourse={idCorse} Delete={handleDelete}/>}
            {modalUpdate && <ModalUpdate setUpdateModal={setmodalUpdate}  idCourse={idCorse}/>}
      </div>
      <div className=" flex justify-center items-center space-x-10">
        <button  onClick={() => {Page > 1 && setPage(Page -1)}}><BackwardIcon className="w-[2rem]"/></button>
        <h2>{Page}</h2>
        <button onClick={() => {setPage(Page + 1)}} ><ForwardIcon className="w-[2rem]"/></button>
      </div>
    </div>
  );
};
