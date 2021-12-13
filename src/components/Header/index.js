import React from "react";
import { View, Image, Text } from "react-native";
import style from "./style";
import { AntDesign, Ionicons } from '@expo/vector-icons';

function Header(){
    return(
      <View style={style.Total}>
             <Ionicons style={style.Seta} name="ios-chevron-back-outline" size={30} color="white" />
             <Image style={style.Imagem} source={require("../../assets/transferir.png")}/>
             <Text style={style.texto}>Santander</Text>
             <AntDesign style={style.Map} name="enviromento" size={24} color="white" />
      </View>
    )
}

export default Header