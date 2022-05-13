import Publication from "../publication/Publication";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Publication key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
