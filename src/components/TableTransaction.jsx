import React, { useState } from "react";
import { useFetchDataTransaction } from "../services/admin/get-all-transactions";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {ForwardIcon} from "@heroicons/react/24/outline"
import {BackwardIcon} from "@heroicons/react/24/outline"

export const TableTransaction = () => {
  const [page, setPage] = useState(1)
  const { data: fetchData } = useFetchDataTransaction({
    page: page,  
    limit: 12,
  });
  const dataTransaction = fetchData?.data?.transactions;

  return (
    <div>
      <div className="font-sans-Poppins">
        <div className=" my-1 flex justify-between items-center px-[0.5rem] md:px-[2rem]  ">
          <h2 className="font-bold text-[1.2rem]">Transaction</h2>
          
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">Category</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">
                  Mode Pembayaran
                </th>
                <th className="py-2 px-4 border-b text-left">Tanggal bayar</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(dataTransaction) ? (
                dataTransaction.map((value) => (
                  <tr
                    key={value.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 space-y-[0.8rem]"
                  >
                    <td className="py-2 px-4 border-b">{value.id}</td>
                    <td className="py-2 px-4 border-b">
                      {value.course?.category?.name_categories}
                    </td>
                    <td
                      className={`py-2 px-4 border-b ${
                        value.status === "paid"
                          ? "text-light-green-500"
                          : "text-yellow-600"
                      }`}
                    >
                      {value.status}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {value.payment_type !== null ? value.payment_type : "---"}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {value.transaction_time !== null
                        ? new Date(value.transaction_time)
                            .toISOString()
                            .slice(0, 10)
                        : "---"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Tidak ada data transaksi</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10">
      <button onClick={() => {page > 1 && setPage(page - 1)}}>
                <BackwardIcon className="w-[2rem]" />
              </button>
              <h2>{page}</h2>
              <button onClick={() => {setPage(page + 1)}}>
                <ForwardIcon className="w-[2rem]" />
              </button>
      </div>
    </div>
  );
};
