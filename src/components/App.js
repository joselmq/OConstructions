import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import Signup from "./Signup"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import DesignMediterraneo from "./Design"
import "../style/App.css"
import "../style/Login.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  document.body.style.minHeight = "100%";
  

  return (   
    <div style={{ minHeight: "100%" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/design" component={DesignMediterraneo} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
