import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fafafa",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  Title: {
    color:"black",
  }
}));

export default function Members() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
    <Typography variant="h4" className={classes.Title}>Members</Typography>
    <Grid container spacing={1}>
     
      <Grid item spacing={4}>
      
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Name
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Incididunt minim <br></br>magna in pariatur amet ex.
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="./ChristiaanVerhoef.jfif"
            title="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item spacing={4}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Name2
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Incididunt minim <br></br>magna in pariatur amet ex.
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="./CornEkoks.jfif"
            title="Live from space album cover"
          />
        </Card>
      </Grid>
    </Grid>
    </div>
  );
}
