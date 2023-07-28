import "./App.css";
import EmployeeDetails from "./components/employee_components/EmployeeDetails";
import EmployeeForm from "./components/employee_components/EmployeeForm";
import EmployeeList from "./components/employee_components/EmployeeList";
import EmployeeUpdate from "./components/employee_components/EmployeeUpdate";
import Home from "./components/pages/Home";
import Header from "./components/custom_components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InventoryList from "./components/inventory_components/InventoryList";
import InventoryDetails from "./components/inventory_components/InventoryDetails";
import InventoryForm from "./components/inventory_components/InventoryForm";
import InventoryUpdate from "./components/inventory_components/InventoryUpdate";
import EmployeeInventory from "./components/employee_components/EmployeeInventory";
import EmployeeResign from "./components/employee_components/EmployeeResign";
import AdminElement from "./components/private_routes/AdminElement";
import IMElement from "./components/private_routes/IMElement";
import HRElement from "./components/private_routes/HRElement";
import UserList from "./components/user_components/UserList";
import UserForm from "./components/user_components/UserForm";
import UserDetails from "./components/user_components/UserDetails";
import UserUpdate from "./components/user_components/UserUpdate";
import Login from "./components/pages/Login";
import { React, useState, useEffect } from "react";
import UserElement from "./components/private_routes/UserElement";
import OldEmployees from "./components/pages/OldEmployees";
import { UserRole } from "./services/data";

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
