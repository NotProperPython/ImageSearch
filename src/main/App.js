import "../App.css";
import CommentDetail from "../components/CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "../components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name={"Sam"}
          avatar={faker.image.avatar()}
          time={"6:00 PM"}
          text={"Wonderful"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={"Jack"}
          avatar={faker.image.avatar()}
          time={"7:00 PM"}
          text={"Best"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={"Luke"}
          avatar={faker.image.avatar()}
          time={"8:00 PM"}
          text={"Cool"}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
