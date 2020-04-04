import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from '../src/js/components/List'
import DrawerComponent from './js/components/DrawerComponent'

import LoginComponent from './js/components/LoginComponent'
import Dashboard from './js/components/Dashboard'
export default class RouterComponent extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

            isAuthenticated: false,
            b: 20
        }
    }

    componentDidMount() {

        if (!this.state.isAuthenticated) {
            var a = localStorage.getItem("isAuthenticated")
            this.setState({
                isAuthenticated: a
            });
        }

    }

    render() {

        return (
            <Router>
                <Route exact path='/' component={LoginComponent}>

                </Route>

                <Route exact path='/list' component={List} />
                <Route exact path='/dashboard' component={Dashboard} />


                <Route path="/drawer" component={DrawerComponent} />


            </Router>
        )
    }
}