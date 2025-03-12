// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

// const rootReducer = combineReducers({});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const Store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(Store);

import { configureStore } from "@reduxjs/toolkit";
import adminapiReducer from "./Admin/apiSlice";
// Import other reducers if you have multiple slices

const Store = configureStore({
  reducer: {
    admins: adminapiReducer,
    // Add other slices here if you have more
  },
});

export default Store;
