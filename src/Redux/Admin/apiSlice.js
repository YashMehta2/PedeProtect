import { createSlice } from "@reduxjs/toolkit";
import {
  getAdmins,
  deleteAdmins,
  getAdminById,
  addAdmins,
  updateAdmins,
} from "./apiAction";

const initialState = {
  loading: false,
  error: null,
  success: null,
};

const adminapiSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    clearSuccessMessage: (state) => {
      state.success = null; // null to clear the success message
    },
  },
  extraReducers: (builder) => {
    /*if i am using api, any action i want like on loading,finished,failed, i can define whereas reducers are used if i want to set counter on button click */
    builder
      .addCase(getAdmins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(getAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addAdmins.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(addAdmins.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteAdmins.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(deleteAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getAdminById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminById.fulfilled, (state, action) => {
        state.loading = true;
        state.success = action.payload;
      })
      .addCase(getAdminById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateAdmins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(updateAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSuccessMessage } = adminapiSlice.actions;
export default adminapiSlice.reducer;
