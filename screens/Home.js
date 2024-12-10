import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navegacao = useNavigation();
    return(
        <View style={styles.container}>
        <Text>Ola Mundo!</Text>
        <Button title='Ir para Login' onPress={() => navegacao.navigate('Login')}/>
        <StatusBar style="auto" />
      </View>
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
  
  export default HomeScreen;