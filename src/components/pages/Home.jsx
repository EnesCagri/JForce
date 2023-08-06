import React from "react";
import inventoryLogo from "../../assets/inventoryLogo.png";
import staffLogo from "../../assets/staffLogo.png";
import manager from "../../assets/manager.png";
import disk from "../../assets/disk.png";
import UserPanel from "../user_components/UserPanel";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center py-4 px-2 ">
      <UserPanel
        title={"Yönetici Paneli"}
        path={"/admin"}
        logo={manager}
        color={"#ff4757"}
      />
      <UserPanel
        title={"İnsan Kaynakları"}
        path={"/employees"}
        logo={staffLogo}
        color={"#f9ca24"}
      />
      <UserPanel
        title={"Envanter Müdürü"}
        path={"/inventories"}
        logo={inventoryLogo}
        color={"#2ed573"}
      />
      <UserPanel
        title={"Eski Çalışanlar"}
        path={"/old-employees"}
        logo={disk}
        color={"#0097e6"}
      />
    </div>
  );
};

export default Home;
