import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import skaerm1 from './screens/skaerm1';
import skaerm2 from './screens/skaerm2';

const Stack = createStackNavigator(); // Opret en Stack Navigator

export default function App() {
  return (
    // Omgiver hele appen med NavigationContainer
    <NavigationContainer>
      {/* Definerer de forskellige skærme i stacken */}
      <Stack.Navigator initialRouteName="Home">
        {/* Hjemmeskærmen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Skærm 1 */}
        <Stack.Screen name="skaerm1" component={skaerm1} />
        {/* Skærm 2 */}
        <Stack.Screen name="skaerm2" component={skaerm2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
