import React from "react";
import { Text, TextInput, View, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./style";
import { Fontisto } from '@expo/vector-icons'; 
import Header from "../../components/Header";
import { useState } from "react";

export function Login(){

    const navigation = useNavigation()

    const [cpf, setCpf] = useState()
    const [senha, setSenha] = useState()

    const nome = 17794612564
    const usuario ="1234"

    function validacao(){
        console.log(cpf);
        console.log(senha);
     if(cpf == nome && senha == usuario){
       navigation.navigate("Inicio")
    }else if (cpf == undefined) { 
       alert("informe o CPF.")
    }
    else if (cpf != nome) {
        alert("cpf incorreta.")
    }
    else if (senha == undefined) {
        alert("informe a senha.")
    }
    else if (senha != usuario) {
        alert("senha incorreta.")
    }

    }

    
    return(
        <>
        <ScrollView>
            <Header/>
            <View style={style.Total}>
                <Text style={style.Texto1}>Acessar sua conta</Text>
            
                <View style={style.Login}>
                    <Text style={{fontSize: 16}}>CPF {"\n"}</Text>
                    <TextInput onChangeText={setCpf} value={cpf} placeholder="__________________________________________________"></TextInput>
                    <Text style={{fontSize: 16}}>{"\n"}Lembrar meu CPF {"\n"}</Text>
                    <Fontisto style={style.toggle2} name="toggle-off" size={40} color="black" />

                    <Text style={{fontSize: 16}}>{"\n"}{"\n"}Senha{"\n"}</Text>
                    <TextInput onChangeText={setSenha} value={senha} placeholder="_________________________________________________"></TextInput>
                    <Text style={{fontSize: 16}}>{"\n"}Habilitar acesso com Face ID</Text>
                    <Fontisto style={style.toggle} name="toggle-on" size={40} color="red" />
                </View>
                
                <Text style={style.Opcao}>Esqueci minha senha</Text>

                <TouchableOpacity style={style.Botao} title="Entrar" onPress={()=> validacao()}>
                    <Text style={style.TextoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </>
    )
}
