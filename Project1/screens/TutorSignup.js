import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { db } from '../firebase';  // Hent Firestore

export default function TutorSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subjects, setSubjects] = useState('');
  const [rate, setRate] = useState('');

  const handleSignUp = () => {
    // Gemmer tutor-data i Firestore
    db.collection('tutors').add({
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
