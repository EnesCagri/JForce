import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../services/UserService";
import TextInput from "./TextInput";
import DropDownInput from "./DropDownInput";
import { Button } from "flowbite-react";

const UserUpdate = () => {
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPasword] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    UserService.getUserById(id).then((res) => {
      const user = res.data;

      setRole(user.role);
      setUserName(user.userName);
      setPasword(user.password);
    });
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();

    const updatedUser = {
      role: role,
      userName: userName,
      password: password,
    };

    UserService.updateUser(updatedUser, id).then(() => {
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
              Kullanıcıyı Güncelle
            </h3>
            <div className="card-body">
              <form onSubmit={updateUser}>
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

export default UserUpdate;
