import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ColorPalettePage from "./pages/ColorPalettePage";
import UserLayout from "./Layout/UserLayout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import OtpUser from "./components/Auth/OtpUser";

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/otp" element={<OtpUser/>} />
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
