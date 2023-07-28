import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import UserService from "../../services/UserService";
import DataTable from "../custom_components/DataTable";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [refreshList, setRefreshList] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addUser = () => {
    navigate("/add-user");
  };

  const editUser = (id) => {
    navigate(`/update-user/${id}`);
  };

  const deleteUser = (id) => {
    UserService.deleteUser(id).then((res) => {
      setRefreshList(true);
    });
  };

  const viewUser = (id) => {
    navigate(`/view-user/${id}`);
  };

  const filterUsers = (users, searchQuery) => {
    const searchTerms = searchQuery.toLowerCase().split(" ");

    if (searchTerms.length === 0) {
      return users;
    }

    return users.filter((user) => {
      return searchTerms.every((term) => {
        const searchTerm = term.trim();

        return (
          user.role.toLowerCase().includes(searchTerm) ||
          user.userName.toLowerCase().toString().includes(searchTerm)
        );
      });
    });
  };

  useEffect(() => {
    UserService.getUsers().then((res) => {
      setUsers(res.data);
      setRefreshList(false);
    });
  }, [refreshList]);

  const headers = ["ID", "Kullanıcı Adı", "Kullanıcı Rolü"];
  const fields = ["id", "userName", "role"];

  const actions = [
    {
      actionFunction: viewUser,
      label: "Görüntüle",
      buttonStyle: "success",
    },
    {
      actionFunction: editUser,
      label: "Güncelle",
      buttonStyle: "warning",
    },
    {
      actionFunction: deleteUser,
      label: "Kaldır",
      buttonStyle: "failure",
    },
  ];

  return (
    <div>
      <h2 className="text-center mt-6 mb-4">Kullanıcılar Listesi</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addUser}>
          Yeni Kullanıcı Ekle
        </button>
      </div>

      <Form>
        <InputGroup className="my-3">
          <Form.Control
            onChange={handleSearch}
            placeholder="Envanterlerde Ara ()"
            value={search}
          />
        </InputGroup>
      </Form>

      <div className="row">
        <DataTable
          headers={headers}
          fields={fields}
          data={users}
          actions={actions}
          filter={filterUsers}
          query={search}
        />
      </div>
    </div>
  );
};

export default UserList;
