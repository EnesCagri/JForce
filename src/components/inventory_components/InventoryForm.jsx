import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InventoryService from "../../services/InventoryService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from "../custom_components/TextInput";
import DropDownInput from "../custom_components/DropDownInput";
import { Button } from "flowbite-react";
import { InventoryStatus, InventoryType } from "../../services/data";

const InventoryForm = () => {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(null);
  const [lastOwner, setLastOwner] = useState("");
  const [currentOwner, setCurrentOwner] = useState("");

  const navigate = useNavigate();

  const saveInventory = (e) => {
    e.preventDefault();

    let inventory = {
      type: type,
      brand: brand,
      model: model,
      status: status,
      date: date,
      lastOwner: lastOwner,
      currentOwner: currentOwner,
    };

    InventoryService.createInventory(inventory)
      .then((res) => {
        navigate("/inventories");
      })
      .catch((error) => {
        alert("HATA: Envanter eklenemedi!");
      });
  };

  const cancel = () => {
    navigate("/inventories");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 ">
            <h3 className="text-center bg-gray-800 text-white py-2 inline-block">
              Envanter Ekle
            </h3>
            <div className="card-body">
              <form onSubmit={saveInventory}>
                <DropDownInput
                  label={"Envanter Tipi"}
                  name={"type"}
                  value={type}
                  func={setType}
                  options={[
                    "Envanter Tipi Seçiniz",
                    ...Object.values(InventoryType),
                  ]}
                />

                <TextInput
                  label={"Marka"}
                  placeholder={"Marka giriniz"}
                  name={"Envanter Markası"}
                  func={setBrand}
                  value={brand}
                  maxLength={"25"}
                />

                <TextInput
                  label={"Model"}
                  placeholder={"Envanter Modeli"}
                  name={"model"}
                  func={setModel}
                  value={model}
                  maxLength={"25"}
                />

                <DropDownInput
                  label={"Envanter Statüsü"}
                  name={"status"}
                  value={status}
                  func={setStatus}
                  options={[
                    "Envanter Statüsü",
                    ...Object.values(InventoryStatus),
                  ]}
                />

                <div className="form-group">
                  <label htmlFor="date">Alınış Tarihi:</label>
                  <br></br>
                  <DatePicker
                    id="date"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    required
                    placeholderText="Alınış Tarihi"
                  />
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

export default InventoryForm;
