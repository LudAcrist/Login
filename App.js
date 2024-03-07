import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleExpedienteChange = (text) => {
    setExpediente(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (password.length >= 8) {
      Alert.alert('Usuario autenticado');
    } else {
      Alert.alert('La contraseña debe tener al menos 8 caracteres');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder='Username'
          keyboardType='numeric'
          maxLength={6}
          onChangeText={handleExpedienteChange}
          value={expediente}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder='Password'
          maxLength={16}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleSubmit} color='#803778' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4A0B6'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '60%',
    borderColor: '#D7C0CE',
    borderRadius: 5,
    marginVertical: 10,
    padding: 18,
    backgroundColor: '#D7C0CE'
  },
  inputText: {
    color: 'black'
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
