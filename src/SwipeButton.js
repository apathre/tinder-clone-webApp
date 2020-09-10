import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';
import './SwipeButton.css';

function SwipeButton() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_replay">
            <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_clear">
            <ClearIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_star">
            <StarIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_flash">
            <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButton
