import './App.css';
import Navbar from './component/Navbar';
import Movie from './component/Movie';
import Tvshow from './component/Tvshow';
import Open from './component/Open';
import Opent from './component/Opent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Below from './Below';
import Search from './component/Search';
function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Movie">
            <Movie />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Tvshow">
            <Tvshow />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Below />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Search/:key" component={Search} />
        </Switch>
        <Switch>
          <Route path="/Movie/:id" component={Open} />
        </Switch>
        <Switch>
          <Route path="/Tvshow/:id" component={Opent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
