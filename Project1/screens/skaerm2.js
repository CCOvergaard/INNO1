import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ViewTwo({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is View Two!</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}
