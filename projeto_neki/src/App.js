
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LOGIN from "./pages/Login";
import Home from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LOGIN}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
