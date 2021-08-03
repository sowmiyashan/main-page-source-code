import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';

import Login from './Login';
import Portal from "./Portal";
import SignUp from "./SignUp";

function Main() {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portal" component={Portal}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
        </>
    );
}

export default Main;
