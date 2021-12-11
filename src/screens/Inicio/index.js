import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import style from "./style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


export function Inicio(props) {
    return (
        <View style={{ backgroundColor: "#EFF1EB" }}>
            <View style={style.Total}>
                <EvilIcons style={style.Sino} name="bell" size={30} color="white" />
                {/* <AntDesign  style={style.Seta} name="left" size={40} color="black" /> */}
                <Image style={style.Imagem} source={require("../../assets/transferir.png")} />
                <Text style={style.texto}>Santander</Text>
                <View style={{ marginTop: "17%", marginLeft: "16%" }}>
                    <View style={style.Traco}></View>
                    <View style={style.Traco}></View>
                    <View style={style.Traco}></View>
                </View>
                <Text style={style.texto2}>Olá,{props.nome}{"\n"}Ag 4421 CC 0024858-0</Text>
                {/* <AntDesign name="enviromento" size={24} color="black" /> */}
                
                <View style={style.TextoInicio}>
                    <TouchableOpacity style={style.Botao} onPress={() => { }}>
                        <View style={style.ViewBotao}>
                            <MaterialCommunityIcons style={style.icon2} name="lock-reset" size={40} color="red" />
                            <Text style={style.TextoBotao}>Habilite o ID Santander e faça pagamentos e outras transações pelo app</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.TextoInicio2}>
                <TouchableOpacity style={style.Botao2} onPress={() => { }}>
                    <Foundation style={style.icon3} name="dollar" size={45} color="black" />
                    <View style={style.ViewBotao2}>
                        <Text style={style.TextoBotao2}>Saldo disponível</Text>
                    </View>
                    <MaterialIcons style={style.icon4} name="keyboard-arrow-down" size={45} color="black" />
                </TouchableOpacity>
                </View>

                <View style={style.TextoInicio3}>
                <TouchableOpacity style={style.Botao2} onPress={() => { }}>
                    <Image source={require("../../assets/pix2.jpg")}/>
                    <View style={style.ViewBotao2}>
                    <Text style={style.TextoBotao2}>Pix</Text>
                    </View>
                </TouchableOpacity>
                </View>
                
            </View>

        </View>
    )
}