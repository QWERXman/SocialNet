import React, {useEffect} from 'react';
import Axios from 'axios';
import { Router } from "react-router-dom";
import history from "constants/history";
import { Routes as RoutesItems } from "routes/routes";
import Routes from "components/Routes/Routes";
import ContentArea from "components/ContentArea/ContentArea";
import Login from "components/pages/Login/Login";
import User from "components/User/User";
import {isAuthenticated, logout} from "service/auth";
import Profile from "service/profile";

import './App.css';
import {setProfileData} from "../../store/actions/pages/Profile/profileActions";
import {useDispatch} from "react-redux";

if (window.localStorage.uathToken) {
    Axios.defaults.headers = {
        'Authorization': 'Token ' + window.localStorage.uathToken,
        'Content-Type': 'application/json'
    }
}

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated()) {
            Profile.getSelf().then((response) => {
                dispatch(setProfileData(response));
            }).catch(() => {
                logout();
            });
        }
    }, [])

    if (!isAuthenticated()) {
        return (
            <Login />
        )
    }

    return (
        <div>
            <div className="HeaderLine"/>
            <div className="AppContainer">
                <div className="Header">
                    <div className="AppName">SN</div>
                    <User />
                </div>
                <Router history={history}>
                    <div className="ContentContainer">
                        <Routes items={RoutesItems}/>
                        <ContentArea/>
                    </div>
                </Router>
            </div>
        </div>
    )
};

export default App;
