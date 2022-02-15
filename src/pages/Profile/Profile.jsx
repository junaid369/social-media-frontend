import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../Axios";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import "react-image-crop/dist/ReactCrop.css";
import Fade from "@mui/material/Fade";
import ReactCrop from "react-image-crop";
import { updateProfile } from "../../Axios";

const Input = styled("input")({
  display: "none",
});

function Profile() {
  const [data, profileData] = useState();
  const [file, setFile] = useState();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [blob, setBlob] = useState(null);
  const [result, setResult] = useState();
  const [img, setImg] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUserDetails().then((value) => {
      profileData(value);
      setImg(value.profile);
      console.log(img, "5515616");
    });
  }, []);
  function handleChange(e) {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setOpen(true);
  }

  const submithandler = () => {
    const formdata = new FormData();
    formdata.append("profile", blob);
    const user = localStorage.getItem("user");
    let userdetails = JSON.parse(user);
    let id = userdetails._id;
    formdata.append("id", id);

    updateProfile(formdata)
      .then((response) => {})
      .catch((err) => {});
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 124,
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
          submithandler();

          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });
  }

  return (
    <div>
      <Navbar />

      <div
        className="profile container col-12 container"
        style={{ height: "100vh" }}
      >
        <div className="row profilesidebar ">
          <Card
            className="profileoptions mt-5"
            sx={{
              width: "300px",
              marginLeft: "50px",
              height: 200,
              paddingTop: "5px",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <h5>Edit Profile</h5>
                <hr />

                <h5>Password change</h5>
                <hr />

                <h5>Logout</h5>
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="profilecard mt-5"
            sx={{ width: "900px", height: "600px", marginLeft: "50px" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <div
                  className="d-flex mt-3 mb-3"
                  style={{ justifyContent: "center", borderRadius: "50%" }}
                >
                  {img ? (
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <AccountCircleIcon
                      style={{
                        height: "170px",
                        width: "170px",
                        position: "relative",
                      }}
                    />
                  )}
                </div>

                <div
                  className="d-flex "
                  style={{ justifyContent: "center", borderRadius: "50%" }}
                ></div>

                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera
                      className="camera"
                      style={{
                        marginLeft: "450px",
                        marginTop: "-120px",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </label>

                <div className="text-center mb-3">
                  <h4>Muhammed junaid</h4>
                </div>

                <div>
                  <div className="row ">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Muhammed"
                     
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Junaid T"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="web site"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gender"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="junaidmuhammed690@gmail.com"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="7025941364"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex">
                  <Button
                    variant="contained"
                    style={{ marginLeft: "auto", marginBottom: "50px" }}
                  >
                    Update
                  </Button>
                </div>
              </Typography>

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
                    {file && (
                      <div>
                        <ReactCrop
                          style={{ height: "100%", width: "100%" }}
                          src={file}
                          className="src"
                          onImageLoaded={setImage}
                          crop={crop}
                          onChange={setCrop}
                        />
                        <Button
                          variant="contained"
                          className="cropimg"
                          onClick={getCroppedImg}
                        >
                          cropimage
                        </Button>
                      </div>
                    )}
                  </Box>
                </Fade>
              </Modal>
            </CardContent>
          </Card>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
