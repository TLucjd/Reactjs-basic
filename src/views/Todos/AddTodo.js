import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnchangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleClickAdd = (e) => {
    e.preventDefault();
    if (!this.state.title) {
        //if(undefine/null/empty) => false
      toast.error("Please enter a title");
      return;
    }

    this.props.addNewTodo({
      id: Math.floor(Math.random() * 10001),
      title: this.state.title
    });
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.handleOnchangeTitle(e)}
        ></input>
        <button className="add" onClick={this.handleClickAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
