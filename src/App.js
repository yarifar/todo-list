import React, { Component } from "react";
import Nav from "./components/Nav";
import Input from "./components/form/Input";
import Select from "./components/form/Select";
import Button from "./components/form/Button";
import Panel from "./components/Panel";

class App extends Component {
  state = {
    person: "",
    task: "",
    selectedPersonName: "",
    persons: [
      // {name:"", tasks:[{name, isDone}]}
    ]
  };

  onPersonChangeHandler = e => {
    const person = e.target.value;
    this.setState({ person }, () => {
      // console.log(this.state.person);
    });
  };

  onTaskChangeHandler = e => {
    const task = e.target.value;
    this.setState({ task }, () => {
      // console.log(this.state.person);
    });
  };

  onPersonAddHandler = () => {
    const { persons, person } = this.state;
    this.setState(
      { persons: [...persons, { name: person, tasks: [] }] },
      () => {
        this.setState({ person: "" });
        console.log(this.state.persons);
      }
    );
  };

  onTaskAddHandler = () => {
    const { persons, selectedPersonName, task } = this.state;
    const newPersons = persons.map(person => {
      if (person.name === selectedPersonName) {
        person.tasks.push({ name: task, isDone: false });
        return person;
      }
      return person;
    });

    this.setState({ persons: newPersons }, () => {
      this.setState({ task: "" });
      console.log(this.state.persons);
    });
  };

  onSelectedPersonNameChangeHandler = e => {
    const selectedPersonName = e.target.value;
    this.setState({ selectedPersonName }, () => {
      console.log(this.state.selectedPersonName);
    });
  };

  getSelectedPersonTasks = () => {
    const { persons, selectedPersonName } = this.state;
    if (persons.length) {
      return persons.find(person => {
        return person.name === selectedPersonName;
      }).tasks;
    }
    return [];
  };

  onPersonRemoveHandler = personName => {
    const { persons } = this.state;
    const newPersons = persons.filter(person => {
      return person.name !== personName;
    });
    console.log(newPersons);
    this.setState({ selectedPersonName: "" }, () => {
      this.setState({ persons: newPersons });
    });
  };

  onPersonTaskStatusToggle = (personName, taskName) => {
    const { persons } = this.state;
    const person = persons.find(person => {
      return person.name === personName;
    });

    const newTasks = person.tasks.map(task => {
      if (task.name === taskName) {
        task.isDone = !task.isDone;
        return task;
      }
      return task;
    });

    this.setState({
      persons: [
        ...persons.filter(person => person.name !== personName),
        { name: personName, tasks: newTasks }
      ]
    });
  };

  onPersonTaskRemove = (personName, taskName) => {
    const { persons } = this.state;

    const newPersons = persons.map(person => {
      if (person.name === personName) {
        const newTasks = person.tasks.filter(task => task.name !== taskName);
        person.tasks = newTasks;
        return person;
      }
      return person;
    });

    this.setState({ persons: newPersons });
  };

  render() {
    const { persons, person, task, selectedPersonName } = this.state;
    return (
      <div className="container">
        <Nav>TodoList</Nav>

        <Select
          isDisabled={!persons.length}
          options={persons}
          onChangeHandler={this.onSelectedPersonNameChangeHandler}
          label={"Please select the person"}
        />

        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="row align-items-center">
              <Input
                onChangeHandler={this.onPersonChangeHandler}
                value={person}
                label="Please enter persons name"
              />
              <Button
                disabledHandler={person === ""}
                onClickHandler={this.onPersonAddHandler}
              >
                Add
              </Button>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="row align-items-center">
              <Input
                disabledHandler={selectedPersonName === ""}
                onChangeHandler={this.onTaskChangeHandler}
                value={task}
                label="Please enter the task"
              />
              <Button
                disabledHandler={task === ""}
                onClickHandler={this.onTaskAddHandler}
              >
                Add
              </Button>
            </div>
          </div>
        </div>

        {selectedPersonName ? (
          <div className="row">
            <Panel
              onPersonTaskRemove={this.onPersonTaskRemove}
              onPersonTaskStatusToggle={this.onPersonTaskStatusToggle}
              onPersonRemoveHandler={this.onPersonRemoveHandler}
              onPersonsTaskRemoveHandler={this.onPersonsTaskRemoveHandler}
              title={selectedPersonName}
              list={this.getSelectedPersonTasks()}
            />
          </div>
        ) : (
          <div
            className="caption mx-auto p-3 text-center"
            style={{ color: "grey" }}
          >
            No person is Selected yet !!!
          </div>
        )}
      </div>
    );
  }
}

export default App;
