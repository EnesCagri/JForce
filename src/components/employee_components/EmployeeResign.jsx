import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from "../custom_components/TextInput";
import { Button } from "flowbite-react";
import CustomDatePicker from "../custom_components/CustomDatePicker";

const EmployeeResign = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [picture, setPicture] = useState("");
  const [tckn, setTckn] = useState("");
  const [department, setDepartment] = useState("");
  const [leaveReason, setLeaveReason] = useState("");
  const [leaveDate, setLeaveDate] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      const employee = res.data;

      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setPicture(employee.profilePic);
      setTckn(employee.tckn);
      setDepartment(employee.department);
    });
  }, [id]);

  const cancel = () => {
    navigate("/employees");
  };

  const resignEmployee = (e) => {
    e.preventDefault();
    const resignationData = {
      leaveReason: leaveReason,
      leaveDate: leaveDate,
    };

    EmployeeService.resignEmployee(id, resignationData)
      .then((res) => {
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 ">
            <h3 className="text-center bg-gray-800 text-white py-2 inline-block">
              Çalışanın İşini Sonlandır
            </h3>
            <div className="card-body">
              <form onSubmit={resignEmployee}>
                <div>
                  <h1 className="text-xl font-thin text-gray-800">
                    <span className="font-semibold">Ad Soyad: </span>
                    {firstName + " " + lastName}
                  </h1>
                  <h1 className="text-xl font-thin text-gray-800">
                    <span className="font-semibold">TC Kimlik No: </span>
                    {tckn}
                  </h1>
                  <h1 className="text-xl font-thin text-gray-800">
                    <span className="font-semibold">Görev: </span>
                    {department}
                  </h1>
                </div>

                <label
                  htmlFor="leaveReason"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Ayrılma Nedeni
                </label>
                <textarea
                  id="leaveReason"
                  rows="4"
                  className="block p-2.5 w-full text-sm  text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ayrılma nedeni yazınız..."
                  value={leaveReason}
                  onChange={(e) => setLeaveReason(e.target.value)}
                ></textarea>

                <CustomDatePicker
                  label={"leaveDate"}
                  placeholder={"Ayrılma Tarihi"}
                  value={leaveDate}
                  func={setLeaveDate}
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

export default EmployeeResign;
