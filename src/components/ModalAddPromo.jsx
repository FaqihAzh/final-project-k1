import React, { useState } from "react";
import { usePostPromo } from "../services/promo/getPromo";

export const ModalAddPromo = ({ setopenModal }) => {
  const [codePromo, setcodePromo] = useState("");
  const [discount, setdiscount] = useState();
  const [expiresAt, setexpiresAt] = useState(new Date());

  const { mutate: PostPromo } = usePostPromo();

  const Post = () => {
    PostPromo({
      code_promo: codePromo,
      discount: parseInt(discount),
      expiresAt: expiresAt,
    });
  };
  const handleCancel = () => {
    setopenModal(false);
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
          <h1 className="text-lg font-bold">Tambah Promo</h1>
        </div>
        <div className="body mt-4 border max-h-[25rem] overflow-auto p-2">
          <div className="mb-4">
            <label
              htmlFor="codePromo"
              className="block text-sm font-medium text-gray-600"
            >
              Code Promo
            </label>
            <input
              type="text"
              id="codePromo"
              value={codePromo}
              onChange={(e) => setcodePromo(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="discount"
              className="block text-sm font-medium text-gray-600"
            >
              Discount
            </label>
            <input
              type="number"
              id="discount"
              value={discount}
              onChange={(e) => setdiscount(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expiresAt"
              className="block text-sm font-medium text-gray-600"
            >
              Expires At
            </label>
            <input
              type="date"
              id="expiresAt"
              value={expiresAt}
              onChange={(e) => setexpiresAt(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
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
            onClick={Post}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
