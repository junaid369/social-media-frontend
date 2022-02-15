import { height } from "@mui/system";
import "./Rightbar.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Rightbar() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="Rightbar" style={{ borderRadius: "20px" }}>
      <Card
        className="newscard mt-5"
        sx={{ width: "300px", marginLeft: "50px" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <ul>
              <h6 className="text-center mt-3"> Top Headlines</h6>
              <hr />
              <li>Murray 'incredibly irritated' by Ronaldo chants</li>
              <li>Chelsea held at Brighton as PL slump continues</li>
              <li>Chelsea held at Brighton as PL slump continues</li>
              <li>Chelsea held at Brighton as PL slump continues</li>
              <li>Chelsea held at Brighton as PL slump continues</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card className="mt-5" sx={{ width: "300px", marginLeft: "50px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h6 className="featuredcard-center mt-3"> Featured</h6>
            <hr />
            <ul>
              <div>
                <img
                  src="assets/laliga.jpg"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                  }}
                  alt=""
                />
                <span className="featured-title" style={{ marginLeft: "30px" }}>
                  Laliga
                </span>
              </div>
              <div className="mt-3">
                <img
                  src="assets/isl.png"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                  }}
                  alt=""
                />
                <span className="featured-title" style={{ marginLeft: "30px" }}>
                  Isl
                </span>
              </div>
              <div className="mt-3">
                <img
                  src="assets/nba.jpg"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                  }}
                  alt=""
                />
                <span className="featured-title" style={{ marginLeft: "30px" }}>
                  Nba
                </span>
              </div>
              <div className="mt-3">
                <img
                  src="assets/ufc.png"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                  }}
                  alt=""
                />
                <span className="featured-title" style={{ marginLeft: "30px" }}>
                  Ufc
                </span>
              </div>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
