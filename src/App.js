import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom"


// Global CSS
import './index.css';

// Components & pages
import Navigation from "./components/Navigation";
import CreateNote from "./pages/createnote/CreateNote";
import Home from "./pages/home/Home"
import ViewNote from './pages/viewnote/ViewNote'
import EditNote from "./pages/editnote/EditNote";

function App() {


  return (
    <div className="App">
       <Router>
    {/* Navigation */}
      <Navigation />
   {/* Routes */}
      <Switch>
          {/* Home */}
      <Route exact path="/">
          <Home  />
        </Route>
          {/* Create A Note */}
        <Route path="/createnote">
          <CreateNote  />
        </Route>
        {/* View A Note */}
        <Route path="/viewnote/:id">
          <ViewNote  />
        </Route>
        {/* Edit A Note */}
        <Route path="/editnote/:id">
          <EditNote  />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
