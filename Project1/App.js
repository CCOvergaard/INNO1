import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TutorSignUp from './screens/TutorSignup';
import StudentSearch from './screens/StudentSearch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TutorSignUp" component={TutorSignUp} />
        <Stack.Screen name="StudentSearch" component={StudentSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
