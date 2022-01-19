import React from 'react';
import { Link } from "react-router-dom";
import {HomepageHeader, Image, Nav} from "./style"

//image
import Logo from "../../images/Logo.png"

function Index({type}) {
    return (
        <>
            {
                type === 'homepage' &&
                    <HomepageHeader>
                        <div className='container pt-4 pb-5 d-flex justify-content-between align-items-center'>
                            <Link to="/">
                                <Image src={Logo} alt={Logo} />
                            </Link>
                            <Nav className='d-flex'>
                                <Link to="/" className="text-white text-decoration-none">Pricing</Link>
                                <Link to="/" className="me-lg-5 ms-lg-5 text-white text-decoration-none">FAQ</Link>
                                <Link to="/" className="text-white text-decoration-none">Contact</Link>
                            </Nav>
                            <Nav className='d-flex'>
                                <Link to="/login" className="text-white text-decoration-none">Login</Link>
                                <Link to="/signup" className="ms-lg-5 text-white text-decoration-none">Sign Up</Link>
                            </Nav>
                        </div>
                    </HomepageHeader>
            }
        </>
    );
}

export default Index;
