import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import InventoryService from "../../services/InventoryService";
import { InventoryStatus } from "../../services/data";

const EmployeeInventory = () => {
  const [inventories, setInventories] = useState([]);
  const [availableInventories, setAvailableInventories] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getAllInventories(id).then((res) => {
      setInventories(res.data);
    });

    InventoryService.getAvailableInventories().then((res) => {
      setAvailableInventories(
        res.data.filter(
<<<<<<< HEAD
          (inventory) => inventory.status !== InventoryStatus.USING.label
=======
          (inventory) => inventory.status !== InventoryStatus.USING
>>>>>>> f3bd58c72ddc1afb64ecf399f329c302b670708d
        )
      );
    });

    setRefreshList(false);
  }, [id, refreshList]);

  const Back = () => {
    navigate("/employees");
  };

  const assignInventory = (inventoryId) => {
    EmployeeService.addInventoryToEmployee(id, inventoryId).then(() =>
      setRefreshList(true)
    );
  };

  const discardInventory = (inventoryId) => {
    EmployeeService.discardInventoryFromEmployee(id, inventoryId).then(() =>
      setRefreshList(true)
    );
  };

  const viewInventory = (inventoryId) => {
    navigate(`/view-inventory/${inventoryId}`);
  };

  return (
    <div>
      <div className="card col-md-8 offset-md-2">
        <h3 className="text-center bg-gray-800 text-white py-2">
          Çalışan Envanter Bilgisi
        </h3>
        <div className="card-body">
          <div className="mx-4 mt-4">
            <div className="row">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Seri No</th>
                      <th className="text-center">Envanter Tipi</th>
                      <th className="text-center">Marka</th>
                      <th className="text-center">Model</th>
                      <th className="text-center">Tarih</th>
                      <th className="text-center">Statü</th>
                      <th className="text-center">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventories.map((inventory) => (
                      <tr key={inventory.id}>
                        <td className="text-center">{inventory.id}</td>
                        <td className="text-center">{inventory.type}</td>
                        <td className="text-center">{inventory.brand}</td>
                        <td className="text-center">{inventory.model}</td>
                        <td className="text-center">{inventory.date}</td>
                        <td className="text-center">{inventory.status}</td>
                        <td className="text-center">
                          <div className="btn-group gap-2">
                            <button
                              className="btn btn-info text-white rounded"
                              onClick={() => viewInventory(inventory.id)}
                            >
                              Görüntüle
                            </button>
                            <button
                              className="btn btn-danger text-white rounded"
                              onClick={() => discardInventory(inventory.id)}
                            >
                              Kaldır
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center bg-gray-800 text-white py-2">
          Uygun Envanterler
        </h3>

        <div className="mx-4 mt-4">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th className="text-center">Seri No</th>
                    <th className="text-center">Envanter Tipi</th>
                    <th className="text-center">Marka</th>
                    <th className="text-center">Model</th>
                    <th className="text-center">Tarih</th>
                    <th className="text-center">Statü</th>
                    <th className="text-center">İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {availableInventories.map((fInventory) => (
                    <tr key={fInventory.id}>
                      <td className="text-center">{fInventory.id}</td>
                      <td className="text-center">{fInventory.type}</td>
                      <td className="text-center">{fInventory.brand}</td>
                      <td className="text-center">{fInventory.model}</td>
                      <td className="text-center">{fInventory.date}</td>
                      <td className="text-center">{fInventory.status}</td>
                      <td className="text-center">
                        <div className="btn-group gap-2">
                          <button
                            className="btn btn-info text-white rounded"
                            onClick={() => {
                              assignInventory(fInventory.id);
                            }}
                          >
                            Personele Ver
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 my-3">
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

export default EmployeeInventory;
