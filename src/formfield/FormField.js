import React from "react";

const FormField = (props) => {
  console.log(props);
  return (
    <div>{props.juan}</div>
    // <div className="field">
    //   <label className="label">{props.label}</label>
    //   <div className="control">
    //     <input className="input" type="text" placeholder="e.g Alex Smith" />
    //   </div>
    // </div>
  );
};

export default FormField;