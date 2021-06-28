import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Create from './components/Create';
import Update from './components/Update';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/create'>
                    <Create />
                </Route>
                <Route path='/update/:id'>
                    <Update />
                </Route>
                <Route path='/:id'>
                    <SinglePost />
                </Route>
                <Route> {/* 404 Not Found */}</Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
