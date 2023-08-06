import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfoCard from "../custom_components/InfoCard";
import InventoryService from "../../services/InventoryService";

const InventoryDetails = () => {
  const [inventory, setInventory] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    InventoryService.getInventoryById(id).then((res) => {
      setInventory(res.data);
    });
  }, [id]);

  const Back = () => {
    navigate("/inventories");
  };

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center bg-gray-800 text-white py-2">
          Envanter Bilgileri
        </h3>
        <div className="card-body">
          <div className="mx-8 mt-4">
            <InfoCard title={"Seri No: "} content={inventory.id} />
            <InfoCard title={"Envanter Tipi: "} content={inventory.type} />
            <InfoCard title={"Marka: "} content={inventory.brand} />
            <InfoCard title={"Model: "} content={inventory.model} />
            <InfoCard title={"Alınış Tarihi: "} content={inventory.date} />
            <InfoCard title={"Statü: "} content={inventory.status} />
            <InfoCard title={"Teslim Alınan: "} content={inventory.lastOwner} />
            <InfoCard title={"Kullanan: "} content={inventory.currentOwner} />
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

export default InventoryDetails;
