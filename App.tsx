// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpScreen from './src/Screen/OtpScreen';
import Header from './src/Screen/Header';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{
            headerShown: true,
            header: ({navigation, route}) => <Header navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
