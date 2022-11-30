var initialData = {
  users: [],
};

const userReducer = (storeData = initialData, action) => {
  switch (action.type) {
    case "USERS": {
      return {
        ...storeData,
        users: action.payload,
      };
    }
    default: {
      return storeData;
    }
  }
};

export default userReducer;
