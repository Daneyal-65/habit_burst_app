import { createSlice } from "@reduxjs/toolkit";

export const reminderSlice = createSlice({
  name: "remind",
  initialState: {
    value: "",
  },
  reducers: {
    set_Reminder_state: (state, action) => {
      const time = action.payload;
      if (time !== "") state.value = time;
    },
  },
});
export const { set_Reminder_state } = reminderSlice.actions;
export default reminderSlice.reducer;
