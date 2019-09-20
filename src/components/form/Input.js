import React from "react";

export default ({ label, value, onChangeHandler, id, disabledHandler }) => {
  return (
    <div className="col-md-9">
      <div className="form-group">
        <label>{label || ""}</label>
        <input
          disabled={disabledHandler || false}
          onChange={
            onChangeHandler ||
            (() => {
              console.log("no change handler send");
            })
          }
          type="text"
          className="form-control"
          id={id}
          value={value || ""}
        />
      </div>
    </div>
  );
};
