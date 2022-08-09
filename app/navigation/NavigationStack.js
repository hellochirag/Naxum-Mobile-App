import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppConstants } from '../constants';
import {
  LoginScreen,
  SettingsScreen
} from '../modules/index';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName={AppConstants.LOGIN}>
      <Stack.Screen name={AppConstants.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

const AppContainer = StackScreen;

export default AppContainer;
