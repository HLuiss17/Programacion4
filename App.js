import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> App 01 </Text>

      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/MiFoto.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Luis Pilaguano</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        placeholderTextColor="#555"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#0aec8eff', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#ffffffaa', 
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, 
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 2,
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#ffffffcc', 
    fontSize: 16,
    color: '#000',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default App;
