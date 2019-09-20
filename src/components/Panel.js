import React from "react";
import PersonIcon from "./PersonIcon";
import TaskIcon from "./TaskIcon";

export default ({
  title,
  list,
  onPersonRemoveHandler,
  onPersonTaskStatusToggle,
  onPersonTaskRemove
}) => {
  return (
    <div className="p-3 w-100">
      <div className="panel panel-warning w-100">
        <div
          style={{ backgroundColor: "#f7a52b" }}
          className="panel-heading d-flex justify-content-between align-items-center p-3"
        >
          <span>
            <PersonIcon />
            <strong className="px-3">{title}</strong>
          </span>
          <button
            onClick={() => {
              onPersonRemoveHandler(title);
            }}
            className="btn btn-danger"
          >
            &times; Remove
          </button>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {list.length ? (
              list.map(item => {
                return (
                  <li
                    key={item.name}
                    className="list-group-item d-flex justify-content-between align-items-center p-3d"
                  >
                    <span>
                      <TaskIcon />
                      <strong className="px-3">{item.name}</strong>
                    </span>
                    <span>
                      <button
                        onClick={() => {
                          onPersonTaskStatusToggle(title, item.name);
                        }}
                        className={`btn btn-sm mx-3 ${
                          item.isDone ? "btn-success" : "btn-warning"
                        }`}
                      >
                        {item.isDone ? "Done" : "Not Done"}
                      </button>
                      <button
                        onClick={() => {
                          onPersonTaskRemove(title, item.name);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        &times; Remove
                      </button>
                    </span>
                  </li>
                );
              })
            ) : (
              <div className="caption mx-auto p-3" style={{ color: "grey" }}>
                No task is inserted for this person
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
