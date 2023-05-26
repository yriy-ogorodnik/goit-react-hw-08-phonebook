import { useLocation } from "react-router-dom";
import StatusFilter from "../../components/StatusFilter/StatusFilter";
import { TweetList } from "../../components/TweetList/TweetList";
import { BackClik } from "../../components/UI/BackClik/BackClik";

const TweetsPage = () => {
  const location = useLocation();
  const from = location?.state?.from ?? "/";

  return (
    <>
      <BackClik to={from}>Go back</BackClik>
      <div>Show tweets:</div>
      <StatusFilter />
      <TweetList />
    </>
  );
};

export default TweetsPage;
