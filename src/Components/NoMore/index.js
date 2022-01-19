import React from 'react';

// style
import {Heading, SubHead, Wrap, Circular, Cross, Left, Right, Green, Overcharged} from "./style"

//img
import CircularDots from "../../images/circular-dots.png"
import GreyCross from "../../images/grey-cross.svg"
import Platform from "../../images/platform.png"
import GreenStar from "../../images/green-star.svg"
import OverchargedImg from "../../images/overcharged.png"

function Index(props) {
    return (
        <>
            <Heading>No More <br/> Manual Reconciliations</Heading>
            <SubHead>Verify OTA Payouts Accurately and Hassle-Free</SubHead>
            <Circular src={CircularDots} alt={CircularDots}/>
            <Cross src={GreyCross} alt={GreyCross}/>
            <Wrap>
                <div className='d-flex container p-0'>
                    <Left>
                        <img src={Platform} alt={Platform}/>
                        <h1>Save Money, Save Time</h1>
                        <p>
                            Booking engines make reconciliation as difficult as possible, collecting many millions every
                            year in unadjusted booking fees as a result. Between short reconciliation windows, a tedious
                            and manual process, and difficulty training staff, many hotels don’t even bother
                            reconciling. reconcileOTA makes it easy and nearly instant to analyze your reports, so you
                            don’t have to.
                        </p>
                    </Left>
                    <Right>
                        <Green src={GreenStar} alt={GreenStar} />
                        <h1>Never Get Overcharged by OTAs Again</h1>
                        <p>OTAs are a huge cost for hotels, and they cost more than they need to. When a guest calls
                            the hotel to cancel or change a booking they made on a booking engine, it isn’t always
                            relayed back to the OTA, who isn’t obligated to let you know there is a discrepancy. Our
                            system reconciles these accounts, saving you thousands each year in lost revenue.</p>
                        <Overcharged src={OverchargedImg} alt={OverchargedImg} />
                    </Right>
                </div>
            </Wrap>
        </>
    );
}

export default Index;