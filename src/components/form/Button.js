import React from "react";

export default ({ onClickHandler, children, disabledHandler }) => {
  return (
    <div className="col-md-3">
      <button disabled={disabledHandler || false} onClick={onClickHandler} className="btn btn-primary mt-3">
        {children}
      </button>
    </div>
  );
};
