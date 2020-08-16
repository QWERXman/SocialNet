import { RoutesEntity } from "../entities/Routes"
import { PROFILE, NEWS, FRIENDS, MESSAGES } from '../constants/routes'

import News from "../components/pages/News/News"
import Profile from "../components/pages/ProfilePage/ProfilePage"
import Friends from "../components/pages/FriendsPage/FriendsPage"
import Messages from "../components/pages/Messages/Messages"
import {
    CommentOutlined,
    SmileOutlined,
    TeamOutlined,
    UnorderedListOutlined
} from "@ant-design/icons/lib";

export const Routes: RoutesEntity[] = [{
    id: 0,
    text: 'Profile',
    icon: SmileOutlined,
    component: Profile,
    path: PROFILE
}, {
    id: 1,
    text: 'News',
    icon: UnorderedListOutlined,
    component: News,
    path: NEWS
}, {
    id: 2,
    text: 'Friends',
    icon: TeamOutlined,
    component: Friends,
    path: FRIENDS
}, {
    id: 3,
    text: 'Messages',
    icon: CommentOutlined,
    component: Messages,
    path: MESSAGES
}]
