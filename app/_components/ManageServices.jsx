"use client";

import { Table, Select, Switch ,Button,message } from "antd";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const ManageServices= ()=>{
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
const [services,setServices] = useState([]);

useEffect(()=>{
    const fetchServices =async () =>{
    

const response = await axios.get(`${baseUrl}/service/getServices`);
console.log(response.data);
if (response.data.success){
    setServices(response.data.services);
}
    }
    fetchServices();
},[])

    const dataSource = services.map(service => ({
        _id:service._id,
        title : service.title , 
        body:service.body
    }));
const columns = [
      {
            title: "Action",
            dataIndex: "action",
            align: "center",
            render: (text, record) => (
                <div>
                <Button type="primary" danger style={{marginLeft:"5px"}} onClick={()=>deleteUniversity(record._id)}>Delete</Button>

              <Link href={`/editUniversity/?id=${record._id}`}>
                <Button type="primary">Edit</Button>
              </Link> 


                </div>
            ),
          },
    
    {
        title :"body",
        dataIndex:"body",
        align:"center"
    },
    {
        title : "Title",
        dataIndex:"title",
        align:"center"
    }
    
]
return (
    <>
    <Table
    columns={columns}
    dataSource={dataSource}
    rowKey="_id"
    />
    </>
)

}
export default ManageServices;
