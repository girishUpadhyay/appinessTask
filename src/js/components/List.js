import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Label } from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import  '../../../src/assets/css/style.css'

const mapStateToProps = state => {
  return { articles:state.articles };
};


class ConnectedList extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        
          <Row style={{marginTop:"50px"}}>
            {this.props.articles.user.map((value,index)=>{
              return(
                <Col xs="4">
                <Paper style={{ marginTop: "40px", backgroundColor:"#e2e2e2" }} className="paperStyle">
                <Row>
                  <Col md="6">
                 <span  className="fontSizeLabel1">ID</span> 
                  </Col>
                  <Col md="6">
                  {value.id}
                  </Col>
                  <Col md="6">
                  <span  className="fontSizeLabel1">Name</span> 
                  </Col>
                  <Col md="6">
                  {value.name}
                  </Col>
                  <Col md="6">
                  <span  className="fontSizeLabel1">Age</span> 
                  </Col>
                  <Col md="6">
                  {value.age}
                  </Col>
                  <Col md="6">
                  <span  className="fontSizeLabel1">Gender</span> 
                  </Col>
                  <Col md="6">
                  {value.gender}
                  </Col>
                  <Col md="6">
                  <span  className="fontSizeLabel1">Email</span> 
                  </Col>
                  <Col md="6">
                  {value.email}
                  </Col>
                  <Col md="6">
                  <span  className="fontSizeLabel1">Phone No</span> 
                  </Col>
                  <Col md="6">
                  {value.phoneNo}
                  </Col>
                  </Row>
                </Paper>
               
                </Col>

              )
            })}
           
           

            </Row>
        
        </div>

    )
  }
}

const ListOfData = connect(mapStateToProps)(ConnectedList);
export default ListOfData;