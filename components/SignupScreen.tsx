import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSignup = () => {
   if ( fullName && phone && email && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all field.');
    }
  };
  const handleClear = () => {
    setFullName(''),
    setPhone(''),
    setEmail('');
    setPassword('');
    setSubmitted(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new account</Text>
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="E-mail Address"
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
      <Pressable style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </Pressable>
       <Pressable style= {[styles.clearButton]} onPress={handleClear}>
            <Text style={styles.signupButtonText}>Clear</Text>
            </Pressable>

      {submitted && (
                <View style={{marginTop: 50}}>
                <Text style={{fontWeight: 'bold'}}>Submitted Information </Text>
                  <Text>Email: {fullName}</Text>
                  <Text>Password: {phone}</Text>
                  <Text>Email: {email}</Text>
                  <Text>Password: {password}</Text>
                </View>
              )}
    </View>
  );
};

export default SignupScreen;

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
  clearButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 14,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 18,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#ff6f91',
    paddingVertical: 14,
    borderRadius: 24,
    marginTop: 8,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});