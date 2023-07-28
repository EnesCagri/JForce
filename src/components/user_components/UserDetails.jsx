import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";
import InfoCard from "../custom_components/InfoCard";

const USerDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUserById(id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  const Back = () => {
    navigate("/admin");
  };

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center bg-gray-800 text-white py-2">
          Kullanıcı Bilgileri
        </h3>
        <div className="card-body">
          <div className="mx-8 mt-4">
            <InfoCard title={"ID: "} content={user.id} />
            <InfoCard title={"Kullanıcı Adı: "} content={user.userName} />
            <InfoCard title={"Şifre: "} content={user.password} />
            <InfoCard title={"Kullanıcı Rolü: "} content={user.role} />
          </div>

          <div className="row">
            <div className="col-md-12 mt-4">
              <button className="btn btn-danger w-full" onClick={Back}>
                Geri
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USerDetails;
