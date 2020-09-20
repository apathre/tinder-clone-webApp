import React, {useState} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';

function Header({backButton}) {
    const history=useHistory();
    const [menuOpen,setMenuOpen]=useState(false);
    console.log('menuOpen is:',menuOpen);
    const handleStateChange=(state)=>{
        console.log('reached handleStateChange in header');
        setMenuOpen(state.isOpen);
    }
    const closeMenu=()=>{
        console.log('reached closeMenu');
        setMenuOpen(false);
    }
    const toggleMenu=()=>setMenuOpen({menuOpen:!menuOpen})

    return (
        <div className="header">
            {(backButton)?
            (<IconButton onClick={()=>history.goBack()}>
            <ArrowBackIosIcon fontSize="large"/>
            </IconButton>)
            :(<Menu
                  isOpen={menuOpen}
                  onStateChange={(state)=>handleStateChange(state)}>
                    <a className="menuItem" onClick={()=>closeMenu()} href="/" >Home</a>
                    <a className="menuItem" onClick={()=>closeMenu()} href="/profile" >Profile</a>
                    <a className="menuItem" onClick={()=>closeMenu()} href="/chat">Chat</a>
                    <a className="menuItem" onClick={()=>closeMenu()} href="/login">Login</a>
                </Menu>
            )}
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
