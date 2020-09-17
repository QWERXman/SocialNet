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

import styles from './App.module.scss';
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
        <div className={styles.App}>
            <div className={styles.HeaderLine}/>
            <div className={styles.AppContainer}>
                <div className={styles.Header}>
                    <div className={styles.AppName}>SN</div>
                    <User />
                </div>
                <Router history={history}>
                    <div className={styles.ContentContainer}>
                        <div className={styles.Routes}><Routes items={RoutesItems}/></div>
                        <div className={styles.ContentArea}><ContentArea/></div>
                    </div>
                </Router>
            </div>
        </div>
    )
};

export default App;
