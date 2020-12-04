import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import Tea from "./Tea";
import Menu from "./Menu";
import Attractions from "./Attractions";
import Location from "./Location";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/tea" component={Tea} />
                    <Route exact path="/attractions" component={Attractions} />
                    <Route exact path="/location" component={Location} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;
