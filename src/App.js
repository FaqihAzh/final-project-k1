import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
// import RegisterPage from "./pages/RegisterPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminKelolaKelas } from "./pages/admin/AdminKelolaKelas";
import UserAuthLayout from "./Layout/UserAuthLayout";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

import OtpPage from "./pages/Auth/OtpPage";
import { AccountPage } from "./pages/AccountPage";
import { ModalDelete } from "./components/ModalDelete";
import MyCoursePage from "./pages/Course/MyCoursePage";
import AllCoursePage from "./pages/Course/AllCoursePage";
import HomePage from "./pages/HomePage";
import {
  IsLogOutProtected,
  IsLoginProtected,
} from "./components/Auth/Protected";
import PaymentSuccessPage from "./pages/Course/PaymentSuccessPage";
import NotificationPage from "./pages/NotificationPage";
import PaymentPage from "./pages/Course/PaymentPage";

import CourseDetailsPage from "./pages/Course/CourseDetailsPage";
import CheckEmailPage from "./pages/Auth/CheckEmailPage";
import Courses from "./components/Courses";
import SearchResultsPage from "./pages/Course/SearchResultsPage";
import ResetSuccessPage from "./pages/Auth/ResetSuccessPage";
import LoginPage from "./pages/Auth/LoginPage";
import { AdminPromo } from "./pages/admin/AdminPromo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayoutWithOutlet />}>
            <Route index element={<HomePage />} />
            <Route
              path="/my/course"
              element={
                <IsLogOutProtected>
                  <MyCoursePage />
                </IsLogOutProtected>
              }
            />
            <Route
              path="/payment"
              element={
                <IsLogOutProtected>
                  <PaymentPage />
                </IsLogOutProtected>
              }
            />
            <Route
              path="/payment/success"
              element={
                <IsLogOutProtected>
                  <PaymentSuccessPage />
                </IsLogOutProtected>
              }
            />
            <Route
              path="/course/detail/:id"
              element={
                <IsLogOutProtected>
                  <CourseDetailsPage />
                </IsLogOutProtected>
              }
            />

            <Route path="/all/course" element={<AllCoursePage />} />
            <Route path="/course/category/:id" element={<Courses />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/notification" element={<NotificationPage />} />
          </Route>

          {/* admin */}
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminkelolakelas" element={<AdminKelolaKelas />} />
          <Route path="/adminpromo" element={<AdminPromo />} />
        
          {/* <Route path="/delete/:id" element={<ModalDelete/>}/> */}
        

          {/* admin */}
          <Route path="/register" element={<RegisterPage />} />
       
          {/* Buat yg gapake layout samsek bisa di taruh disini, ex: login, regist etc */}
          <Route path="/account" element={<AccountPage/>}/>

          <Route element={<AuthLayoutWithOutlet />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/forgot/password" element={<ForgotPasswordPage />} />
            <Route path="/check/email" element={<CheckEmailPage />} />
            <Route
              path="/api/v1/auth/reset-password"
              element={<ResetPasswordPage />}
            />
            <Route
              path="/reset/password/success"
              element={<ResetSuccessPage />}
            />
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
    <IsLoginProtected>
      <UserAuthLayout>
        <Outlet />
      </UserAuthLayout>
    </IsLoginProtected>
  );
};

export default App;
