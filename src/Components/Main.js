import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}
export default Main;
