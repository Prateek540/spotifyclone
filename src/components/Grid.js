import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Grid = (props) => {
  return (
    <Card
      className="Card"
      style={{ background: "rgb(35,35,35)", color: "rgb(224,224,224)" }}
    >
      <CardActionArea>
        <CardMedia
          className="media"
          component="img"
          image={props.Data.image}
          alt={props.Data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.Data.title}
          </Typography>
          <Typography variant="p">{props.Data.artist}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a className="insideButton" onClick={() => props.setId(props.Data.id)}>
          <PlayCircleIcon style={{ color: "#16db63" }} fontSize="large" />
        </a>
      </CardActions>
    </Card>
  );
};

export default Grid;
