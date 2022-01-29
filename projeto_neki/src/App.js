import {BrowserRouter, Switch, Route} from "react-router-dom";
import LOGIN from "./pages/Login";
import CADASTRO from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LOGIN}/>
        <Route path="/cadastro" exact component={CADASTRO}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
