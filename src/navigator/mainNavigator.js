import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile97606Navigator from '../features/UserProfile97606/navigator';
import Tutorial97605Navigator from '../features/Tutorial97605/navigator';
import NotificationList97577Navigator from '../features/NotificationList97577/navigator';
import Settings97576Navigator from '../features/Settings97576/navigator';
import Settings97568Navigator from '../features/Settings97568/navigator';
import UserProfile97566Navigator from '../features/UserProfile97566/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile97606: { screen: UserProfile97606Navigator },
Tutorial97605: { screen: Tutorial97605Navigator },
NotificationList97577: { screen: NotificationList97577Navigator },
Settings97576: { screen: Settings97576Navigator },
Settings97568: { screen: Settings97568Navigator },
UserProfile97566: { screen: UserProfile97566Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
