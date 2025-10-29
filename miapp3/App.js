import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  // Estados para los inputs
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [cedula, setCedula] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');

 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bienvenido al ITQ</Text>

      <Image
        source={require('./assets/itq.png')} 
        style={styles.itqImage}
      />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre 1"
          value={nombre1}
          onChangeText={setNombre1}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre 2"
          value={nombre2}
          onChangeText={setNombre2}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido 1"
          value={apellido1}
          onChangeText={setApellido1}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido 2"
          value={apellido2}
          onChangeText={setApellido2}
        />
        <TextInput
          style={styles.input}
          placeholder="Cédula"
          value={cedula}
          onChangeText={setCedula}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={direccion}
          onChangeText={setDireccion}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#0aec8eff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  itqImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#ffffffaa',
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  input: {
    height: 50,
    borderColor: '#0aec8eff',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0d9f9c',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
