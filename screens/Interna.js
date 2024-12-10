import React from 'react';
import {View, Text, StyleSheet  } from 'react-native';

const Interna = () => {
    return (
    <View style={styles.container}>
        <Text>Bem Vindo</Text>
    </View>
    );

};

export default Interna;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});