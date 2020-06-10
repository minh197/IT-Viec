import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./page/job"
import Login from "./page/login"
import Detail from "./page/detail"
import FourZeroFour from "./page/FourZeroFour"
import {BrowserRouter} from "react-router-dom";


import './App.css';

function App(props) {
  let [user,setUser] = useState(false)//if user is true login, then login

  


  

  const ProtectedRoute = (props) => {
    if (user === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/logins" />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props)=><Detail {...props}/>}/>
      
        <Route path="/jobs" component={Jobs} />
        <Route path="/logins" component={Login} />
        <Route exact path="/" component={Jobs} />
        <Route path="*" component={FourZeroFour} />
        
        
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
