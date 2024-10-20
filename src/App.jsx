import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Profile from './components/Profile';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
};

export default App;
