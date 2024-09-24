import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { db } from '../firebase';  // Hent Firestore

export default function StudentSearch() {
  const [exam, setExam] = useState('');
  const [tutors, setTutors] = useState([]);

  const handleSearch = () => {
    // Søgning efter tutorer baseret på eksamen
    db.collection('tutors')
      .where('subjects', '==', exam)
      .get()
      .then((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });
        setTutors(results);
      })
      .catch((error) => {
        alert('Error getting tutors: ' + error.message);
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
