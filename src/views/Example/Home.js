import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //     this.props.history.push("/todo")
    // }, 3000)
  }

  handleDeleteJob = (job) => {
    console.log(job);
    this.props.deleteJobRedux(job);
  };

  handleCreateJob = () => {
    this.props.createJobRedux();
  };

  render() {
    let listJobs = this.props.dataRedux;
    return (
      <>
        <div>
          <h1>Welcome to the Home Page with JD</h1>
          <p>This is a simple React application.</p>
        </div>
        <div>
          <img
            src={logo}
            style={{ width: "500px", height: "400px", marginTop: "20px" }}
          />
        </div>
        <div>
          {listJobs &&
            listJobs.length > 0 &&
            listJobs.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.title} - {item.salary} ${" "}
                  <span onClick={() => this.handleDeleteJob(item)}>X</span>
                </div>
              );
            })}
          <button onClick={this.handleCreateJob}>Create Job</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.jobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteJobRedux: (jobDelete) =>
      dispatch({ type: "DELETE_JOB", payload: jobDelete }),
    createJobRedux: () => dispatch({ type: "CREATE_JOB" }),
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
