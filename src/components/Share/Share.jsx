import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatepsost } from "../../Axios";
import "./Share.css";

const Input = styled("input")({
  display: "none",
});

export default function Share() {
  const navigate = useNavigate("");
  const [src, setFile] = useState(null);
  const dispatch = useDispatch();

  const [post, setPost] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelFilechange = (e) => {
    let blob = e.target.files[0];
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const user = useSelector((state) => state.user.user);
  const userData = user;

  let ab = localStorage.getItem("user");

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 4 / 5 });
  const [result, setResult] = useState(null);
  const [blob, setBlob] = useState(null);
  const [input, setInput] = useState(null);
  const [feed, allPost] = useState(null);

  const inputsubmit = (e) => {
    setInput(e.target.value);
  };
  const submithandler = () => {
    const formdata = new FormData();
    formdata.append("post", blob);
    formdata.append("description", input);
    formdata.append("userId", user._id);

    updatepsost(formdata).then((response) => {
      if (response.post) {
        handleClose();
      }
    });
  };

  const postData = useSelector((state) => state.post.post);
  const postID = postData;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,

    bgcolor: "background.paper",
    backgroundColor: "rgb(36,37,38)",
    border: "2px solid #000",
    boxShadow: 24,
  };

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          blob.name = "Post";

          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            var base64data = reader.result;
            setResult(base64data);
          };
          setBlob(blob);
          setFile(null);

          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });
  }

  return (
    <div className="share mt-3">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/pro-1.jpg"
            alt=""
          />

          <input
            placeholder="What's in your mind junaid?"
            className="shareInput"
            onChange={(e) => setPost(e.target.value)}
          />
        </div>

        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleOpen}
              >
                <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              </IconButton>

              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
        <div></div>
      </div>
      <div></div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="text-center boxborder">
              <h4 className="title">CREATE POST </h4>
            </div>

            {src ? (
              <div>
                <ReactCrop
                  src={src}
                  className="src"
                  onImageLoaded={setImage}
                  crop={crop}
                  onChange={setCrop}
                />
                <Button
                  variant="contained"
                  className="cropimg"
                  color="success"
                  onClick={getCroppedImg}
                >
                  cropimage
                </Button>
              </div>
            ) : result ? (
              <div>
                <div className="container result">
                  <input
                    type="text"
                    className="textinput"
                    onChange={inputsubmit}
                    value={input}
                    placeholder="whats ,on your mind junaid"
                  />
                </div>

                <div>
                  <img
                    src={result}
                    alt="croppedImage"
                    className=" resultimg img-fluid "
                  />
                </div>

                <Button
                  variant="contained"
                  className="mt-3 mb-3 uploadbttn"
                  onClick={submithandler}
                >
                  UPLOAD
                </Button>
              </div>
            ) : (
              <Typography
                className="container"
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <div className="iconclass">
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={handelFilechange}
                    />

                    <LibraryAddIcon
                      className="icon"
                      style={{
                        marginLeft: "190px",
                        height: "70px",
                        width: "70px",
                        marginTop: "140px",
                        color: "white",
                      }}
                    />
                    <h6 className="text-center iconfont">Upload your photto</h6>
                  </label>
                </div>
              </Typography>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
