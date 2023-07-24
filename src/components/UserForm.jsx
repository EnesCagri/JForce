import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import DropDownInput from "./DropDownInput";
import UserService from "../services/UserService";
import { Button } from "flowbite-react";

const UserForm = () => {
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPasword] = useState("");

  const navigate = useNavigate();

  const saveUser = (e) => {
    e.preventDefault();

    let user = {
      role: role,
      userName: userName,
      password: password,
    };

    UserService.createUser(user).then((res) => {
      navigate("/admin");
    });
  };

  const cancel = () => {
    navigate("/admin");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 ">
            <h3 className="text-center bg-gray-800 text-white py-2 inline-block">
              Kullanıcı Ekle
            </h3>
            <div className="card-body">
              <form onSubmit={saveUser}>
                <DropDownInput
                  label={"Kullanıcı Rolü"}
                  name={"role"}
                  value={role}
                  func={setRole}
                  options={["Rol", "İnsan Kaynakları", "Envanter Yöneticisi"]}
                />

                <TextInput
                  label={"Kullanıcı Adı"}
                  placeholder={"Kullanıcı Adı giriniz"}
                  name={"Kullanıcı Adı"}
                  func={setUserName}
                  value={userName}
                />

                <TextInput
                  label={"Şifre"}
                  placeholder={"Kullanıcı Şifresi"}
                  name={"şifre"}
                  func={setPasword}
                  value={password}
                />

                <div className="mt-10 flex justify-center gap-2">
                  <Button size="lg" type="submit">
                    Kaydet
                  </Button>
                  <Button size="lg" onClick={cancel} color="failure">
                    İptal
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
