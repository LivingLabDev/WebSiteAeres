import "./App.css";
import TemporaryDrawer from "./components/menu";
import ProjectCards from "./components/cards";
import Members from "./components/members";
import Workshop from "./components/workshop";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemporaryDrawer />
      </header>
      <body className='App-body'>
        <div className='App-Title'>
        <Typography variant="h1" >The Lab</Typography>
        <Typography variant="h5" className="App-intro">Minim sint exercitation Lorem Lorem est est veniam. Quis dolor labore pariatur laboris consequat <br></br>reprehenderit cupidatat incididunt. Dolore labore voluptate do fugiat nisi exercitation nisi tempor.</Typography>
        <br></br>
        <ProjectCards />
        <br></br>
        {/* <Members />
        <Workshop /> */}
        <Grid container spacing={1}>
        <Grid item item xs={12} sm={6} md={5}> <Members /></Grid>
        </Grid>
        <Grid item item xs={12} sm={6} md={5}> <Workshop /></Grid>
        
        </div>
        <div>
        
        </div>
        
      </body>
      
    </div>
  );
}

export default App;