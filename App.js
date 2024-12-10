import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from'@react-navigation/stack';
import {StyleSheet} from 'react-native';

import HomeScreen from './screens/Home';
import LoginScreen from'./screens/Login';
import Cadastro from './screens/Cadastro';
import Interna from './screens/Interna';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name='Interna' component={Interna}/> 
      </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
