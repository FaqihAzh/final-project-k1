import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ColorPalettePage from "./pages/ColorPalettePage";
import UserLayout from "./Layout/UserLayout";
import RegisterPage from "./pages/RegisterPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminKelolaKelas } from "./pages/admin/AdminKelolaKelas";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayoutWithOutlet />}>
            <Route index element={<ColorPalettePage />} />
            {/* Buat yang pake layout header footer biasa bisa di taruh disini routenya */}
          </Route>
          {/* Buat Layout Admin Nanti Disini */}
          {/* admin */}
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminkelolakelas" element={<AdminKelolaKelas />} />
          {/* admin */}
          <Route path="/register" element={<RegisterPage />} />
       
          {/* Buat yg gapake layout samsek bisa di taruh disini, ex: login, regist etc */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

const UserLayoutWithOutlet = () => {
  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};

export default App;
