import React from 'react';

//style
import {WrapButton, SignUp, Demo, BrandsWrap, Inner} from "./style"

// img
import Play from "../../images/play.svg"
import Brand1 from "../../images/brands/brand-1.png"
import Brand2 from "../../images/brands/brand-2.png"
import Brand3 from "../../images/brands/brand-3.png"
import Brand4 from "../../images/brands/brand-4.png"
import Brand5 from "../../images/brands/brand-5.png"

function Index(props) {
    return (
        <div className='container'>
            <WrapButton className='d-flex'>
                <SignUp>Sign Up</SignUp>
                <Demo>
                    <img src={Play} alt={Play} />
                    <p className='mb-0'>See the Demo</p>
                </Demo>
            </WrapButton>
            <BrandsWrap>
                <h1>Trusted by <span>top hotel brands</span> around the world</h1>
                <Inner className='d-flex align-items-center justify-content-around ps-5 pe-5'>
                    <img src={Brand1} alt={Brand1} />
                    <img src={Brand2} alt={Brand2} />
                    <img src={Brand3} alt={Brand3} />
                    <img src={Brand4} alt={Brand4} />
                    <img src={Brand5} alt={Brand5} />
                </Inner>
            </BrandsWrap>
        </div>
    );
}

export default Index;