import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
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
    height: 151,
    // alignItems: "center",
    borderRadius: "50%",
   
  },
  Members:{
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30
  },
  Title: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  Carousel: {
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth:500,
    maxHeight:'auto',
  }
}));

export default function Members(props) {
  const classes = useStyles();
  var items = [
    {
      name: "Christiaan Verhoef",
      description:"Deserunt pariatur consequat dolore laborum elit proident minim eiusmod.",
      img:"./ChristiaanVerhoef.jfif"
    },
    {
      name: "Corn Ekoks",
      description:"Amet cillum cupidatat ad quis enim sint sunt elit deserunt culpa cillum enim nostrud esse.",
      img:"./CornEkoks.jfif"
    },
    {
      name: "Ferry Tichelhof",
      description:"Nostrud aliquip ut elit duis ut commodo enim consequat magna non cillum dolor.",
      img:"./Ferry_Tichelhof.jfif"
    },
    {
      name: "Koen Postma",
      description:"Amet velit id quis voluptate ut fugiat esse non.",
      img:"./Koen_postma.jfif"
    },
    {
      name: "Koen Schouten",
      description: "Quis eu mollit ea consequat aliquip veniam officia ea anim.",
      img:"./Koen_Schouten.jfif"
    },
    {
      name: "Tommy",
      description: "Exercitation quis pariatur fugiat commodo eu sunt et ad sit voluptate quis.",
      img:"./Tommy.jfif"
    },
  ];

  return (
    <div className={classes.Members}>
      <Typography variant="h4" className={classes.Title}>
        Members
      </Typography>
      <Grid container spacing={1}>
        <Grid item spacing={4}>
          <Carousel className={classes.Carousel}>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item spacing={4}>
        <Paper className='Members' className={classes.Carousel}>
          <img className={classes.cover} alt={props.item.name} src={props.item.img}></img>
          <h4>{props.item.name}</h4>
          <p>{props.item.description}</p>
          {/* maybe github link */}
          <Button className="CheckButton">Check them out!</Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
