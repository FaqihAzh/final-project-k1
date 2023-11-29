import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import UserAuthLayout from "./Layout/UserAuthLayout";
import ColorPalettePage from "./pages/ColorPalettePage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import LoginPage from "./pages/Auth/LoginPage";
import OtpPage from "./pages/Auth/OtpPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import NotificationPage from "./pages/NotificationPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayoutWithOutlet />}>
            <Route index element={<ColorPalettePage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="/notification" element={<NotificationPage />} />
          </Route>

          {/* Buat Layout Admin Nanti Disini */}

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
