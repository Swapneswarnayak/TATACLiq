import { createSlice } from "@reduxjs/toolkit";

var initialData = {
  users: [],
};

// const userReducer = (storeData = initialData, action) => {
//   switch (action.type) {
//     case "USERS": {
//       return {
//         ...storeData,
//         users: action.payload,
//       };
//     }
//     default: {
//       return storeData;
//     }
//   }
// };

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
