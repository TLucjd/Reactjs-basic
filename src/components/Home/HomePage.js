import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <h1 className="title">There's a better way to ask</h1>
        <div className="desc">You don't want to make a boring form.
            And your audience won't answer one.
            Create a type form instead-and make everyone happy.
        </div>
        <div><button className="btn-start">Get's started. It's free</button></div>
      </div>
    </div>
  );
};

export default HomePage;
