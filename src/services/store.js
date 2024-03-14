import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/Auth";
import reminderSlice from "./reducers/Reminder";
const store = configureStore({
  reducer: {
    auth: authSlice,
    remind: reminderSlice,
  },
});
export default store;
