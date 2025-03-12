import React, { useEffect, useState } from "react";

import { Button, Spin, Table, notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Count from "../../Components/Count";

function AdminTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [activeAdminsCount, setActiveAdminsCount] = useState(0);
  const [notAdminsCount, setNotAdminsCount] = useState(0);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/users";

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setData(response);

          const admins = response.data.filter((item) => item.is_active);
          setActiveAdminsCount(admins.length);
          setNotAdminsCount(response.data.length - admins.length);
          setTotal(admins.length + (response.data.length - admins.length));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [total, activeAdminsCount, notAdminsCount]);

  const HandleEdit = (record) => {
    navigate(`/admin/edit/${record.id}`);
  };

  const HandleDelete = (record) => {
    const apiUrl = `http://127.0.0.1:8000/users/{users_id}?user_id=${record.id}`;

    axios
      .delete(apiUrl)
      .then((response) => {
        notification.warning({
          duration: 10,
          message: response?.data,
        });

        const updatedApiUrl = "http://127.0.0.1:8000/users";
        axios
          .get(updatedApiUrl)
          .then((updatedResponse) => {
            setData(updatedResponse);
            const admins = response.data.filter((item) => item.is_active);
            setActiveAdminsCount(admins.length);
            setNotAdminsCount(response.data.length - admins.length);
            setTotal(admins.length + (response.data.length - admins.length));
          })
          .catch((updatedError) => {
            console.error("Error fetching updated data:", updatedError);
          });
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const Columns = [
    {
      dataIndex: "email",
      key: "email",
      title: "Email",
    },
    {
      dataIndex: "name",
      key: "name",
      title: "Name",
    },
    {
      key: "is_active",
      title: "Status",
      render: (_, record) => (
        <div>
          <span
            style={{
              backgroundColor: record?.is_active ? "#5DBB63" : "#ED2939",
              padding: "8px",
              borderRadius: "15px",
            }}
          >
            {record?.is_active ? "Admin" : "Not Admin"}
          </span>
        </div>
      ),
    },
    {
      key: "Action",
      title: "Actions",
      render: (_, record) =>
        record?.is_active ? (
          <div
            style={{
              fontSize: "17px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button
              style={{
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#fbf4cd",
              }}
              onClick={() => {
                HandleDelete(record);
              }}
            >
              <i className="bi bi-trash"></i>
            </button>
            <button
              style={{
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#fbf4cd",
              }}
              onClick={() => {
                HandleEdit(record);
              }}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
          </div>
        ) : (
          <div style={{ textAlign: "center", fontWeight: "500" }}>
            Not an Admin Anymore
          </div>
        ),
    },
  ];

  return (
    <>
      <head>
        <title>Table</title>
      </head>
      <div className="admincontainer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h1>Admin</h1>
          <Button
            style={{
              backgroundColor: "#ffd331",
              border: "none",
              color: "black",
              fontWeight: "500",
            }}
            onClick={() => {
              navigate("/admin/add");
            }}
          >
            Add Admin
          </Button>
        </div>

        <Count
          activeAdminsCount={activeAdminsCount}
          notAdminsCount={notAdminsCount}
          total={total}
        />
        {data.status === 200 ? (
          <Table
            columns={Columns}
            dataSource={data?.data}
            pagination={{ defaultPageSize: 10 }}
          />
        ) : (
          <div style={{ textAlign: "center", fontSize: "40px" }}>
            Loading...
            <Spin />
          </div>
        )}
      </div>
    </>
  );
}

export default AdminTable;
