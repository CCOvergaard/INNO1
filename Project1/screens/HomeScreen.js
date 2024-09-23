import React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {  // Navigation objektet gives af Navigatoren
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Screen!</Text>
      <Button
        title="Go to View One"
        onPress={() => navigation.navigate('ViewOne')}  // Navigerer til ViewOne
      />
      <Button
        title="Go to View Two"
        onPress={() => navigation.navigate('ViewTwo')}  // Navigerer til ViewTwo
      />
    </View>
  );
}
