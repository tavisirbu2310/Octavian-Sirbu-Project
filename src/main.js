import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from "react-router-dom";
import {Home} from "./components/homePage/home";
import {AboutMe} from "./components/aboutMe/aboutme";
import Weather from "./containers/weather/weather";
import Calculator from "./containers/calculator/calculator";
import ContactMe from "./components/contactMe/contactme";
import MemeGenerator from "./containers/memeGenerator/memegenerator";

document.addEventListener("DOMContentLoaded",function () {

    class App extends Component{

        render() {
            return (
            <HashRouter>
                <>
                    <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/aboutme'} component={AboutMe}/>
                    <Route exact path={'/weather'} component={Weather}/>
                    <Route exact path={'/calculator'} component={Calculator}/>
                    <Route exact path={'/contactme'} component={ContactMe}/>
                    <Route exac path={'/memegen'} component={MemeGenerator}/>
                    </Switch>
                    </>
            </HashRouter>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});