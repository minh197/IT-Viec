import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./page/job"
import Login from "./page/login"
import Detail from "./page/detail"
import FourZeroFour from "./page/FourZeroFour"

import './App.css';

function App() {
  let [user,setUser] = useState(true)//if user is true login, then login

  const ProtectedRoute = (props) => {
    if (user === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/logins" />;
    }
  };
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props)=><Detail {...props}/>}/>
      
        <Route path="/jobs" component={Jobs} />
        <Route path="/logins" component={Login} />
        <Route exact path="/" component={Jobs} />
        <Route path="*" component={FourZeroFour} />
        
        
        
      </Switch>
    </div>
  );
}

export default App;
