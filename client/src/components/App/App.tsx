import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch, Router } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';

interface IAppProps {
}

interface IAppState {
}

class App extends Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <div className="HeaderLine"></div>
                <Container>
                    <div className="Header">
                        <Icon name='handshake outline' className="HeaderIcon" />
                        <div className="AppName">Friends</div>
                        {/*<Login tryLogin={tryLogin} logout={logout}/>*/}
                    </div>
                    {/*<Router history={history}>*/}
                    {/*    <div className="MainContainer">*/}
                    {/*        <Routes*/}
                    {/*            items={this.props.items}*/}
                    {/*            changeRoute={this.props.changeRoute}/>*/}
                    {/*        <div className="ContentArea">*/}
                    {/*            <Switch>*/}
                    {/*                {*/}
                    {/*                    RoutesItems.map((route: RoutesEntitie) => (*/}
                    {/*                        <Route*/}
                    {/*                            path={route.path}*/}
                    {/*                            component={route.component}*/}
                    {/*                            key={route.path} />))*/}
                    {/*                }*/}
                    {/*            </Switch>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Router>*/}
                </Container>
            </div>
        );
    }
}


const mapStateToProps = () => ({
    // items: RoutesItems
});

const mapDispatchToProps = (dispatch: any) => ({
    // ...bindActionCreators(newsActions, dispatch),
    // ...bindActionCreators(routesActions, dispatch),
});
export default App
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(App);
