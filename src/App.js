import "./App.css";
import Main from "./components/Main";
import Randombooks from "./components/Randombooks";
import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="App">
      <Header />
      <Randombooks />
      <Aside />
      <Main />
    </div>
  );
}

export default App;
