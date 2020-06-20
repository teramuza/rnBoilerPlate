//@flow

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from './Screen.config';
import Routes from './Routes';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName={Routes.MainStack.ExampleScreen}>
    <Stack.Screen
      name={Routes.MainStack.ExampleScreen}
      component={ExampleScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
