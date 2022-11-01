const initState = {
  notificationsEnabled: false,
};

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_SETTINGS":
      console.log("reducer activo");
      return { ...state, notificationsEnabled: action.notificationsEnabled };

    default:
      return state;
  }
};

export default notificationReducer;
