import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const hesapOlustur = async () => {
    setIsLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await response.user.updateProfile({ displayName: name });
      setIsLoading(false);
      Alert.alert('Chat Uygulaması', 'Hesap Oluştu.');
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.stil}>
      <TextInput
        style={styles.input}
        label="Kullanici Adi"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        label="E Mail Adresiniz"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        label="Sifreniz"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 25,
        }}>
        <Button
          mode="contained"
          onPress={() => hesapOlustur()}
          loading={isLoading}>
          Kayıt Ol
        </Button>
        <Button compact>Giriş Yap</Button>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  stil: {
    backgroundColor: '#8db096',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    marginTop: 25,
    borderRadius: 8, // borderRadius değeri
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
    marginBottom: 12,
    shadowRadius: 20,
    elevation: 4,
    backgroundColor: 'white',
  },
});
