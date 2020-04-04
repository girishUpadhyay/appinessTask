import React from 'react'
import { Container, Row, Col, Label } from 'reactstrap';
import loginImage from './../../assets/images/homeLoginMen.png'
import { Image } from 'react-bootstrap'
import { Button } from 'reactstrap';
import './../../assets/css/style.css';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { withRouter,Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Router from '../../Router'


const mapStateToProps = state => {
    return { loginUser: state.loginUser };
};

class Login extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            userid: '',
            password: '',
            isAuthenticated: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }
    submitLogin = (e) => {
        e.preventDefault()

        if (this.state.userid == this.props.loginUser.username && this.state.password == this.props.loginUser.password) {
            this.state.isAuthenticated = true
            localStorage.setItem("isAuthenticated", this.state.isAuthenticated)
            alert("Successfully logged in")
            this.props.history.push("/dashboard");
        }
        else {
            this.state.isAuthenticated = false
            localStorage.setItem("isAuthenticated", this.state.isAuthenticated)
            alert("Please enter valid credentials")
        }
    }

    render() {

        return (
            <form onSubmit={this.submitLogin}>
                <div style={{ overflowX: "hidden", overflowY: "hidden !important" }}>

                    <Row>
                        <Col md="8">
                            <Image src={loginImage} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </Col>
                        <Col md="4" style={{ backgroundColor: "#f4eff9", padding: "100px" }}>
                            <h2 className="loginTextLoginPage">Login</h2>
                            
                            <Row style={{ width: "100%", marginTop: "100px" }}>
                                <Label className="labelText">User Name</Label>

                                <input type="text" className="form-control" id="userid"
                                    value={this.state.userid}
                                    onChange={this.handleChange} />
                            </Row>
                            <Row style={{ width: "100%" }}>
                                <Label className="labelText">Password</Label>

                                <input type="text" className="form-control " id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </Row>
                            <Row style={{ marginTop: "50px" }} >
                           <Button style={{ display: "block", margin: "auto" }} color="primary" >Login</Button>
                           {/* onClick={this.routeChange} */}
                            </Row>
                        </Col>

                    </Row>



                </div>
            </form>
        )
    }


}

const LoginComponent = connect(mapStateToProps)(Login);
export default LoginComponent;