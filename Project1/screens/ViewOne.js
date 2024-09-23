import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

export default function ViewOne({ navigation }) {
  const [data, setData] = useState(null);  // Brug af state til at gemme API-data
  const [loading, setLoading] = useState(true);  // Brug af state til at håndtere loading

  useEffect(() => {  // useEffect kaldes, når komponenten loades første gang
    fetch('https://randomuser.me/api/')  // Henter data fra API
      .then((response) => response.json())
      .then((result) => {
        setData(result.results[0]);  // Sætter dataen i state
        setLoading(false);  // Stopper loading-indikatoren
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (  // Viser loading-indikator, hvis data ikke er hentet endnu
        <>
          <Text>{data.name.first} {data.name.last}</Text>  // Viser navn fra API-dataen
          <Text>Email: {data.email}</Text>  // Viser e-mail fra API-dataen
        </>
      )}
      <Button title="Back to Home" onPress={() => navigation.goBack()} />  // Knap til at gå tilbage til HomeScreen
    </View>
  );
}
