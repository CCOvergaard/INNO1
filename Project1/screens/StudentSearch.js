import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database'; // Firebase Realtime Database-moduler
import { db } from '../firebase';  // Importér Realtime Database-instansen fra firebase.js

// Hovedkomponenten til studenter-søgning
export default function StudentSearch() {
  // State til at gemme det indtastede eksamensnavn og søge resultaterne af tutorer
  const [exam, setExam] = useState('');  // State til eksamen (det brugeren indtaster)
  const [tutors, setTutors] = useState([]);  // State til at holde resultatet af tutorer fundet i databasen

  // Funktion der udføres, når brugeren trykker på 'Search'-knappen
  const handleSearch = () => {
    // Opretter en forespørgsel (query) til databasen der sorterer efter 'subjects' og finder de tutorer,
    // som har 'subjects' der matcher det eksamensnavn brugeren har indtastet
    const examQuery = query(ref(db, 'tutors'), orderByChild('subjects'), equalTo(exam));

    // Henter data fra Realtime Database baseret på forespørgslen
    onValue(examQuery, (snapshot) => { 
      const results = [];
      // Gennemgår alle de fundne resultater (børn af 'tutors' noden) og tilføjer dem til results array
      snapshot.forEach((childSnapshot) => {
        results.push(childSnapshot.val());
      });
      // Opdaterer state med de fundne tutorer
      setTutors(results);
    }, {
      // Angiver, at forespørgslen kun skal udføres én gang
      onlyOnce: true
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Find a Tutor</Text>
      {/* Inputfelt for brugeren til at indtaste eksamensnavn */}
      <TextInput placeholder="Enter exam" value={exam} onChangeText={setExam} />
      {/* Knappen der udfører søgningen */}
      <Button title="Search" onPress={handleSearch} />
      
      {/* Viser listen af tutorer, hvis der er nogen, ellers viser en besked om at ingen tutorer blev fundet */}
      {tutors.length > 0 ? (
        // Mapper igennem alle de fundne tutorer og viser dem på skærmen
        tutors.map((tutor, index) => (
          <View key={index}>
            <Text>{tutor.name} - {tutor.subjects}</Text>
            <Text>Rate: {tutor.rate}</Text>
          </View>
        ))
      ) : (
        // Hvis der ikke er nogen tutorer fundet vises denne tekst
        <Text>No tutors found</Text>
      )}
    </View>
  );
}
