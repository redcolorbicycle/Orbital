import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // TODO: Implement login logic here (firebase), now is dummy
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      Alert.alert(
        'Invalid credentials',
        'Would you like to register as a member or reset your password?',
        [
          { text: 'Register', onPress: handleRegister },
          { text: 'Forgot Password', onPress: handleForgotPassword },
        ]
      );
    }
  };

  const handleRegister = () => {
    // TODO: Implement login logic here (firebase), now is dummy
    Alert.alert('Registration', 'Registration functionality is not implemented yet.');
  };

  const handleForgotPassword = () => {
    // TODO: Implement login logic here (firebase), now is dummy
    Alert.alert('Forgot Password', 'Forgot password functionality is not implemented yet.');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FocusFlow</Text>
      {!loggedIn ? (
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Login" onPress={handleLogin} />
          <Text style={styles.registerText}>Not a member?</Text>
          <Button title="Register" onPress={handleRegister} />
        </View>
      ) : (
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Logged in as {username}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  loginContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  loggedInContainer: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  registerText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  loggedInText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default App;
