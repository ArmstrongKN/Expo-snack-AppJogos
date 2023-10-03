import React from 'react';
import { View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Jogo1 from './Jogo1';
import Jogo2 from './Jogo2';
import Jogo3 from './Jogo3';
import Home from './Home';
import Login from './Login';
import {Feather} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function Rotas(){
  return (
      <Stack.Navigator InitialRouteName="Home">
      <Stack.Screen 
      name= "Login" 
      component={Login}  
      options={{ 
      title: 'Bem vindo a Eletronic Arts',
      StackBarIcon: ({color, size}) => <Feather name='Login'color={color} size={size}/>,
      StackBarLabel:'Inicio',
      headerStyle: {
      backgroundColor: '#121212'
      },
      headerTintColor: '#FFF'
      }}/>
      <Stack.Screen 
      name= "Home" 
      component={Home} 
      options={{
      headerStyle: {
      backgroundColor: '#121212'
      },
      headerTintColor: '#FFF',
      StackBarIcon: ({color, size}) => <Feather name='Home'color={color} size={size}/>,
      StackBarLabel:'Inicio'
      }}/>
      <Stack.Screen 
      name= "Jogo1" 
      component={Jogo1} 
      options={{
      headerShown: false , title:"Jogo1"
      }}/>
      <Stack.Screen 
      name= "Jogo2" 
      component={Jogo2} 
      options={{
      headerShown:false, title:"Jogo2"
       }}/>
      <Stack.Screen 
      name= "Jogo3" 
      component={Jogo3} 
      options={{
      headerShown:false, title:"Jogo3"
      }}/>
      </Stack.Navigator> 
  );
}