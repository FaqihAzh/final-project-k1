import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
// import RegisterPage from "./pages/RegisterPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminKelolaKelas } from "./pages/admin/AdminKelolaKelas";
import UserAuthLayout from "./Layout/UserAuthLayout";
import ColorPalettePage from "./pages/ColorPalettePage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import LoginPage from "./pages/Auth/LoginPage";
import OtpPage from "./pages/Auth/OtpPage";
import { AccountPage } from "./pages/AccountPage";
import { ModalDelete } from "./components/ModalDelete";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayoutWithOutlet />}>
            <Route index element={<ColorPalettePage />} />
          </Route>

          {/* Buat Layout Admin Nanti Disini */}
          {/* admin */}
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminkelolakelas" element={<AdminKelolaKelas />} />
          <Route path="/adminkelolakelas/:id" element={<ModalDelete/>} />
          {/* <Route path="/delete/:id" element={<ModalDelete/>}/> */}
        

          {/* admin */}
          <Route path="/register" element={<RegisterPage />} />
       
          {/* Buat yg gapake layout samsek bisa di taruh disini, ex: login, regist etc */}
          <Route path="/account" element={<AccountPage/>}/>
          <Route element={<AuthLayoutWithOutlet />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/reset/password" element={<ResetPasswordPage />} />
            <Route path="/forgot/password" element={<ForgotPasswordPage />} />
          </Route>
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

const AuthLayoutWithOutlet = () => {
  return (
    <UserAuthLayout>
      <Outlet />
    </UserAuthLayout>
  );
};

export default App;
