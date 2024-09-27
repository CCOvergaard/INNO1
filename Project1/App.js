import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TutorSignUp from "./screens/TutorSignup";
import StudentSearch from "./screens/StudentSearch";

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
