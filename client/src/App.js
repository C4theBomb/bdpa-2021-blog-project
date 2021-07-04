import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Create from './components/Create';
import Update from './components/Update';

import Login from './components/Login';
import Register from './components/Register';

function App() {
    const [token, setToken] = useState(null);

    return (
        <BrowserRouter>
            <Header setToken={setToken} token={token} />
            <Switch>
                <Route path='/login'>
                    <Login setToken={setToken} />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/' exact>
                    <Home token={token} />
                </Route>
                <Route path='/create'>
                    <Create token={token} />
                </Route>
                <Route path='/update/:id'>
                    <Update token={token} />
                </Route>
                <Route path='/:id'>
                    <SinglePost token={token} />
                </Route>
                <Route> {/* 404 Not Found */}</Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
