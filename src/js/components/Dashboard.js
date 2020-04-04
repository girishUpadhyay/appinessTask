import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Label } from 'reactstrap';

import Appbar from './Appbar';
import Sidebar from './Sidebar'
import ListOfData from '../components/List';
import DrawerComponent from './DrawerComponent'

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (


            <div>
                <Row>
                    <Appbar />
                </Row>
                <Row>
                    <Col xs="2">
                        <Sidebar />
                    </Col>
                    <Col xs="8">
                        <ListOfData />
                    
                    </Col>
                </Row>
            </div>
        )


    }
}