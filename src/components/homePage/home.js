import React from 'react';
import {NavHome} from "./nav/navHome";
import {Squares} from "./squares/squares";

export const Home = props => {

    return (
        <div className={'bigWrapper'}>
            <NavHome/>
            <Squares/>
        </div>

    )

}