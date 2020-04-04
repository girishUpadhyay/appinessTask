import React from 'react'
import '../../../src/assets/css/style.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



export default class MyRoutingSideBar extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="sidenav" style={{marginTop:"65px"}}>
            
              <Link to="/dashboard">
                        <ListItem>
                            <ListItemIcon style={{color:"white"}}><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Home" style={{color:"white"}} />
                        </ListItem>
                    </Link>
            
               {/* <Link to="/">
                        <ListItem>
                            <ListItemIcon style={{color:"white"}}><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Home" style={{color:"white"}} />
                        </ListItem>
                    </Link> */}
                    <Link to="/dashboard">
                        <ListItem>
                            <ListItemIcon style={{color:"white"}}><InboxIcon /></ListItemIcon>
                            <ListItemText primary="About Us" style={{color:"white"}} />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard">
                        <ListItem>
                            <ListItemIcon style={{color:"white"}}><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Contact Us" style={{color:"white"}} />
                        </ListItem>
                    </Link>
                    <Link to="/">
                        <ListItem>
                            <ListItemIcon style={{color:"white"}}><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Logout" style={{color:"white"}} />
                        </ListItem>
                    </Link>
                    
            <ul>
                 
                </ul>
            </div>
        )
    }
}