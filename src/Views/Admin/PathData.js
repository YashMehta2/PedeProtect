// Import any necessary libraries for making HTTP requests
import axios from "axios";

// Define your array with placeholder values for now
export let PathMokdata = [
  {
    id: "Missing Block",
    label: "Missing Block",
    value: null, // Placeholder value
    color: "hsl(346, 70%, 50%)",
    apiUrl: "http://127.0.0.1:8001/missing block", // API URL for PHP
  },
  {
    id: "Obstruction",
    label: "Obstruction",
    value: null, // Placeholder value
    color: "hsl(11, 70%, 50%)",
    apiUrl: "http://127.0.0.1:8001/obstruction", // API URL for Scala
  },
  {
    id: "Proper",
    label: "Proper",
    value: null, // Placeholder value
    color: "hsl(250, 70%, 50%)",
    apiUrl: "http://127.0.0.1:8001/pathproper", // API URL for Stylus
  },
];

// Function to fetch data from the API and update PathMokdata
async function fetchDataAndUpdate() {
  try {
    for (const item of PathMokdata) {
      const response = await axios.get(item.apiUrl);
      item.value = response.data.length;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data and update PathMokdata
fetchDataAndUpdate();

setInterval(fetchDataAndUpdate, 5000);
