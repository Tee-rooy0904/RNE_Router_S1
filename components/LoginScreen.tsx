import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    if ( email && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all field.');
    }
    console.log('Logging in with:', email, password);
  };
  const handleClear = () => {
    setEmail('');
    setPassword('');
    setSubmitted(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        placeholder="E-mail or phone number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#999"
      />
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </Pressable>
      <Text style={styles.orText}>OR</Text>
      <Pressable style= {[styles.clearButton]} onPress={handleClear}>
      <Text style={styles.loginButtonText}>Clear</Text>
      </Pressable>
      <Pressable style={styles.fbButton} onPress={() => {}}>
        <Text style={styles.fbButtonText}>Login with Facebook</Text>
      </Pressable>
      
      {submitted && (
          <View style={{marginTop: 50}}>
          <Text style={{fontWeight: 'bold'}}>Submitted Information </Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
          </View>
        )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 32,
    fontWeight: 'bold',
    color: '#ff6f91',
    textAlign: 'left',
    marginLeft: 4,
  },
  input: {
    height: 48,
    borderColor: '#bbb',
    borderWidth: 1.5,
    borderRadius: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#ff6f91',
    paddingVertical: 14,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 18,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 14,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 18,
    alignItems: 'center',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 8,
    fontSize: 15,
    fontWeight: '500',
  },
  fbButton: {
    backgroundColor: '#4267B2',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  fbButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});