import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { WorkingStatus } from "../../services/data";
import DetailCard from "../custom_components/DetailCard";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  const back = () => {
    navigate("/employees");
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://getwallpapers.com/wallpaper/full/c/1/6/6346.jpg"
            alt="background"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover h-32 object-center"
            src={
              employee.profilePic
                ? employee.profilePic
                : "https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png"
            }
            alt="profliePic"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">
            {employee.firstName} {employee.lastName}{" "}
          </h2>
          <p className="text-gray-500 mb-0">{employee.mission}</p>
          <p className="text-gray-500 font-bold ">{employee.department}</p>
        </div>

        <div className="flex justify-center">
          <ul>
            <DetailCard label={"Sicil No"} value={employee.id} />
            <DetailCard label={"TC Kimlik No"} value={employee.tckn} />
            <DetailCard label={"Cinsiyet"} value={employee.gender} />
            <DetailCard label={"Doğum Tarihi"} value={employee.birthDate} />
            <DetailCard label={"Medeni Durum"} value={employee.martialStatus} />
            <DetailCard
              label={"Mezuniyet Durumu"}
              value={employee.graduationStatus}
            />

            <DetailCard
              label={"İşe giriş Tarihi"}
              value={employee.enteranceDate}
            />
            <DetailCard
              label={"İşe giriş Departmanı"}
              value={employee.enteranceDepartment}
            />
            <DetailCard
              label={"İşe giriş Görevi"}
              value={employee.enteranceMission}
            />

            <li>
              <span className="text-gray-800 font-semibold">
                Çalışma Durumu:{" "}
              </span>
              <span
                className={
                  employee.workingStatus === WorkingStatus.NOT_WORKING.label
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {employee.workingStatus}
              </span>
            </li>

            {employee.workingStatus === WorkingStatus.NOT_WORKING.label && (
              <li>
                <span className="text-gray-800 font-semibold">
                  {"İşten Ayrılma Tarihi: "}{" "}
                </span>
                <span className="text-gray-500 font-thin">
                  {employee.leaveDate}{" "}
                </span>
              </li>
            )}

            {employee.workingStatus === WorkingStatus.NOT_WORKING.label && (
              <li>
                <span className="text-gray-800 font-semibold">
                  {"Ayrılma Nedeni: "}{" "}
                </span>
                <p className="text-gray-500 font-thin">
                  {employee.leaveReason}{" "}
                </p>
              </li>
            )}
          </ul>
        </div>

        <div className="p-4 border-t mx-8 mt-2">
          <button
            onClick={back}
            className="w-full block mx-auto rounded-[10px] bg-gray-900 hover:shadow-lg font-semibold hover:bg-gray-800 transition duration-300 ease-in-out text-white px-6 py-2"
          >
            Geri
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
