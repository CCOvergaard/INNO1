import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { ref, set, push } from 'firebase/database'; // Importér Realtime Database-modulerne
import { db } from '../firebase';  // Importér Realtime Database fra din firebase.js

export default function TutorSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subjects, setSubjects] = useState('');
  const [rate, setRate] = useState('');

  const handleSignUp = () => {
    // Opretter reference til tutorer i databasen
    const tutorRef = ref(db, 'tutors/');
    const newTutorRef = push(tutorRef);

    set(newTutorRef, {
      name: name,
      email: email,
      subjects: subjects,
      rate: rate,
    })
      .then(() => {
        alert('Tutor signed up successfully!');
      })
      .catch((error) => {
        alert('Error adding tutor: ' + error.message);
      });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Tutor Sign-Up</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Subjects/Exams" value={subjects} onChangeText={setSubjects} />
      <TextInput placeholder="Rate per hour" value={rate} onChangeText={setRate} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}
