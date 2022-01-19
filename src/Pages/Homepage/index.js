import React from 'react';

//components
import Header from "../../Components/Header"
import Banner from "../../Components/Banner"
import Brands from "../../Components/Brands"
import NoMore from "../../Components/NoMore"

function Index(props) {
    return (
        <>
            <Header type='homepage'/>
            <Banner/>
            <Brands/>
            <NoMore/>
        </>
    );
}

export default Index;
