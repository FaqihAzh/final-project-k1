import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "Notif Slice",
  initialState: {
    notifications: [],
  },
  reducers: {
    updateNotif(state, action) {
      state.notifications = action.payload;
    },
  },
});

const notificationsReducer = notificationSlice.reducer;
const { updateNotif } = notificationSlice.actions;

export { updateNotif };
export default notificationsReducer;
