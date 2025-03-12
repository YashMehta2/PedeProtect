import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Crackedproblem() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/cracked";
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setData(response);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const Columns = [
    {
      dataIndex: "city",
      key: "city",
      title: "City",
    },
    {
      dataIndex: "country",
      key: "country",
      title: "Country",
    },
    {
      dataIndex: "postcode",
      key: "postcode",
      title: "Postcode",
    },
    {
      dataIndex: "state",
      key: "state",
      title: "State",
    },
    {
      dataIndex: "neighbourhood",
      key: "neighbourhood",
      title: "Neighbourhood",
    },
    {
      dataIndex: "suburb",
      key: "suburb",
      title: "Suburb",
    },
  ];

  return (
    <>
      <div className="admincontainer">
        <Table
          columns={Columns}
          dataSource={data?.data}
          pagination={{ defaultPageSize: 10 }}
        />
      </div>
    </>
  );
}

export default Crackedproblem;
