import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { Form, InputGroup } from "react-bootstrap";
import DataTable from "../custom_components/DataTable";
import { WorkingStatus } from "../../services/data";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [refreshList, setRefreshList] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addEmployee = () => {
    navigate("/add-employee");
  };

  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const viewEmployeeInventory = (id) => {
    navigate(`/view-employee-inventory/${id}`);
  };

  const resignEmployee = (id) => {
    navigate(`/resign-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployeeById(id).then((res) => {
      setRefreshList(true);
    });
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  const filterEmployees = (employees, searchQuery) => {
    const searchTerms = searchQuery.toLowerCase().split(" ");

    if (searchTerms.length === 0) {
      return employees.filter(
<<<<<<< HEAD
        (employee) => employee.workingStatus === WorkingStatus.WORKING.label
=======
        (employee) => employee.workingStatus === WorkingStatus.WORKING
>>>>>>> f3bd58c72ddc1afb64ecf399f329c302b670708d
      );
    }

    return employees.filter((employee) => {
      return (
<<<<<<< HEAD
        employee.workingStatus === WorkingStatus.WORKING.label &&
=======
        employee.workingStatus === WorkingStatus.WORKING &&
>>>>>>> f3bd58c72ddc1afb64ecf399f329c302b670708d
        searchTerms.every((term) => {
          const searchTerm = term.trim();
          return (
            employee.firstName.toLowerCase().includes(searchTerm) ||
            employee.lastName.toLowerCase().includes(searchTerm) ||
            employee.tckn.toString().includes(searchTerm) ||
            employee.department.toLowerCase().includes(searchTerm) ||
            employee.mission.toLowerCase().includes(searchTerm)
          );
        })
      );
    });
  };

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
      setRefreshList(false);
    });
  }, [refreshList]);

  const headers = [
    "Sicil No",
    "Çalışan Adı",
    "Çalışan Soyadı",
    "Departman",
    "Görev",
  ];
  const fields = ["id", "firstName", "lastName", "department", "mission"];

  const actions = [
    {
      actionFunction: viewEmployee,
      label: "Görüntüle",
    },
    {
      actionFunction: editEmployee,
      label: "Güncelle",
      buttonStyle: "warning",
    },
    {
      actionFunction: viewEmployeeInventory,
      label: "Zimmetler",
      buttonStyle: "success",
    },
    {
      actionFunction: resignEmployee,
      label: "Ayrıl",
      buttonStyle: "dark",
    },
    {
      actionFunction: deleteEmployee,
      label: "Kaldır",
      buttonStyle: "failure",
    },
  ];

  return (
    <div>
      <h2 className="text-center mt-6 mb-4">Çalışanlar Listesi</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addEmployee}>
          Yeni Çalışan Ekle
        </button>
      </div>

      <Form>
        <InputGroup className="my-3">
          <Form.Control
            onChange={handleSearch}
            placeholder="Çalışanlarda Ara (Ad-soyad, TC no, departman)"
            value={search}
          />
        </InputGroup>
      </Form>

      <div className="row">
        <DataTable
          headers={headers}
          fields={fields}
          data={employees}
          actions={actions}
          filter={filterEmployees}
          query={search}
        />
      </div>

      <br />
    </div>
  );
};

export default EmployeeList;
