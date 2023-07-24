import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeUpdate from "./components/EmployeeUpdate";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InventoryList from "./components/InventoryList";
import InventoryDetails from "./components/InventoryDetails";
import InventoryForm from "./components/InventoryForm";
import InventoryUpdate from "./components/InventoryUpdate";
import EmployeeInventory from "./components/EmployeeInventory";
import EmployeeResign from "./components/EmployeeResign";
import AdminElement from "./components/private_routes/AdminElement";
import IMElement from "./components/private_routes/IMElement";
import HRElement from "./components/private_routes/HRElement";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import UserUpdate from "./components/UserUpdate";
import Login from "./components/Login";
import { React, useState, useEffect } from "react";
import UserElement from "./components/private_routes/UserElement";
import OldEmployees from "./components/OldEmployees";

export const USER_ROLES = {
  AD: "Admin",
  HR: "İnsan Kaynakları",
  IM: "Envanter Yöneticisi",
};

function App() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole");
    setUserRole(storedUserRole);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white to-gray-200">
      <Router>
        <Header setUserRole={setUserRole} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <UserElement role={userRole}>
                  <Home />
                </UserElement>
              }
            />
            <Route
              path="/login"
              element={<Login setUserRole={setUserRole} />}
            />
            <Route
              path="/admin"
              element={
                <AdminElement role={userRole}>
                  <UserList />
                </AdminElement>
              }
            />
            <Route
              path="/add-user"
              element={
                <AdminElement role={userRole}>
                  <UserForm />
                </AdminElement>
              }
            />
            <Route
              path="/view-user/:id"
              element={
                <AdminElement role={userRole}>
                  <UserDetails />
                </AdminElement>
              }
            />
            <Route
              path="/update-user/:id"
              element={
                <AdminElement role={userRole}>
                  <UserUpdate />
                </AdminElement>
              }
            />

            <Route
              path="/employees"
              element={
                <HRElement role={userRole}>
                  <EmployeeList />
                </HRElement>
              }
            />
            <Route
              path="/add-employee"
              element={
                <HRElement role={userRole}>
                  <EmployeeForm />
                </HRElement>
              }
            />
            <Route
              path="/update-employee/:id"
              element={
                <HRElement role={userRole}>
                  <EmployeeUpdate />
                </HRElement>
              }
            />
            <Route
              path="/view-employee/:id"
              element={
                <HRElement role={userRole}>
                  <EmployeeDetails />
                </HRElement>
              }
            />
            <Route
              path="/view-employee-inventory/:id"
              element={
                <HRElement role={userRole}>
                  <EmployeeInventory />
                </HRElement>
              }
            />
            <Route
              path="/resign-employee/:id"
              element={
                <HRElement role={userRole}>
                  <EmployeeResign />
                </HRElement>
              }
            />
            <Route
              path="/old-employees"
              element={
                <HRElement role={userRole}>
                  <OldEmployees />
                </HRElement>
              }
            />
            <Route
              path="/inventories"
              element={
                <IMElement role={userRole}>
                  <InventoryList />
                </IMElement>
              }
            />
            <Route
              path="/add-inventory"
              element={
                <IMElement role={userRole}>
                  <InventoryForm />
                </IMElement>
              }
            />
            <Route
              path="/update-inventory/:id"
              element={
                <IMElement role={userRole}>
                  <InventoryUpdate />
                </IMElement>
              }
            />
            <Route
              path="/view-inventory/:id"
              element={
                <IMElement role={userRole}>
                  <InventoryDetails />
                </IMElement>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
