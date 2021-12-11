import React from "react";
import { View, Image, Text } from "react-native";
import style from "./style";
import { AntDesign } from '@expo/vector-icons';

function Header(){
    return(
      <View style={style.Total}>
             {/* <AntDesign  style={style.Seta} name="left" size={40} color="black" /> */}
             <Image style={style.Imagem} source={require("../../assets/transferir.png")}/>
             <Text style={style.texto}>Santander</Text>
             {/* <AntDesign name="enviromento" size={24} color="black" /> */}
      </View>
    )
}

export default Header