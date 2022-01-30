import {BrowserRouter, Switch, Route} from "react-router-dom";
import LOGIN from "./pages/Login";
import CADASTRO from "./pages/Cadastro";
import HOME from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LOGIN}/>
        <Route path="/cadastro" exact component={CADASTRO}/>
        <Route path="/home" exact component={HOME}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
