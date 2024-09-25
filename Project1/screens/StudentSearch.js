import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database'; // Realtime Database-moduler
import { db } from '../firebase';  // Importér Realtime Database fra firebase.js

export default function StudentSearch() {
  const [exam, setExam] = useState('');
  const [tutors, setTutors] = useState([]);

  const handleSearch = () => {
    // Opret en søgeforespørgsel baseret på eksamen
    const examQuery = query(ref(db, 'tutors'), orderByChild('subjects'), equalTo(exam));

    onValue(examQuery, (snapshot) => {
      const results = [];
      snapshot.forEach((childSnapshot) => {
        results.push(childSnapshot.val());
      });
      setTutors(results);
    }, {
      onlyOnce: true
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Find a Tutor</Text>
      <TextInput placeholder="Enter exam" value={exam} onChangeText={setExam} />
      <Button title="Search" onPress={handleSearch} />
      {tutors.length > 0 ? (
        tutors.map((tutor, index) => (
          <View key={index}>
            <Text>{tutor.name} - {tutor.subjects}</Text>
            <Text>Rate: {tutor.rate}</Text>
          </View>
        ))
      ) : (
        <Text>No tutors found</Text>
      )}
    </View>
  );
}
