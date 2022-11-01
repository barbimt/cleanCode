import React, { useState } from "react";
// import { connect } from "react-redux";
import { useDispatch, useStore } from 'react-redux';


const App = () => {
	const store = useStore()

  //notificationsEnabled del reducer -> undefined
  console.log(store.getState());
  const dispatch = useDispatch()

  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const toggle = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const showNotificationToggle = () => {
    console.log("notification enabled en app:", notificationEnabled);

    dispatch({type: "SAVE_SETTINGS"}, {notificationsEnabled: notificationEnabled})

    notificationEnabled
      ? alert("Se ha guardado la selecciòn de activar las notificaciones")
      : alert("Se ha guardado la selecciòn de desactivar las notificaciones");
  };

  const getNotificationStatus = () => {
    let status = "";
    notificationEnabled ? (status = "Activas") : (status = "Inactivas");
    return status;
  };

  const buttonText = () => {
    let text = "";
    notificationEnabled
      ? (text = "Desactivar notificaciones")
      : (text = "Activar notificaciones");
    return text;
  };

  return (

      <div className="teste">
        <h1>
          ¿Desesa recibir notificaciones sobre la serie Rick y Morty en su
          email?
        </h1>
        <p>
          Status: <b>{getNotificationStatus()}</b>
        </p>
        <br />
        <button onClick={toggle}>{buttonText()}</button>
        <br />
        <br />
        <br />
        <button onClick={showNotificationToggle} className="sa">
          Guardar
        </button>
      </div>

  );
};

 export default App;

