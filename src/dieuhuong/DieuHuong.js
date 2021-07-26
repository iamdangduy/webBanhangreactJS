import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Allmenu from '../allComponent/Allmenu';
import Contact from '../allComponent/Contact';
import Menu from '../allComponent/Menu';

class DieuHuong extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/allmenu" component={Allmenu}></Route>
                    <Route path="/contact" component={Contact}></Route>             
                    <Route path="/" component={Menu}></Route>  
                </Switch>
            </div>
        );
    }
}

export default DieuHuong;