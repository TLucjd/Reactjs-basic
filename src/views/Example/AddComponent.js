import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitleJob = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    if (!this.state.title) {
      alert("Please enter both title and salary");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job's Title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChangeTitleJob}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={this.handleChangeSalary}
        />
        <br />
        <br />
        <input type="submit" onClick={this.handleClick} value="Submit" />
      </form>
    );
  }
}
export default AddComponent;
