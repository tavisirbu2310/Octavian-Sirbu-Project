import React from 'react';
import {NavLink} from "react-router-dom";

const WeatherForm = props => {
    return(
        <div className="module module__form">
            <button className="btnW btnW--icon btnW--close"><i className="material-icons"><NavLink className={'navlink'} to={'/'}>close</NavLink></i></button>
            <h2>Find city</h2>

            <form onSubmit={props.submit} noValidate autoComplete="off" className="find-city">
                <input type="text" onChange={props.handleChange} name="search" id="search" placeholder="eg. New York"/>
                <button type="submit"><i className="material-icons">search</i></button>
            </form>
            <div className="search-error"> </div>
        </div>
    )
}

export default WeatherForm;