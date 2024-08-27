import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 1, title: "Software Engineer", salary: "500" },
      { id: 2, title: "Product Manager", salary: "1000" },
      { id: 3, title: "Data Scientist", salary: "700" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    const newArrJobs = this.state.arrJobs.filter((item) => item.id !== job.id)
    this.setState({
      arrJobs: newArrJobs
    })
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent 
        jobs={this.state.arrJobs} 
        deleteAJob={this.deleteAJob} 
        />
      </>
    );
  }
}
export default MyComponent;
