import React, { useContext } from "react";
import { AlertContext } from "./../context/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className='container'>
        <div className={`alert alert-` + alert.type}>{alert.message}</div>
      </div>
    )
  );
};

export default Alert;
