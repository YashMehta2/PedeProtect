import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineNoAccounts } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";

function Count({ activeAdminsCount, notAdminsCount, total }) {
  const Counts = [
    {
      icon: <MdOutlineAccountCircle />,
      name: "Active Admins",
      count: activeAdminsCount,
      color: "#5DBB63",
    },
    {
      icon: <MdOutlineNoAccounts />,
      name: "InActive Admins",
      count: notAdminsCount,
      color: "#ED2939",
    },
    {
      icon: <MdSupervisorAccount />,
      name: "Total Admins",
      count: total,
      color: "#ffd331",
    },
  ];
  return (
    <>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ marginBottom: "2%" }}
      >
        {Counts.map((index, key) => (
          <div
            className="col-md-3 col-lg-3 col-xl-3 admincount"
            style={{ borderColor: `${index.color}` }}
          >
            <div style={{ display: "flex", textAlign: "center" }} key={key}>
              <div
                style={{
                  fontSize: "40px",
                  color: `${index.color}`,
                }}
              >
                {index.icon}
              </div>
              <div className="position">
                <h3>{index.name}</h3>
                <h3>{index.count}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Count;
