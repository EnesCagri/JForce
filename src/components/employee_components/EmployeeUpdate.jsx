import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from "../custom_components/TextInput";
import DropDownInput from "../custom_components/DropDownInput";
import { Button } from "flowbite-react";
import {
  mapLabelToEnumValue,
  Department,
  Gender,
  GraduationStatus,
  MartialStatus,
  Position,
  WorkingStatus,
} from "../../services/data";
import FileChooser from "../custom_components/FileChooser";
import CustomDatePicker from "../custom_components/CustomDatePicker";

const EmployeeUpdate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tckn, setTckn] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [graduatedStatus, setGraduatedStatus] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [department, setDepartment] = useState("");
  const [field, setField] = useState("");
  const [picture, setPicture] = useState("");
  const [enteranceDate, setEnteranceDate] = useState(null);
  const [enteranceDepartment, setEnteranceDepartment] = useState("");
  const [enteranceMission, setEnteranceMission] = useState("");
  const [leaveReason, setLeaveReason] = useState("");
  const [leaveDate, setLeaveDate] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      const employee = res.data;

      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setTckn(employee.tckn);
      setBirthdate(new Date(employee.birthDate));
      setGender(mapLabelToEnumValue(employee.gender, Gender));
      setMartialStatus(
        mapLabelToEnumValue(employee.martialStatus, MartialStatus)
      );
      setGraduatedStatus(
        mapLabelToEnumValue(employee.graduationStatus, GraduationStatus)
      );
      setDepartment(mapLabelToEnumValue(employee.department, Department));
      setField(mapLabelToEnumValue(employee.mission, Position));
      setPicture(employee.profilePic);
      setEnteranceDate(new Date(employee.enteranceDate));
      setEnteranceDepartment(
        mapLabelToEnumValue(employee.enteranceDepartment, Department)
      );
      setEnteranceMission(
        mapLabelToEnumValue(employee.enteranceMission, Position)
      );
      setLeaveReason(employee.leaveReason);
      setLeaveDate(employee.leaveDate);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthdate,
      gender: gender,
      martialStatus: martialStatus,
      graduationStatus: graduatedStatus,
      workingStatus: WorkingStatus.WORKING.value,
      department: department,
      mission: field,
      profilePic: picture,
      tckn: tckn,
      enteranceDate: enteranceDate,
      enteranceMission: enteranceMission,
      enteranceDepartment: enteranceDepartment,
      leaveReason: "",
      leaveDate: null,
    };

    EmployeeService.updateEmployee(updatedEmployee, id)
      .then(() => {
        navigate("/employees");
      })
      .catch((error) => {
        alert("HATA: Çalışan Güncellenemedi!");
      });
  };

  const cancel = () => {
    navigate("/employees");
  };

  const handleTcknChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 11);
    setTckn(input);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 ">
            <h3 className="text-center bg-gray-800 text-white py-2 inline-block">
              Çalışanı Güncelle
            </h3>
            <div className="card-body">
              <form onSubmit={updateEmployee}>
                <TextInput
                  label={"Ad"}
                  placeholder={"Adınızı giriniz"}
                  name={"firstName"}
                  func={setFirstName}
                  value={firstName}
                  maxLength={"50"}
                />

                <TextInput
                  label={"Soyad"}
                  placeholder={"Soyadınızı giriniz"}
                  name={"lastName"}
                  func={setLastName}
                  value={lastName}
                  maxLength={"50"}
                />

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    placeholder=" "
                    name="tckn"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    value={tckn}
                    type="text"
                    inputMode="numeric"
                    required
                    minLength={11}
                    maxLength={11}
                    onChange={handleTcknChange}
                  />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    TC No:
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-2 pb-2">
                  <CustomDatePicker
                    label={"birthdate"}
                    value={birthdate}
                    placeholder={"Doğum tarihi"}
                    func={setBirthdate}
                    minDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 60)
                      )
                    }
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 18)
                      )
                    }
                  />

                  <CustomDatePicker
                    label={"enteranceDate"}
                    value={enteranceDate}
                    placeholder={"İşe Giriş Tarihi"}
                    func={setEnteranceDate}
                    minDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 10)
                      )
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pb-2">
                  <DropDownInput
                    label={"Cinsiyet"}
                    name={"gender"}
                    value={gender}
                    func={setGender}
                    options={[
                      { value: "", label: "Cinsiyet Seçiniz" },
                      ...Object.values(Gender),
                    ]}
                  />

                  <DropDownInput
                    label={"Medeni Durum"}
                    name={"marital_status"}
                    value={martialStatus}
                    func={setMartialStatus}
                    options={[
                      { value: "", label: "Medeni Hal Seçiniz" },
                      ...Object.values(MartialStatus),
                    ]}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pb-2">
                  <DropDownInput
                    label={"Mezuniyet Durumu"}
                    name={"graduation_status"}
                    value={graduatedStatus}
                    func={setGraduatedStatus}
                    options={[
                      { value: "", label: "Mezuniyet Durumu Seçiniz" },
                      ...Object.values(GraduationStatus),
                    ]}
                  />

                  <DropDownInput
                    label={"Departman"}
                    name={"department"}
                    value={department}
                    func={setDepartment}
                    options={[
                      { value: "", label: "Departman Seçiniz" },
                      ...Object.values(Department),
                    ]}
                  />
                </div>

                <DropDownInput
                  label={"Görev"}
                  name={"mission"}
                  value={field}
                  func={setField}
                  options={[
                    { value: "", label: "Görev Seçiniz" },
                    ...Object.values(Position),
                  ]}
                />

                <FileChooser setImage={setPicture} />
                <div>
                  <img src={picture} alt="" />
                </div>

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

export default EmployeeUpdate;
