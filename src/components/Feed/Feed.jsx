

import "./Feed.css"
import Post from "../Post/Post"
import Share from "../Share/Share"
import Story from "../Story/Story";


export default function Feed() {
    return (
      <div className="feed">
        <div className="feedWrapper">
            <Story/>
          <Share />
          <Post/>
  
        </div>
      </div>
    );
  }