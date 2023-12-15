import React from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { TablePromo } from "../../components/TablePromo";

export const AdminPromo = () => {
  return (
    <AdminLayout>
      <div className="">
        <TablePromo />
      </div>
    </AdminLayout>
  );
};
