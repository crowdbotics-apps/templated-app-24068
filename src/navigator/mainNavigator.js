import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile202321Navigator from '../features/UserProfile202321/navigator';
import BlankScreen20202261Navigator from '../features/BlankScreen20202261/navigator';
import Settings196724Navigator from '../features/Settings196724/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile202321: { screen: UserProfile202321Navigator },
BlankScreen20202261: { screen: BlankScreen20202261Navigator },
Settings196724: { screen: Settings196724Navigator },

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
