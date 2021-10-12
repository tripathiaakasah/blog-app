import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import LoginPage from "./Components/Login/LoginPage";

function App() {
  let findUserDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <Router>
      <Switch>
        {findUserDetails && <Redirect exact from="/" to="/home" />}
        <Route path="/" component={LoginPage} exact />
        <Route path="/home" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
