import "./App.css";
import Main from "./components/Main";
import Randombooks from "./components/Randombooks";
import Header from "./components/Header";
import Aside from "./components/Aside";
import { Switch, Route } from "react-router-dom";
import Homenav from "./components/Homenav";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Randombooks />
          <Aside />
          <Main />
        </Route>
        <Route path="/book">
          <Homenav/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
