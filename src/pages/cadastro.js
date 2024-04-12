import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  const navigation = useNavigation();

  const handleCadastro = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#f0e14a"
        inputMode="text"
        autoCapitalize="words"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#f0e14a"
        value={telefone}
        inputMode="tel"
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#f0e14a"
        secureTextEntry={true}
        value={cpf}
        inputMode="decimal"
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#f0e14a"
        secureTextEntry={true}
        value={email}
        inputMode="email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Curso"
        placeholderTextColor="#f0e14a"
        value={curso}
        inputMode="text"
        autoCapitalize="words"
        onChangeText={setCurso}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Finalizar Cadastro</Text>
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

export default Cadastro;
