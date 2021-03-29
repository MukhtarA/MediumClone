import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
