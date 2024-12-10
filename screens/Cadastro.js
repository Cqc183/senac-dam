import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <Text>E-mail</Text>
            <TextInput value= {email} onChangeText={setEmail} style={styles.input}/>
            <Text>Senha</Text>
            <TextInput 
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            secureTextEntry
            />
            <Button title="Entrar" onPress={() => alert('Cadastro Finalizado!')}/>
            <Button title="Voltar" onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Cadastro;
