import React from "react";

export const Alert = (props) => {
  return (
    props.alert !== null && (
      <div className='container'>
        <div className={`alert alert-` + props.alert.type}>{props.alert.message}</div>
      </div>
    )
  );
};

export default Alert;
