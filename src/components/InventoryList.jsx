import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InventoryService from "../services/InventoryService";
import { Form, InputGroup } from "react-bootstrap";
import DataTable from "./DataTable";

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const navigate = useNavigate();
  const [refreshList, setRefreshList] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addInventory = () => {
    navigate("/add-inventory");
  };

  const editInventory = (id) => {
    navigate(`/update-inventory/${id}`);
  };

  const deleteInventory = (id) => {
    InventoryService.deleteInventoryById(id).then((res) => {
      setRefreshList(true);
    });
  };

  const viewInventory = (id) => {
    navigate(`/view-inventory/${id}`);
  };

  const filterInventories = (inventories, searchQuery) => {
    const searchTerms = searchQuery.toLowerCase().split(" ");

    if (searchTerms.length === 0) {
      return inventories;
    }

    return inventories.filter((inventory) => {
      return searchTerms.every((term) => {
        const searchTerm = term.trim();

        return (
          inventory.brand.toLowerCase().includes(searchTerm) ||
          inventory.id.toString().includes(searchTerm) ||
          inventory.type.toLowerCase().includes(searchTerm)
        );
      });
    });
  };

  useEffect(() => {
    InventoryService.getInventories().then((res) => {
      setInventories(res.data);
      setRefreshList(false);
    });
  }, [refreshList]);

  const headers = [
    "Seri No",
    "Envanter Tipi",
    "Envanter Markası",
    "Envanter Statüsü",
  ];
  const fields = ["id", "type", "brand", "status"];

  const actions = [
    {
      actionFunction: viewInventory,
      label: "Görüntüle",
      buttonStyle: "success",
    },
    {
      actionFunction: editInventory,
      label: "Güncelle",
      buttonStyle: "warning",
    },
    {
      actionFunction: deleteInventory,
      label: "Kaldır",
      buttonStyle: "failure",
    },
  ];

  return (
    <div>
      <h2 className="text-center mt-6 mb-4">Envanter Listesi</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addInventory}>
          Yeni Envanter Ekle
        </button>
      </div>

      <Form>
        <InputGroup className="my-3">
          <Form.Control
            onChange={handleSearch}
            placeholder="Envanterlerde Ara (Tip, Marka, ID)"
            value={search}
          />
        </InputGroup>
      </Form>

      <div className="row">
        <DataTable
          headers={headers}
          fields={fields}
          data={inventories}
          actions={actions}
          filter={filterInventories}
          query={search}
        />
      </div>
    </div>
  );
};

export default InventoryList;
