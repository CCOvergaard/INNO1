import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { ref, set, push } from 'firebase/database'; // Importér Firebase Realtime Database-moduler
import { db } from '../firebase';  // Importér Realtime Database-instansen fra firebase.js

// Hovedkomponenten til Tutor Sign-Up
export default function TutorSignUp() {
  // State til at gemme de oplysninger, som brugeren indtaster
  const [name, setName] = useState('');      // State til tutorens navn
  const [email, setEmail] = useState('');    // State til tutorens email
  const [subjects, setSubjects] = useState(''); // State til fag/eksamener, tutoren kan undervise i
  const [rate, setRate] = useState('');      // State til den timeløn tutoren tager

  // Funktion der håndterer tutorens sign-up når brugeren trykker på "Sign Up"-knappen
  const handleSignUp = () => {
    // Opret en reference til 'tutors' i Realtime Database, hvor data skal gemmes
    const tutorRef = ref(db, 'tutors/');
    
    // Opretter en ny post under 'tutors' ved at generere en unik nøgle
    const newTutorRef = push(tutorRef);

    // Gemmer tutorens oplysninger ved at bruge 'set' til den nye reference
    set(newTutorRef, {
      name: name,          // Gemmer tutorens navn
      email: email,        // Gemmer tutorens email
      subjects: subjects,  // Gemmer fag/eksamener tutoren kan undervise i
      rate: rate           // Gemmer timelønnen
    })
    .then(() => {
      // Viser en succesbesked når tutorens oplysninger er gemt
      alert('Tutor signed up successfully!');
    })
    .catch((error) => {
      // Viser en fejlbesked hvis noget går galt under sign-up
      alert('Error adding tutor: ' + error.message);
    });
  };

  // Returnerer UI-komponenterne til Tutor Sign-Up
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Tutor Sign-Up</Text>
      {/* Inputfelter til at indtaste tutorens navn, email, fag og timeløn */}
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Subjects/Exams" value={subjects} onChangeText={setSubjects} />
      <TextInput placeholder="Rate per hour" value={rate} onChangeText={setRate} />
      
      {/* Knap der udfører handleSignUp-funktionen når brugeren trykker på den */}
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}
