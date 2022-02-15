import "./Sidebar.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Card className="profilecard mt-5">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <img
              className="mt-2 mb-3 profileimg"
              src="assets/person/pro-1.jpg"
              alt=""
            />
            <span className="profilename ">Junaid Muhammed</span>
            <h6 className="id text-center nickname">mr_jmt</h6>
          </Typography>
        </CardContent>
      </Card>

      <div className=" mt-5 d-flex friendsborder">
        <div className="friendscover">
          <h5>Friends</h5>
          <img className="friendsimg" src="assets/person/pro-2.jpg" alt="" />
          <span className="friendsname ">Fernades</span>
          <br />
          <img className="friendsimg" src="assets/person/pro-1.jpg" alt="" />
          <span className="friendsname ">Noam yitav</span>
          <br />
          <img className="friendsimg" src="assets/person/pro-4.jpg" alt="" />
          <span className="friendsname ">Rashford</span>
          <br />
          <img className="friendsimg" src="assets/person/pro-3.jpg" alt="" />
          <span className="friendsname ">Alexander</span>
          <br />
          <img className="friendsimg" src="assets/person/pro-5.jpg" alt="" />
          <span className="friendsname ">liya si</span>

          <h6 className="seemore">See More...</h6>
        </div>
      </div>
    </div>
  );
}
