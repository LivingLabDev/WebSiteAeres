import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
    marginLeft: "10px",
    maxWidth: 345,
  },
  Canvas: {
    width: "100%",
    height: "600px",
    paddingBottom: "10px",
    paddingRight: "20px",
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "80px",
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

  function goFullScreen(elem1) {
    var elem = document.getElementById(elem1);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  {
    return (
      <div>
        <Typography variant="h4">Running Projects</Typography>
        <Grid container spacing={1}>
          <Grid item spacing={4}>
            <Typography variant="h5" gutterBottom>
              Project Proposal GreenVillage
            </Typography>
            <Typography variant="h6" gutterBottom>
              door christiaan Gerardo
            </Typography>

            <div id={"iframe1"} className={classes.Canvas}>
              <iframe
                className={classes.iframe}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEcwQw_jfw&#x2F;view?embed"
              ></iframe>
            </div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => goFullScreen("iframe1")}
            >
              Meer info
            </Button>
          </Grid>
          <Grid item spacing={4}>
            <Typography variant="h5" gutterBottom>
              Farm Credibly
            </Typography>
            <Typography variant="h6" gutterBottom>
              door christiaan Gerardo
            </Typography>

            <div id={"iframe2"} className={classes.Canvas}>
              <iframe
                className={classes.iframe}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEZCAG9lT0&#x2F;view?embed"
              ></iframe>
            </div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => goFullScreen("iframe2")}
            >
              Meer info
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
