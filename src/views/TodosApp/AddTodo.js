import React from "react";
import { toast, Bounce } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Please enter a title!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    }
    this.props.addNewTodo(todo);
    this.setState({ title: "" });
  }

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add to do list..."
          value={title}
          onChange={(e) => this.handleOnChangeTitle(e)}
        ></input>
        <button className="add" onClick={() => this.handleAddTodo()}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
