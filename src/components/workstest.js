import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
    marginLeft: "10px",
    maxWidth: 345,
  },
  Canvas: {
    width: "100%",
    height: "600px",
    paddingBottom: "48px",
    paddingRight: "20px",
    marginTop: "80px",
    marginLeft: "10px",
    marginRight: "80px",
    marginBottom: " 0.9em",
    overflow: " hidden",
    borderRadius: "8px",
    willChange: "transform",
  },
  Fullscreen: {
    width: "1920px",
    height: "1080px",
  },
  iframe: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    padding: 0,
    margin: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ProjectCards(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item spacing={4}>
            {/* <div className={isActive ? 'Canvas': 'Fullscreen'}> */}
            <button onClick={() => setFullScreen(!fullScreen)}>Fullscreen</button>
              <div className={`${fullScreen ? "makeStyles-Fullscreen-13" : "makeStyles-Canvas-12"}`}>
              
                <iframe className={classes.iframe} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEcwQw_jfw&#x2F;view?embed"></iframe>
              </div>
          </Grid>
          <Grid item spacing={4}>
          <button onClick={() => setFullScreen(!fullScreen)}>Fullscreen</button>
            <div className={`${fullScreen ? "makeStyles-Fullscreen-13" : "makeStyles-Canvas-12"}`}>
              <iframe
                className={classes.iframe}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEZCAG9lT0&#x2F;view?embed"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
