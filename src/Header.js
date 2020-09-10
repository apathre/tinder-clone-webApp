import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';


function Header({backButton}) {
    const history=useHistory();
    return (
        <div className="header">
            {(backButton)?
            (<IconButton onClick={()=>history.goBack()}>
            <ArrowBackIosIcon fontSize="large"/>
            </IconButton>)
            :(<IconButton>
            <PersonIcon fontSize="large"/>
            </IconButton>)}
            <Link to="/">
            <img 
            className="tinder_logo"
            src="https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo.png"
            alt="tinder_logo"/>
            </Link>
            <Link to="/chat">
            <IconButton>
            <ForumIcon fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
