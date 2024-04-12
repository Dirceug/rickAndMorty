import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === '' && password === '') {
      navigation.navigate('character');
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };

  const handleCadastro = () => {
    if (email === '' && password === '') {
      navigation.navigate('cadastro');
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#f0e14a"
        inputMode="email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#f0e14a"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4a788',
  },
  input: {
    borderWidth: 3,
    borderColor: '#97ce4c',
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#44281d',
    borderRadius: 15,
    padding: 10,
    marginTop: 50,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f0e14a',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Login;
