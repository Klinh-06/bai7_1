import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {

  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validatePhone = (value) => {
    setPhone(value);

    const regex = /^0\d{9}$/;

    if (regex.test(value)) {
      setError('');
      setIsValid(true);
    } else {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
      setIsValid(false);
    }
  };

  const goHome = () => {
    if (isValid) {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={validatePhone}
      />

      {error !== '' && (
        <Text style={styles.error}>{error}</Text>
      )}

      {isValid !== null && (
        <Text style={styles.status}>
          Số điện thoại hiện tại: {isValid ? 'Hợp lệ' : 'Không hợp lệ'}
        </Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={goHome}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Chào mừng đến với Trang Chủ</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Đăng nhập" }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    fontSize: 16
  },

  error: {
    color: 'red',
    marginTop: 5
  },

  status: {
    marginTop: 10,
    fontSize: 15
  },

  button: {
    marginTop: 30,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  homeText: {
    fontSize: 26,
    fontWeight: 'bold'
  }

});
