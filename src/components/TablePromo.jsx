import React, { useState } from "react";
import { useDataPromo } from "../services/promo/getPromo";
import { ModalAddPromo } from "./ModalAddPromo";
import { ModalDeletePromo } from "./ModalDeletePromo";
import { ModalUpdatePromo } from "./ModalUpdatePromo";

//

export const TablePromo = () => {
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalDelete, setmodalDelete] = useState(false);
  const [modalUpdate, setmodalUpdate] = useState(false);
  const [idPromo, setidPromo] = useState();

  const { data: fetchData } = useDataPromo();
  const dataPromo = fetchData?.data;
  return (
    <div className="">
      <div className=" my-1 flex justify-between items-center px-[2rem]">
        <h2 className="font-bold text-[1.2rem]">Kelola Promo</h2>
        <div className="flex space-x-3">
          <button
            className="bg-[#FFC27A] hover:bg-[#FFA337] text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setmodalAdd(true);
            }}
          >
            Tambah Promo
          </button>
        </div>

        {modalAdd && <ModalAddPromo setopenModal={setmodalAdd} />}
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 border-b text-left font-semibold">ID</th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Code Promo
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Discount
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Expires At
              </th>
              <th className="py-3 px-6 border-b text-left font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {dataPromo?.map((value) => (
              <tr
                key={value.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50"
              >
                <td className="py-4 px-6 border-b">{value.id}</td>
                <td className="py-4 px-6 border-b">{value.code_promo}</td>
                <td className="py-4 px-6 border-b">{value.discount}%</td>
                <td className="py-4 px-6 border-b">{new Date(value.expiresAt).toISOString().split('T')[0]}</td>


                <td className="py-4 px-6 border-b space-x-3 flex">
                  <button
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    onClick={() => {
                      setmodalUpdate(true);
                      setidPromo(parseInt(value.id));
                    }}
                  >
                    Ubah
                  </button>
                  <button
                    onClick={() => {
                      setmodalDelete(true);
                      setidPromo(parseInt(value.id));
                    }}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* {modalDelete && <ModalDelete setDeleteModal={setmodalDelete}  idCourse={idCorse} Delete={handleDelete}/>}
          {modalUpdate && <ModalUpdate setUpdateModal={setmodalUpdate}  idCourse={idCorse}/>} */}
        {modalDelete && (
          <ModalDeletePromo setdeleteModal={setmodalDelete} idPromo={idPromo} />
        )}
        {modalUpdate && (
          <ModalUpdatePromo setupdateModal={setmodalUpdate} idPromo={idPromo} />
        )}
      </div>
    </div>
  );
};
