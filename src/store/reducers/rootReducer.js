const initState = {
  jobs: [
    { id: 1, title: "Software Engineer", salary: 500 },
    { id: 2, title: "Product Manager", salary: 1000 },
    { id: 3, title: "Data Scientist", salary: 700 },
  ],
  posts: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_JOB":
      let jobs = state.jobs;
      jobs = jobs.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        jobs,
      };
    case "CREATE_JOB":
      let id = Math.floor(Math.random() * 10000);
      let job = { id: id, title: `Random - ${id}`, salary: `${id}` };
      return {
        ...state,
        jobs: [...state.jobs, job],
      };
    default:
      return state;
  }
};

export default rootReducer;
