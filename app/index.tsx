import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hello to your new app</Text>
      <TouchableOpacity style={styles.login} activeOpacity={0.8}>
        <Link href="/login" style={styles.loginText}>Log In</Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signup} activeOpacity={0.8}>
        <Link href="/signup" style={styles.signupText}>Sign Up</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },
  title: {
    color: '#ff6f91',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
  },
  login: {
    borderRadius: 30,
    width: 280,
    height: 45,
    backgroundColor: '#ff6f91',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signup: {
    borderRadius: 30,
    width: 280,
    height: 45,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ff6f91',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#ff6f91',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
