import React from 'react';

//style
import {Banner, Left, Right} from "./style"

//img
import Background from "../../images/header_background.png"
import BannerRight from "../../images/header_right.png"

function Index(props) {
    return (
        <Banner>
            <div className='container d-flex'>
                <Left style={{background: `url(${Background})`}}>
                    <p className='position-relative'>Save Money</p>
                    <h1>Automate OTA Reconciliations</h1>
                    <span>reconcileOTA automatically reconciles lost revenues from OTA bookings, saving time and
                        earning you the most money from your reservations. Get started today!</span>
                </Left>
                <Right>
                    <img src={BannerRight} alt={BannerRight} />
                </Right>
            </div>
        </Banner>
    );
}

export default Index;