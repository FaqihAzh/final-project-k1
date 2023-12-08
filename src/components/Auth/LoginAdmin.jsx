import React, { useState } from "react";
import Button from "../Button";
import FormInput from "../Form";
import FadeIn from "../FadeIn";
import { UseAdminLogin } from "../../services/auth/admin-login";
import axios from "axios";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
export const LoginAdmin = () => {
  const [inputid, setinputid] = useState("");
  const [InputPassword, setInputPassword] = useState("");

  const { mutate: AdminLogin, isSuccess, isError } = UseAdminLogin();

  if (isSuccess) {
    console.log("berhasil");
  } else if (isError) {
    console.log("gagal");
  }

  const handleinputId = (e) => {
    setinputid(e.target.value);
  };
  const hanleinputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  console.log(inputid);
  console.log(InputPassword);
  // console.log("sdasd")
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      login();
    }
  };
  const login = () => {
    AdminLogin({
      idAdmin: inputid,
      password: InputPassword,
    });
    // Loginn();
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-96 h-72 border border-gray-300 p-4 flex flex-col items-center space-y-7">
        <FadeIn delay={0.3} direction="down" fullWidth className=" text-center">
          <h1 className="text-xl font-bold">Login</h1>
        </FadeIn>
        <div className="flex flex-col w-full">
          <FadeIn delay={0.3} direction="down" fullWidth>
            <FormInput
              placeholder="Masukan IdAdmin"
              label="idAdmin"
              id="idAdmin"
              value={inputid}
              onChange={handleinputId}
              type="text"
              text="black"
            />
          </FadeIn>
        </div>
        <div className="flex flex-col w-full">
          <FadeIn delay={0.3} direction="up" fullWidth>
            <FormInput
              placeholder="Masukan Password"
              label="Password"
              id="adminPassword"
              value={InputPassword}
              onChange={hanleinputPassword}
              onKeyPress={handleEnterPress} 
              type="password"
              text="black"
              tabIndex="0" 
            />
          </FadeIn>
        </div>
        <FadeIn delay={0.3} direction="up" fullWidth>
          <Button isOrangeGradient className="w-full" onClick={login}>
            Masuk
          </Button>
        </FadeIn>
      </div>
    </div>
  );
};

export default LoginAdmin;
