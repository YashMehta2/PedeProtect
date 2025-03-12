import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Line from "../Admin/Graph";
import { Mokdata as datas } from "../Admin/Data";
import { ResponsivePie } from "@nivo/pie";

function Allproblem() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/address";
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
    {
      key: "prediction",
      title: "Prediction",
      render: (_, record) => (
        <div
          style={{
            textTransform: "capitalize",
            backgroundColor:
              record?.prediction === "broken"
                ? "red"
                : record?.prediction === "cracked"
                ? "orange"
                : "green",
            padding: "5px",
            width: "60%",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          {record.prediction}
        </div>
      ),
    },
  ];

  //   const problems = [
  //     ["Element", "Density", { role: "style" }],
  //     ["Proper", , "#b87333"], // RGB value
  //     ["Cracked", 10.49, "silver"], // English color name
  //     ["Broken", 19.3, "gold"],
  //   ];
  return (
    <>
      <div className="linegraph">
        <ResponsivePie
          data={datas}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "Cracked",
              },
              id: "dots",
            },
            {
              match: {
                id: "Broken",
              },
              id: "dots",
            },
            {
              match: {
                id: "Proper",
              },
              id: "dots",
            },
          ]}
          legends={[
            {
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: -100,
              translateY: 0,
              itemsSpacing: 15,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "black",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <Table
        columns={Columns}
        dataSource={data?.data}
        pagination={{ defaultPageSize: 10 }}
      />
    </>
  );
}

export default Allproblem;
