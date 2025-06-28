"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ManageServices from "../_components/ManageServices";
const AdminDashboard = ()=>{
    const [key,setKey]=useState("manageServices");
    return (
        <>
              <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => k && setKey(k)}
        className="mb-3 custom-tabs"
        justify
      >
                <Tab
          eventKey="manageServices"
          title="Manage Services"

        >
            <ManageServices/>
            </Tab>  
      </Tabs>
      <div className="my-10 -mt-0 pt-24 max-lg:w-[75rem] max-lg:mr-6 flex-1">

  <div className="container-fluid">

    </div>
  </div>
  </>
    );
}
export default AdminDashboard;