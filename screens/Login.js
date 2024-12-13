import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, signInWithEmailAndPassword } from "../backend/FirebaseConfig";
import {validacaoFormularioUsuario} from '../util/Validacao';
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navegacao = useNavigation();

  const executarLogin = async () => {
    try {
        let ValidacaoErro = validacaoFormularioUsuario(email, senha);
        if( ValidacaoErro.length > 0){
            let msg = "";
            for (let index = 0; index < ValidacaoErro.lenght; index++){
                msg += ValidacaoErro[index] + "\n";
            }
            Alert.alert("Erro", ValidacaoErro);
        } else{
            await signInWithEmailAndPassword(auth, email, senha);
            Alert.alert("Sucesso", "Logado com sucesso");
            navegacao.navigate("Interna");

        }
    } catch (erro) {
      Alert.alert("Erro", erro.message);
    }
  };

  return (
    <View>
      <Text>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
      />
      <Text>Senha</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <Button title="Entrar" onPress={executarLogin} />
      <Button title="Voltar" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default LoginScreen;
