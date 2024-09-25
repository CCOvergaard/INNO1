import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Importer NavigationContainer for at håndtere navigationen
import { createStackNavigator } from "@react-navigation/stack"; // Importer createStackNavigator til at lave en staknavigator
import HomeScreen from "./screens/HomeScreen"; // Importer HomeScreen komponenten
import TutorSignUp from "./screens/TutorSignup"; // Importer TutorSignUp komponenten
import StudentSearch from "./screens/StudentSearch"; // Importer StudentSearch komponenten

// Opret en staknavigator
const Stack = createStackNavigator();

// Hovedkomponenten App, der indeholder navigationen
export default function App() {
  return (
    // NavigationContainer er roden til navigationstræet, og den skal omslutte alle navigationskomponenter
    <NavigationContainer>
      {/* Stack.Navigator indeholder skærmene og håndterer staknavigering */}
      <Stack.Navigator initialRouteName="Home">
        {/* Definerer den første skærm i stakken (HomeScreen) */}
        <Stack.Screen
          name="Home" // Navn på skærmen
          component={HomeScreen} // Komponenten der skal vises, når denne skærm er aktiv
        />

        {/* Definerer skærmen for TutorSignUp */}
        <Stack.Screen name="TutorSignUp" component={TutorSignUp} />

        {/* Definerer skærmen for StudentSearch */}
        <Stack.Screen name="StudentSearch" component={StudentSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
