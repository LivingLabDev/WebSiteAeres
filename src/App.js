import "./App.css";
import TemporaryDrawer from "./components/menu";
import ProjectCards from "./components/cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemporaryDrawer />
      </header>
      <body className='App-body'>
      <h1 className='App-Title'>The Lab</h1>
      <ProjectCards />
      </body>
      
    </div>
  );
}

export default App;