import React from 'react';
import { DeleteCourseAct } from '../redux/actions/Admin/DeleteCourse';
import { useDispatch } from 'react-redux';
import {ArchiveBoxXMarkIcon} from "@heroicons/react/24/solid"
export const ModalDelete = ({ setDeleteModal, idCourse}) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(DeleteCourseAct(idCourse))
  }

  const handleCancel = () => {
 
    setDeleteModal(false);
  };

  const handleContinue = () => {
    handleDelete()
    setDeleteModal(false);
    // window.location.reload();
  };

  

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div className="bg-white w-[30rem] p-6 rounded shadow-md relative z-50">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleCancel}
          >
            X
          </button>
        </div>
        <div className="title mt-4 border text-center">
          <h1 className="text-lg font-bold">Hapus Kelas</h1>
        </div>
        <div className="body mt-4 border max-h-[25rem] overflow-auto p-2">
        <div className=" flex justify-center items-center">
        <ArchiveBoxXMarkIcon className='w-[3rem] text-red-400'/>
          </div>
        </div>
        <div className="footer mt-6 flex justify-center">
          <button
            className="text-gray-500 hover:text-gray-700 mr-4"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    
    </div>
  );
};
