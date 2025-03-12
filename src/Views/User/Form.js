// import React, { useState } from "react";
// import axios from "axios";
// import { Spin } from "antd";
// import GetCurrentAddress from "../../Components/Time";
// import { useParams } from "react-router-dom";

// const PredictionForm = ({ name }) => {
//   const [file, setFile] = useState(null);
//   const [prediction, setPrediction] = useState(null);
//   const [, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = async (event) => {
//     setPrediction(null);
//     setError(null);
//     setFile(event.target.files[0]);
//     await handleSubmit();
//   };

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("file", file);

//       const ApiRRL =
//         name === "Pathway"
//           ? "http://127.0.0.1:8001/footpredict"
//           : "http://127.0.0.1:8000/predict";
//       console.log("api", ApiRRL);
//       const response = await axios.post(ApiRRL, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setPrediction(response.data.prediction);
//       setError(null);
//     } catch (error) {
//       setError("An error occurred while making the prediction.");
//       setPrediction(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1>
//           {name === "Pathway" ? "Pathway Prediction" : "Manhole Prediction"}
//         </h1>
//         <input type="file" onChange={handleFileChange} />
//         {console.log(
//           "pre",
//           prediction === "proper"
//             ? "missing block"
//             : prediction === "missing block"
//             ? "proper"
//             : "obstruction"
//         )}
//         {/* <button
//           onClick={handleSubmit}
//           style={{
//             borderRadius: "5px",
//             backgroundColor: "#ffe172",
//             border: "none",
//             padding: "5px",
//           }}
//         >
//           Predict
//         </button> */}
//         {loading && (
//           <div style={{ textAlign: "left", fontSize: "40px" }}>
//             Loading...
//             <Spin />
//           </div>
//         )}
//         {/* <div style={{ marginTop: "20px" }}>
//           {prediction !== undefined ? (
//             <p>
//               Prediction:{" "}
//               <input
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "center",
//                   fontWeight: "500",
//                   borderRadius: "5px",
//                   border: "none",
//                 }}
//                 value={prediction}
//                 disabled
//               />
//             </p>
//           ) : (
//             <p>Error Fetching Prediction. Upload Another Image</p>
//           )}
//         </div> */}
//       </div>
//       <GetCurrentAddress prediction={prediction} name={name} />
//     </>
//   );
// };

// export default PredictionForm;

// src/components/ImageUpload.js

import React, { useState } from "react";
import axios from "axios";
import GetCurrentAddress from "../../Components/Time";

const PredictionForm = ({ name }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    await predict(file);
  };

  const predict = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const ApiRRL =
        name === "Pathway"
          ? "http://127.0.0.1:8001/footpredict"
          : "http://127.0.0.1:8000/predict";
      const response = await axios.post(ApiRRL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <h1>
          {name === "Pathway"
            ? "Reporting Issues on Pathway"
            : "Reporting Problems of Manhole Covers on Footpath"}
        </h1>
        {name === "Pathway" ? (
          <p>
            To ensure prompt resolution of pathway issues such as missing blocks
            or obstructions, please follow these steps: <br />
            <span style={{ fontWeight: "750" }}>1. Upload an Image:</span>{" "}
            Upload a clear image of the issue. This visual aid is essential for
            accurately assessing and understanding the reported concern. Ensure
            the image captures the problem comprehensively. <br />
            <span style={{ fontWeight: "750" }}>
              2. Enable your location:
            </span>{" "}
            Enable your location in order to promptly help us know where the
            issue is, if it is not the exact location, please edit the location
            and enter the correct one!
          </p>
        ) : (
          <p>
            To effectively report issues concerning manhole covers such as
            breakage or cracks, please adhere to the following steps: <br />
            <span style={{ fontWeight: "750" }}>1. Upload an Image:</span>{" "}
            Upload a clear image of the issue. This visual aid is essential for
            accurately assessing and understanding the reported concern. Ensure
            the image captures the problem comprehensively. <br />
            <span style={{ fontWeight: "750" }}>
              2. Enable your location:
            </span>{" "}
            Enable your location in order to promptly help us know where the
            issue is, if it is not the exact location, please edit the location
            and enter the correct one!
          </p>
        )}
        <input type="file" onChange={handleFileChange} />
        {/* {prediction && (
          <div>
            <h3>Prediction:</h3>
            <p>{prediction}</p>
          </div>
        )} */}
      </div>
      {console.log("kk", prediction)}
      <GetCurrentAddress prediction={prediction} name={name} />
    </>
  );
};
export default PredictionForm;
