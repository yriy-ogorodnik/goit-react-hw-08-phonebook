import classes from "./MyButton.module.css";
import { useDispatch } from "react-redux";
import { addFollower, deleteFollower } from "../../../redux/operations";

const MyButton = ({ tweet }) => {
  const isFollowing = tweet.following;

  const dispatch = useDispatch();

  const handleClick = () => {
    if (isFollowing) {
      dispatch(deleteFollower(tweet));
    } else {
      dispatch(addFollower(tweet));
    }
  };

  const buttonLabel = isFollowing ? "Following" : "Follow";
  const buttonColor = !isFollowing ? "#EBD8FF" : "#5CD3A8";

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      className={`${classes.myBtn} `}
      onClick={handleClick}
    >
      {buttonLabel}
    </button>
  );
};

export default MyButton;
