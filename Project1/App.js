import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ViewOne from './screens/ViewOne';
import ViewTwo from './screens/ViewTwo';

const Stack = createStackNavigator(); // Opret en Stack Navigator

export default function App() {
  return (
    <NavigationContainer>  // Omgiver hele appen med NavigationContainer
      <Stack.Navigator initialRouteName="Home">  // Definerer de forskellige skærme i stacken
        <Stack.Screen name="Home" component={HomeScreen} />  // Hjemmeskærmen
        <Stack.Screen name="ViewOne" component={ViewOne} />  // Skærm 1
        <Stack.Screen name="ViewTwo" component={ViewTwo} />  // Skærm 2
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// alle de steder hvor kommentarerne er vide tror jeg er fordi formatering er gået galt, skal fikses for at koden kører korrekt