import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen,
} from './screens';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faEnvelope,
  faSnowboarding,
  faList,
  faChartBar,
  faPoll,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        drawerIcon: ({tintColor}) => (
          <FontAwesomeIcon
            icon={faUser}
            size={16}
            color={tintColor}></FontAwesomeIcon>
        ),
      },
    },
    MessageScreen: {
      screen: MessageScreen,
      navigationOptions: {
        title: 'Message',
        drawerIcon: ({tintColor}) => (
          <FontAwesomeIcon
            icon={faEnvelope}
            size={16}
            color={tintColor}></FontAwesomeIcon>
        ),
      },
    },
    ActivityScreen: {
      screen: ActivityScreen,
      navigationOptions: {
        title: 'Activities',
        drawerIcon: ({tintColor}) => (
          <FontAwesomeIcon
            icon={faSnowboarding}
            size={16}
            color={tintColor}></FontAwesomeIcon>
        ),
      },
    },
    ListScreen: {
      screen: ListScreen,
      navigationOptions: {
        title: 'List',
        drawerIcon: ({tintColor}) => (
          <FontAwesomeIcon
            icon={faList}
            size={16}
            color={tintColor}></FontAwesomeIcon>
        ),
      },
    },
    ReportScreen: {
      screen: ReportScreen,
      navigationOptions: {
        title: 'Report',
        drawerIcon: ({tintColor}) => (
          <FontAwesomeIcon
            icon={faChartBar}
            size={16}
            color={tintColor}></FontAwesomeIcon>
        ),
      },
    },
    StatisticScreen: {
      screen: StatisticScreen,
      navigationOptions: {
        title: 'Statistic',
        drawerIcon: ({tintColor}) => (
          <FontAwesomeIcon
            icon={faPoll}
            size={16}
            color={tintColor}></FontAwesomeIcon>
        ),
      },
    },
    SignOutScreen: {
      screen: SignOutScreen,
      navigationOptions: {
        title: 'SignOut',
        drawerIcon: ({tintColor}) => (
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size={16}
            color={tintColor}></FontAwesomeIcon>
        ),
      },
    },
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: Dimensions.get('window').width * 0.85,
    hideStatusBar: true,
    contentOptions: {
      activeBackgroundColor: 'rgba(212,118,207,0.2)',
      activeTintColor: '#53115B',
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 4,
      },
    },
  },
);

export default createAppContainer(DrawerNavigator);
