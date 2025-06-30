import { MaterialIcons } from '@expo/vector-icons';
import { router, Stack } from "expo-router";
import { Pressable } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ headerTitle: "Home" }} 
      />
      <Stack.Screen 
        name="login" 
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} hitSlop={10} style={{ marginLeft: 8 }}>
              <MaterialIcons name="chevron-left" size={32} color="#ff6f91" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen 
        name="signup" 
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} hitSlop={10} style={{ marginLeft: 8 }}>
              <MaterialIcons name="chevron-left" size={32} color="#ff6f91" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
