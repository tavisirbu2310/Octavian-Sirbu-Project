import {NavLink} from "react-router-dom";
import React from 'react';


export const NavHome = props => {
    return (
        <nav className={'divWrapper'}>
            <input type={'checkbox'}/>
            <span></span>
            <span></span>
            <span></span>
            <div className={'divWrapper'}>
                <div>
                    <button className={'btn btn-1'}><NavLink className={'navlink'} to={'/aboutme'}>About
                        me</NavLink></button>
                </div>
                <div>
                    <button className={'btn btn-2'}><NavLink className={'navlink'} to={'/weather'}>Weather</NavLink>
                    </button>
                </div>
                <div>
                    <button className={'btn btn-3'}><NavLink className={'navlink'}
                                                             to={'/calculator'}>Calculator</NavLink></button>
                </div>
                <div>
                    <button className={'btn btn-4'}><NavLink className={'navlink'}
                                                             to={'/contactme'}>Contact</NavLink></button>
                </div>
                <div>
                    <button className={'btn btn-3'}><NavLink className={'navlink'} to={'/memegen'}>Memes</NavLink>
                    </button>
                </div>
            </div>
        </nav>
    )
}


