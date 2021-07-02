import "./App.scss";
import Context from "./components/Context/Context";
import MainContainer from "./components/MainContainer/MainContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/main.scss";
import useDataApi from "./components/service/api";
import DetailCard from "./components/DetailCard/DetailCard";
import Toolbar from "./components/Toolbar/Toolbar";

// require("dotenv").config();

function App() {
  const {
    resultApi: { results },
  } = useDataApi();

  return (
    <Context.Provider value={results}>
      <div className="container">
        <Toolbar />
        <Router>
          <Switch>
            <Route path="/" component={MainContainer} exact></Route>
            <Route path="/:id" component={DetailCard} exact></Route>
          </Switch>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
