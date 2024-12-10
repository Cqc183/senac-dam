import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";



const LoginScreen = () =>{
    //const navegacao = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const executarLogin = () => {
        navigation.navigate('Interna');
    };

    return (
        <View>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha} secureTextEntry />
            <Button title="Entrar" onPress={executarLogin} />
            <Button title="Voltar" onPress={(navigation.navigate('Home'))}/>
        </View>
    );
};

export default LoginScreen;