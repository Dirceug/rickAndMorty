import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [pesquisa, setPesquisa] = useState([]);
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character',
      );
      setCharacters(response.data.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getSavedCharacters = async () => {
      const savedData = await AsyncStorage.getItem('characters');
      if (savedData) {
        setPersonagens(JSON.parse(savedData));
      }
    };

    getSavedCharacters();
  }, []);

  useEffect(() => {
    const filtrarPersonagens = () => {
      const pesquisarTermo = pesquisa;
      //   const pesquisarTermo = pesquisa.toLowerCase();
      const filtrado = characters.filter(character => {
        // return character.name.toLowerCase().includes(pesquisarTermo);
        return character.name.includes(pesquisarTermo);
      });
      setPersonagens(filtrado);
    };

    filtrarPersonagens();
  }, [characters, pesquisa]);

  const adicionarPersonagem = async () => {
    if (!personagens.length) {
      alert('Personagem não localizado');
      return;
    }

    const novosPersonagens = personagens[0];
    const personagensCadastrados = (await AsyncStorage.getItem('characters')) || [];
    const atualizarPersonagens = [...personagensCadastrados, novosPersonagens];

    // await AsyncStorage.setItem('characters', JSON.stringify(atualizarPersonagens));
    // setPersonagens([]);
    // setPesquisa('');

    await AsyncStorage.setItem('characters', JSON.stringify(atualizarPersonagens));
    setPersonagens([novosPersonagens]);
    setPesquisa('');
  };

  const deletarPersonagem = async characterId => {
    const personagensCadastrados = (await AsyncStorage.getItem('characters')) || [];
    const atualizarPersonagens = personagensCadastrados.filter(
      character => character.id !== characterId,
    );

    await AsyncStorage.setItem('characters', JSON.stringify(atualizarPersonagens));
    setPersonagens(atualizarPersonagens);
  };

  const renderItem = ({item}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItens: 'center',
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#97ce4c',
        backgroundColor: '#e4a788',
      }}>
      <Image
        source={{uri: item.image}}
        style={{
          width: 150,
          height: 200,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          paddingLeft: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            marginTop: 1,
            color: '#f0e14a',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 5,
          }}>
          {item.status} - {item.species}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            margin: 5,
          }}>
          Ultima localização conhecida
        </Text>
        <Text>{item.location.name}</Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            margin: 5,
          }}>
          Origem
        </Text>
        <Text>{item.origin.name}</Text>
        {/* <Button title="Deletar" onPress={() => deletarPersonagem(item.id)} /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => deletarPersonagem(item.id)}>
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#97ce4c',
        backgroundColor: '#e4a788',
      }}>
      <View
        style={{
          alignItems: 'center',
          borderBottomWidth: 2,
          borderColor: '#97ce4c',
          backgroundColor: '#e4a788',
        }}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Personagem"
          placeholderTextColor="#f0e14a"
          value={pesquisa}
          inputMode="text"
          onChangeText={setPesquisa}
        />
        <TouchableOpacity style={styles.button} onPress={adicionarPersonagem}>
          <Text style={styles.buttonText}>Adicionar Personagem</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 10,
    marginBottom: 50,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f0e14a',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Character;
