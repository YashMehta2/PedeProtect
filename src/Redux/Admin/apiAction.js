import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";

export const addAdmins = createAsyncThunk("api/addAdmins", async (payload) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/users", payload.d);
    if (res?.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const getAdmins = createAsyncThunk("api/getAdmins", async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/users");

    if (res?.status === 200) {
      return res;
    }
  } catch (error) {
    console.log("error", error.message);
  }
});

export const deleteAdmins = createAsyncThunk(
  "api/deleteAdmins",
  async (record_id) => {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/users/{users_id}?user_id=${record_id}`
      );

      if (res?.status === 200) {
        notification.warning({
          duration: 10,
          message: res?.data,
        });
        console.log("delete_response", res?.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getAdminById = createAsyncThunk(
  "api/getAdminById",
  async (admin_id) => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/admins/${admin_id}`);
      if (res?.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const updateAdmins = createAsyncThunk(
  "api/updateAdmins",
  async (updatedAdmins) => {
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/admins/${updateAdmins?.admin_id}`,
        updatedAdmins
      );

      if (res?.status === 200) {
        notification.success({
          duration: 10,
          message: res.data?.message,
        });
        return res.data;
      }
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
);
