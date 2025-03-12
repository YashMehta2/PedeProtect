import React, { useEffect, useState } from "react";
import location from "../Assests/Images/location.jpg";
import { notification } from "antd";
import { Flex, Input } from "antd";

function GetCurrentAddress({ prediction, name }) {
  const [add, setAdd] = useState("");
  const [predict, setPredict] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [edit, setedit] = useState(false);

  const handleedit = () => setedit(!edit);

  const { TextArea } = Input;
  useEffect(() => {
    setPredict(prediction);
  }, [prediction]);

  const handleSubmit = () => {
    const postData = {
      city: add.city,
      country: add.country,
      postcode: add.postcode,
      state: add.state,
      neighbourhood: add.neighbourhood,
      suburb: add.suburb,
      prediction: predict,
    };
    const ApiRRL =
      name === "Pathway"
        ? "http://127.0.0.1:8001/pathaddress"
        : "http://127.0.0.1:8000/address";
    fetch(ApiRRL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((result) => {
        setSubmitted(true);
        setPredict("");
        notification.success({
          duration: 10,
          message: "Data sent Successfully",
        });
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };

  useEffect(() => {
    if (!submitted) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;

        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setAdd(data.address));
      });
    }
  }, [submitted]);

  return (
    <>
      <div>
        <div className="row" style={{ marginTop: "30px" }}>
          {/* <h1 style={{ textAlign: "center" }}>Image Location Data</h1> */}
          <div className="col-sm-6">
            <form>
              <div style={{ display: "none", flexDirection: "column" }}>
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  Prediction
                </label>
                <input
                  type="text"
                  name="prediction"
                  value={predict}
                  disabled
                  style={{
                    marginTop: "5px",
                    marginBottom: "8px",
                    textTransform: "capitalize",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  City
                </label>
                {edit ? (
                  <input
                    type="text"
                    name="city"
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                    value={add.city}
                    onChange={(e) => setAdd({ ...add, city: e.target.value })}
                  />
                ) : (
                  <input
                    type="text"
                    name="city"
                    value={add.city}
                    disabled
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  Country
                </label>
                {edit ? (
                  <input
                    type="text"
                    name="country"
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                    value={add.country}
                    onChange={(e) =>
                      setAdd({ ...add, country: e.target.value })
                    }
                  />
                ) : (
                  <input
                    type="text"
                    name="country"
                    value={add.country}
                    disabled
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  Post Code
                </label>
                {edit ? (
                  <input
                    type="text"
                    name="postcode"
                    value={add.postcode}
                    onChange={(e) =>
                      setAdd({ ...add, postcode: e.target.value })
                    }
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                ) : (
                  <input
                    type="text"
                    name="postcode"
                    value={add.postcode}
                    disabled
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  State
                </label>
                {edit ? (
                  <input
                    type="text"
                    name="state"
                    value={add.state}
                    onChange={(e) => setAdd({ ...add, state: e.target.value })}
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                ) : (
                  <input
                    type="text"
                    name="state"
                    value={add.state}
                    disabled
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  Neighbourhood
                </label>
                {edit ? (
                  <input
                    type="text"
                    name="neighbourhood"
                    value={add.neighbourhood}
                    onChange={(e) =>
                      setAdd({ ...add, neighbourhood: e.target.value })
                    }
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                ) : (
                  <input
                    type="text"
                    name="neighbourhood"
                    value={add.neighbourhood}
                    disabled
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  Suburb
                </label>
                {edit ? (
                  <input
                    type="text"
                    name="suburb"
                    value={add.suburb}
                    onChange={(e) => setAdd({ ...add, suburb: e.target.value })}
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                ) : (
                  <input
                    type="text"
                    name="suburb"
                    value={add.suburb}
                    disabled
                    style={{ marginTop: "5px", marginBottom: "8px" }}
                  />
                )}
              </div>
            </form>
          </div>

          <div className="col-sm-6">
            <div style={{ height: "100%", width: "100%" }}>
              <img src={location} alt="map" height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
        className="formbutton"
      >
        <button onClick={handleedit}>{edit ? "Cancel" : "Edit"}</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "35%",
          backgroundColor: "#f2f2f2",
          borderRadius: "15px",
          padding: "5px",
        }}
        className="note"
      >
        <p>
          <span style={{ fontWeight: "700" }}>Please Note</span>: If the address
          displayed in the form does not match your captured location, please
          click on the above edit button to update your address accordingly.
        </p>
      </div>
    </>
  );
}

export default GetCurrentAddress;
