import React from 'react';
import { Button, View, Text } from 'react-native';

// Hovedkomponenten til startskærmen
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Tekst, der vises på startskærmen */}
      <Text>Welcome to Tutormatch!</Text>

      {/* Knap til at navigere brugeren til siden for tutor tilmelding */}
      <Button
        title="Sign Up as Tutor"
        onPress={() => navigation.navigate('TutorSignUp')}  // Navigerer til TutorSignUp-skærmen
      />

      {/* Knap til at navigere brugeren til siden for at finde en tutor */}
      <Button
        title="Find a Tutor"
        onPress={() => navigation.navigate('StudentSearch')}  // Navigerer til StudentSearch-skærmen
      />
    </View>
  );
}
