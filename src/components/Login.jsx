import React, { useState } from "react";
import TextInput from "./TextInput";
import logo from "../assets/logo.svg";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserRole }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginRequirements = {
      userName: userName,
      password: password,
    };

    UserService.getAuth(loginRequirements)
      .then((response) => {
        const user = response.data;
        if (user) {
          console.log("User role:", user.userName);
          setUserRole(user.role);
          localStorage.setItem("userRole", user.role);
          navigate("/");
        } else {
          console.error("Authentication failed: Invalid User");
        }
      })
      .catch((error) => {
        console.error("Authentication failed:", error);
      });
  };

  return (
    <div className="flex  w-full items-center justify-center  bg-cover bg-no-repeat">
      <div className="rounded-xl bg-cyan-900 sm:w-[600px]  bg-opacity-60 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src={logo} width="300px" alt="" />
            <h1 className="text-gray-600 font-thin">İnsan Kaynakları</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4 text-lg">
              <TextInput
                label={"Kullanıcı Adı"}
                placeholder={"Kullanıcı Adı giriniz"}
                name={"username"}
                func={setUserName}
                value={userName}
                maxLength="50"
              />
            </div>

            <div className="mb-4 text-lg">
              <TextInput
                label={"Parola"}
                placeholder={"Parola giriniz"}
                name={"password"}
                func={setPassword}
                value={password}
                maxLength="50"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-[10px] bg-blue-400 bg-opacity-50 px-10 py-2 w-full text-white shadow-xl backdrop-blur-lg  duration-300 hover:bg-red-600 tranform hover:scale-110 transition-all"
              >
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
