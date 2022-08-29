import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Header />
          <Detail />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
} 


export default App;