import {createNavigationApp, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/Login/index';
import Main from '../screens/Main/index';

export default () => {
  createNavigationApp(
    createSwitchNavigator({
      Login,
      Main,
    }),
  );
};
