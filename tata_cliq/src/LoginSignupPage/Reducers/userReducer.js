import { createSlice } from "@reduxjs/toolkit";

var initialData = {
  users: [],
};

const userSlicer = createSlice({
  name: "Users",
  reducers: {
    setUsers(storeData, action) {
      storeData.users = action.payload;
    },
  },
  initialState: initialData,
});
export default userSlicer.reducer;
export const USER_ACTIONS = userSlicer.actions;
