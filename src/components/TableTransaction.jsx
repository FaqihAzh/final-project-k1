import React from "react";
import { useFetchDataTransaction } from "../services/admin/get-all-transactions";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const TableTransaction = () => {
  const { data: fetchData } = useFetchDataTransaction();
  const dataTransaction = fetchData?.data;
  console.log(dataTransaction, "fetchData Tran");

  return (
    <div>
      <div className="font-sans-Poppins">
        <div className=" my-1 flex justify-between items-center px-[0.5rem] md:px-[2rem]  ">
          <h2 className="font-bold text-[1.2rem]">Transaction</h2>
          {/* <div className="flex space-x-3">
            <div className="relative flex items-center">
              <input
                type="text"
                className="border border-[#FFC27A] rounded-3xl outline-none pl-4 pr-10 py-2 w-[10rem]"
                placeholder="Search..."
              />
              <MagnifyingGlassIcon className="absolute right-3 w-[1rem] top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div> */}
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
              {dataTransaction?.map((value) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
