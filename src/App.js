import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ColorPalettePage from "./pages/ColorPalettePage";
import UserLayout from "./Layout/UserLayout";

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
          <Route path="/login" element={<ColorPalettePage />} />
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
