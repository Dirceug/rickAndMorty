import React, {Component, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {
  Keyboard,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Character extends Component {
  state = {
    setPersonagens: '',
    personagens: [],
    loading: false,
  };

  getCharacteres = async () => {
    const {personagens, setPersonagens} = this.state;
    const response = await api.get(`/character/`);
    const data = {
      imagem: response.data.image,
      nome: response.data.name
    }
    this.state({
      personagens: [...presonagens, data],
      setPersonagens: ''
    });
    console.log(data)
  };



  async componentDidMount() {
    const characteres = await AsyncStorage.getItem('characteres');

    if (characteres) {
      this.setState({characteres: JSON.parse(characteres)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {characteres} = this.state;

    if (prevState.characteres !== characteres) {
      await AsyncStorage.setItem('characteres', JSON.stringify(characteres));
    }
  }

  
  render() {
    const {characteres, newCharacter, loading} = this.state;
    var teste1 = typeof setPersonagens;
    var teste2 = typeof personagens;
    var teste3 = typeof data;
    var teste4 = typeof response;
    var teste5 = typeof characteres;
    var teste6 = JSON.stringify(characteres) 
    console.log('setPersonagens: ' + teste1);
    console.log('personagens: ' + teste2);
    console.log('data: ' + teste3);
    console.log('response: ' + teste4);
    console.log('PQP');
    console.log(newCharacter);
    console.log('characteres: ' + teste5);
    console.log('stringfy: ' + teste6);
    const testando = "teste do caralho"

    return (
      // <Container>
      <View>

        <Text>{teste5}</Text>
      </View>
      /* <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newCharacter}
            onChangeText={text => this.setState({newCharacter: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCharacter}
          />
          <SubmitButton loading={loading} onPress={this.handleAddCharacter}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={characteres}
          keyExtractor={character => character.login}
          renderItem={({item}) => (
            <Character>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton
                onPress={() => {
                  this.props.navigation.navigate('character', {character: item});
                }}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
              <ProfileButton
                onPress={() => {
                  this.setState({
                    characteres: this.state.characteres.filter(
                      character => character.login !== item.login,
                    ),
                  });
                }}
                style={{backgroundColor: '#FFC0CB'}}>
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
            </Character>
          )}
        /> */
      // </Container>
    );
  }
}
