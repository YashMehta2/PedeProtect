// Import any necessary libraries for making HTTP requests
import axios from "axios";

// Define your array with placeholder values for now
export let Mokdata = [
  {
    id: "Cracked",
    label: "Cracked",
    value: null, // Placeholder value
    color: "hsl(11, 70%, 50%)",
    apiUrl: "http://127.0.0.1:8000/cracked", // API URL for Scala
  },
  {
    id: "Broken",
    label: "Broken",
    value: null, // Placeholder value
    color: "hsl(97, 70%, 50%)",
    apiUrl: "http://127.0.0.1:8000/broken", // API URL for PHP
  },
  {
    id: "Proper",
    label: "Proper",
    value: null, // Placeholder value
    color: "hsl(250, 70%, 50%)",
    apiUrl: "http://127.0.0.1:8000/proper", // API URL for Stylus
  },
];

// Function to fetch data from the API and update Mokdata
async function fetchDataAndUpdate() {
  try {
    for (const item of Mokdata) {
      const response = await axios.get(item.apiUrl);
      item.value = response.data.length;
    }
    // Trigger UI update after fetching data
    updateUI();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to update UI with the latest data
function updateUI() {
  // Update UI code here
  // For example, if you're using React, you would set state here
}

// Call the function to fetch data and update Mokdata initially
fetchDataAndUpdate();

// Set interval to fetch data and update UI every 5 seconds (adjust as needed)
setInterval(fetchDataAndUpdate, 5000);
