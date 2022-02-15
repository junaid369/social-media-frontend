import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getAllPost } from "../../Axios";
import "./Post.css";

const Input = styled("input")({
  display: "none",
});

export default function Post() {
  const [post, setPost] = useState();

  useEffect(() => {
    getAllPost().then((response) => {
      console.log(response.data.Post, "LLL");

      setPost(response.data.Post);
    });
  }, []);

  return (
    <div className="post" style={{ width: "600px" }}>
      {post &&
        post.map((val) => {
          return (
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <img className="postProfileImg" src={val.profile} alt="" />

                  <span className="postUsername">junaid</span>
                  <span className="postDate">{val.postedDate}</span>
                </div>
                <div className="postTopRight">
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />

                    <MoreVertIcon />
                  </label>
                </div>
              </div>
              <div className="postCenter">
                <span className="postText">{val.description}</span>
                <img
                  className="postImg"
                  style={{ width: "100%" }}
                  src={val.post}
                  alt=""
                />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <img className="likeIcon" src="assets/like.png" alt="" />

                  <span className="postLikeCounter">32 people like it</span>
                </div>

                <div className="postBottomRight">
                  <span className="postCommentText">9 comments</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
