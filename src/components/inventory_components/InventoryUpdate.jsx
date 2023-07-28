import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InventoryService from "../../services/InventoryService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InventoryStatus, InventoryType } from "../../services/data";
import TextInput from "../custom_components/TextInput";
import DropDownInput from "../custom_components/DropDownInput";
import { Button } from "flowbite-react";

const InventoryUpdate = () => {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(null);
  const [lastOwner, setLastOwner] = useState("");
  const [currentOwner, setCurrentOwner] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    InventoryService.getInventoryById(id).then((res) => {
      const inventory = res.data;

      setType(inventory.type);
      setBrand(inventory.brand);
      setModel(inventory.model);
      setStatus(inventory.status);
      setLastOwner(inventory.lastOwner);
      setCurrentOwner(inventory.currentOwner);
    });
  }, [id]);

  const updateInventory = (e) => {
    e.preventDefault();

    const updatedInventory = {
      type: type,
      brand: brand,
      model: model,
      status: status,
      date: date,
      lastOwner: lastOwner,
      currentOwner: currentOwner,
    };

    InventoryService.updateInventory(updatedInventory, id)
      .then(() => {
        navigate("/inventories");
      })
      .catch((error) => {
        alert("HATA: Envanter güncellenemedi!");
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
              Envanter Güncelle
            </h3>
            <div className="card-body">
              <form onSubmit={updateInventory}>
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

                <div className="mt-10 flex justify-center">
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

export default InventoryUpdate;
