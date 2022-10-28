import React, { useState } from "react";
import { connect } from "react-redux";

const App = () => {
  const [notificationEnabled, setNotificationEnabled ] = useState(false)

  // state = {
  //   n: false,
  // };

  // functionA = () => {
  //   this.setState({
  //     n: !this.state.n,
  //   });
  // };

  const toggle = () => {
    setNotificationEnabled(!notificationEnabled)
  }

  // functionB = () => {
  //   this.props.s(this.state);
  //   if (this.state.n) {
  //     alert("Se ha guardado la selecciòn de activar las notificaciones");
  //   } else {
  //     alert("Se ha guardado la selecciòn de desactivar las notificaciones");
  //   }
  // };

  const showNotificationToggle = () => {
    if (notificationEnabled) {
      alert("Se ha guardado la selecciòn de activar las notificaciones")
    } else {
      alert("Se ha guardado la selecciòn de desactivar las notificaciones");
    }
  }

  // functionC = () => {
  //   if (this.state.n) {
  //     return "Activas";
  //   } else {
  //     return "Inactivas";
  //   }
  // };
  const getNotificationStatus = () => {
    if (notificationEnabled) {
          return "Activas";
        } else {
          return "Inactivas";
        }
  }

  // functionD = () => {
  //   if (this.state.n) {
  //     return "Desactivar notificaciones";
  //   } else {
  //     return "Activar notificaciones";
  //   }
  // };

  const buttonText = () => {
    if (notificationEnabled) {
      return "Desactivar notificaciones";
    } else {
      return "Activar notificaciones";
    }
  }

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
  }


const state = (state) => {
  return {
    n: state.n,
  };
};

const mdtp = (dispatch) => {
  return {
    s: (ss) => dispatch({ type: "SAVE_SETTINGS", ss }),
  };
};

export default connect(state, mdtp)(App);
