import "./homeStyles.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/TweetItem/Tweet.styled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the world of Twitter!</h1>
        <Button
          onClick={() => {
            navigate("/tweets");
          }}
        >
          tweets
        </Button>
      </div>
    </div>
  );
};

export default Home;
