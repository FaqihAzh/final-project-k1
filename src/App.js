import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
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
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import NotificationPage from "./pages/NotificationPage";
import PaymentPage from "./pages/PaymentPage";

import CourseDetailsPage from "./pages/CourseDetailsPage";
import CheckEmailPage from "./pages/CheckEmailPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayoutWithOutlet />}>
            <Route index element={<ColorPalettePage />} />
            {/* Buat yang pake layout header footer biasa bisa di taruh disini routenya */}
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/course/detail" element={<CourseDetailsPage />} />
          </Route>

          {/* Buat Layout Admin Nanti Disini */}
          {/* admin */}
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminkelolakelas" element={<AdminKelolaKelas />} />
          {/* admin */}
          <Route path="/register" element={<RegisterPage />} />
       
          {/* Buat yg gapake layout samsek bisa di taruh disini, ex: login, regist etc */}

          <Route element={<AuthLayoutWithOutlet />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/reset/password" element={<ResetPasswordPage />} />
            <Route path="/forgot/password" element={<ForgotPasswordPage />} />
            <Route path="/check/email" element={<CheckEmailPage />} />
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
