import "./App.scss";
import Context from "./components/Context/Context";
import MainContainer from "./components/MainContainer/MainContainer";
import "./components/main.scss";
import useDataApi from "./components/service/api";
require("dotenv").config();

function App() {
  const {
    resultApi: { results },
  } = useDataApi();
  console.log("data", results);

  const test = process.env.TOKEN;
  console.log("test", test);
  return (
    <Context.Provider value={results}>
      <div className="App">
        <header className="App-header">
          <MainContainer />
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
