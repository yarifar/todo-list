import React from "react";

export default ({ children }) => {
  return (
    <div className="row" style={{ backgroundColor: "#EEE", marginBottom: 20 }}>
      <nav
        className="navbar navbar-inverse"
        style={{ backgroundColor: "#EEE" }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">
              {children}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
