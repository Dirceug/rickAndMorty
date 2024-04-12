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
    newCharacter: '',
    character: [],
    loading: false,
  };

  async componentDidMount() {

    const characteres = await AsyncStorage.getItem('character');

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

  // handleAddCharacter = async () => {
  //   try {
  //     const {characteres, newCharacter} = this.state;
  //     this.setState({loading: true});

  //     const response = await api.get(`/characteres/${newCharacter}`);

  //     if (
  //       characteres.find(character => character.login === response.data.login)
  //     ) {
  //       alert('Usuário já adicionado!');
  //       this.setState({
  //         loading: false,
  //         newCharacter: '',
  //       });
  //       return;
  //     }

  //     const data = {
  //       avatar: response.data.image,
  //       name: response.data.name,
  //       login: response.data.status,
  //       bio: response.data.location.name,
  //       episodio: response.data.episode[0],
  //     };

  //     this.setState({
  //       characteres: [...characteres, data],
  //       newCharacter: '',
  //       loading: false,
  //     });

  //     Keyboard.dismiss();
  //   } catch (error) {
  //     alert('Usuário não encontrado!');
  //     this.setState({
  //       loading: false,
  //       newCharacter: '',
  //     });
  //     Keyboard.dismiss();
  //   }
  // };

  render() {
    const {characteres, newCharacter, loading} = this.state;
    var teste1 = typeof newCharacter;
    var teste2 = typeof api;
    var teste3 = typeof character;
    var teste4 = typeof loading;
    var teste5 = typeof characteres;
    console.log('newCharacter: ' + teste1);
    console.log('api: ' + teste2);
    console.log('character: ' + teste3);
    console.log('loading: ' + teste4);
    console.log('PQP');
    console.log(newCharacter);
    console.log('characteres: ' + teste5);

    return (
      // <Container>
      <View>

        <Text>Teste</Text>
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
