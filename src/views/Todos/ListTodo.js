import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Buy groceries" },
      { id: "todo3", title: "Go to the gym" },
      { id: "todo4", title: "Fixing bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("New todo added successfully!");
  };

  handleDeleteTodo = (todo) => {
    this.setState({
      listTodos: this.state.listTodos.filter((item) => item.id !== todo.id),
    });
    toast.success("Todo deleted successfully!");
  };

  handleEditTodo = (todo) => {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      //Find index of specific object using findIndex method.
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      //Update object's name property.
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({ listTodos: listTodosCopy, editTodo: {} });
      toast.success("Update todo succeed!");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEdit = (e) => {
    let editTodo = { ...this.state.editTodo };
    editTodo.title = e.target.value;
    this.setState({ editTodo });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div key={item.id} className="todo-child">
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            onChange={(e) => this.handleOnchangeEdit(e)}
                            value={editTodo.title}
                          ></input>
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <input type="checkbox" />
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
