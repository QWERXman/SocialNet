import React, {useEffect} from 'react';
import Axios from 'axios';
import { Router } from "react-router-dom";
import history from "constants/history";
import { Routes as RoutesItems } from "routes/routes";
import Routes from "components/common/Routes/Routes";
import ContentArea from "components/common/ContentArea/ContentArea";
import LoginPage from "components/pages/LoginPage/LoginPage";
import User from "components/common/User/User";
import {isAuthenticated, logout} from "service/auth";

import styles from './App.module.scss';
import {fetchProfileDataAction} from "../../store/common/profile/actionCreators";
import {useDispatch} from "react-redux";
import useSocket from "../../hooks/socket";

if (window.localStorage.uathToken) {
    Axios.defaults.headers = {
        'Authorization': 'Token ' + window.localStorage.uathToken,
        'Content-Type': 'application/json'
    }
}

const App = () => {
    const dispatch = useDispatch();
    useSocket();

    useEffect(() => {
        if (isAuthenticated()) {
            dispatch(fetchProfileDataAction());
        }
    }, [])

    if (!isAuthenticated()) {
        return (
            <LoginPage />
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
                        <div className={styles.Routes}>
                            <Routes items={RoutesItems}/>
                        </div>
                        <div className={styles.ContentArea}>
                            <ContentArea/>
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    )
};

export default App;
