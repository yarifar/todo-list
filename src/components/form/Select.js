import React from "react";

export default ({ label, onChangeHandler, options, isDisabled }) => {
  return (
    <div className="row">
      <div className="col-md-6 col-xs-12"></div>
      <div className="col-md-6 col-xs-12">
        <div className="form-group">
          <label>{label}</label>
          <select
            disabled={isDisabled || false}
            defaultValue=""
            onChange={onChangeHandler}
            className="form-control"
            id="sel1"
          >
            <option value="">Select the person</option>;
            {options &&
              options.map(option => {
                return <option key={option.name}>{option.name}</option>;
              })}
          </select>
        </div>
      </div>
    </div>
  );
};
