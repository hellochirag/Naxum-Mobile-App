import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppConstants } from '../constants';
import {
  LoginScreen,
  ProfileScreen,
  DashboardScreen
} from '../modules/index';
import { DrawerScreen } from '../components';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        headerShown: false
      }}
      drawerContent={(props) => <DrawerScreen {...props} />}
      useLegacyImplementation={true}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}


function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName={AppConstants.LOGIN}>
        <Stack.Screen name={AppConstants.LOGIN} component={LoginScreen} />
      <Stack.Screen name={AppConstants.PROFILE} component={ProfileScreen} />
      
      <Stack.Screen
        name={'Root'}
        component={Root}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const AppContainer = StackScreen;

export default AppContainer;
