import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.pink}>Say hello to your new app</Text>
      <TouchableOpacity style={styles.login}>
       <Link href="/login">Log in</Link>
       </TouchableOpacity>

       <TouchableOpacity style={styles.signup}>
       <Link href="/signup">Signup</Link>
       </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pink: {
    color: '#ffc0cb',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  login: {
    borderRadius: 30,
    width: 300,
    padding: 10,
    backgroundColor: '#ffc0cb',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    color: 'white',
  },
  signup: {
    borderRadius: 30,
    width: 300,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
  },
});