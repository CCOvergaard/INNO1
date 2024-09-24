import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

export default function ViewOne({ navigation }) {
  const [data, setData] = useState(null);  // Brug af state til at gemme API-data
  const [loading, setLoading] = useState(true);  // Brug af state til at håndtere loading

  // useEffect kaldes, når komponenten loades første gang
  useEffect(() => {
    // Henter data fra API
    fetch('https://randomuser.me/api/') // standard API fetch
      .then((response) => response.json())
      .then((result) => {
        setData(result.results[0]);  // Sætter dataen i state
        setLoading(false);  // Stopper loading
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        // Viser loading, hvis data ikke er hentet endnu
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {/* Viser navn fra API'et */}
          <Text>{data.name.first} {data.name.last}</Text>
          {/* Viser e-mail fra API'et */}
          <Text>Email: {data.email}</Text>
        </>
      )}
      {/* Knap til at gå tilbage til HomeScreen */}
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}
