import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import M from 'materialize-css/dist/js/materialize';

class App extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems, {});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cart" component={Cart}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
