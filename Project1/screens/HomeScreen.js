import React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Tutormatch!</Text>
      <Button
        title="Sign Up as Tutor"
        onPress={() => navigation.navigate('TutorSignUp')}  // Navigerer til Tutor Sign-Up
      />
      <Button
        title="Find a Tutor"
        onPress={() => navigation.navigate('StudentSearch')}  // Navigerer til Student Search
      />
    </View>
  );
}
