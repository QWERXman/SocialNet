import React, { Component } from "react";
import { Button } from "antd";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as editProfileActions from './EditProfile/actions';
// import * as profileNewsListActions from './ProfileNewsList/actions';
// import * as profileActions from './actions';

// import { Profile as ProfileService } from '../../service/profile'
// import EditProfile from './EditProfile/EditProfile'
// import CreateNews from './CreateNews/CreateNews'
// import ProfileNewsList from './ProfileNewsList/ProfileNewsList'
// import { formatUserDate, toDate } from 'helpers/date'
// import { ProfileEntitie } from "../../entities/Profile";
// import { NewsService } from "service/news";
// import { NewsEntitie } from "entities/News";

import './Profile.css'

export default () => (<div>123</div>)
// interface IProfileProps extends ProfileEntitie {
    // editProfileData: Function,
    // setMyNewsList: Function,
    // newsList: NewsEntitie[]
// }

interface IProfileProps {
    // editProfileData: Function,
    // setMyNewsList: Function,
    // newsList: NewsEntitie[]
}

export class Profile extends Component<IProfileProps, {}> {

    constructor(props: IProfileProps, state: {}) {
        super(props, state);
    }

    async componentDidMount() {
        // ProfileService.getCurrent().then(data => data ? this.props.editProfileData(data) : null)
        // NewsService.getMyNews().then(data => this.props.setMyNewsList(data))
    }

    public render() {
        return (
            <div className="Profile">qwe
                {/*<Image src={this.props.avatar} width="200" height="200" wrapped ui={false} />*/}
                <div className="FlexGrow-1">
                    <div className="Profile__Data">
                        <div className="Flexbox">
                            {/*<div className="Profile-Data__UserName">{this.props.name} {this.props.secondName}</div>*/}
                            <div className="Profile-Data__EditBtn">
                                {/*<EditProfile*/}
                                {/*    editProfileData={this.props.editProfileData}*/}
                                {/*    name={this.props.name}*/}
                                {/*    secondName={this.props.secondName}/>*/}
                            </div>
                        </div>

                        <div className="Profile-Data__Separator"></div>

                        <div className="Profile-Data__UserData">
                            <div className="Profile-Data-UserData__Fields">
                                <span className="Profile-Data-UserData-Fields__Item">Status:</span>
                                <span className="Profile-Data-UserData-Fields__Item">Birthday </span>
                                <span className="Profile-Data-UserData-Fields__Item">Sity:</span>
                                <span className="Profile-Data-UserData-Fields__Item">Email:</span>
                            </div>
                            <div className="Profile-Data-UserData__Data">
                                {/*<div className="Profile-Data-UserData-Data__Item">{this.props.status}</div>*/}
                                {/*<div className="Profile-Data-UserData-Data__Item">{formatUserDate(toDate(this.props.birthday, '-'))}</div>*/}
                                {/*<div className="Profile-Data-UserData-Data__Item">{this.props.city}</div>*/}
                                {/*<div className="Profile-Data-UserData-Data__Item">{this.props.email}</div>*/}
                            </div>
                        </div>
                    </div>

                    <div className="Profile__Posts">
                        {/*<CreateNews />*/}
                        {/*<ProfileNewsList className="Profile-Posts__ProfileNewsList"*/}
                        {/*                 newsList={this.props.newsList}/>*/}
                    </div>
                </div>
            </div>
        );
    }
}


// const mapStateToProps = (state: any) => state.profile
// const mapDispatchToProps = (dispatch: any) => ({
//     ...bindActionCreators(profileNewsListActions, dispatch),
//     ...bindActionCreators(editProfileActions, dispatch),
//     ...bindActionCreators(profileActions, dispatch),
// });

// export default Profile
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Profile);
