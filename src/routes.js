import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Character from './pages/character';
import Login from './pages/login';
import User from './pages/user';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'LOGIN',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#44281d',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f0e14a',
            },
          }}
        />
        <Stack.Screen
          name="character"
          component={Character}
          options={{
            title: 'Personagens',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#44281d',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f0e14a',
            },
          }}
        />
        <Stack.Screen
          name="user"
          component={User}
          options={{
            title: 'User',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#44281d',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f0e14a',
            },
          }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: 'Cadastro',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#44281d',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f0e14a',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
