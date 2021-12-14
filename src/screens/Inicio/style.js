import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    Total: {
        backgroundColor:"red", 
        height:110, 
        width:415, 
        flexDirection:'row',
        //alignItems:"flex-start",
        //zIndex: 2
    },
    Total2: {
        backgroundColor:"red", 
        height:140, 
        width:415, 
        flexDirection:'row',
        //alignItems:"flex-start",
        //zIndex: 2
    },
    Imagem:{
        height:45, 
        width:39, 
        marginLeft:75,
        marginTop:56,
        //margin: "-20%"
    },
    texto:{
        marginLeft: 5,
        marginTop:60,
        fontSize: 28,
        color: "white",
    },
    texto2:{
        marginLeft: 20,
        marginTop:28,
        fontSize: 17,
        color: "white",
    },
    TextoInicio:{
        backgroundColor: "white",
        marginTop: 105,
        width: 375,
        height: 100,
        marginLeft: -185,
        borderRadius: 5,
        zIndex: 1

    }, 
    Botao:{
        marginLeft: 8,
    },
    TextoBotao:{
        fontSize:14,
        marginLeft:15,
        opacity: 0.5,
    },
    ViewBotao:{
        marginLeft:15,
        width: 250,
        marginTop:30,
        flexDirection:'row',
        //alignItems:"flex-start",
    },
    Sino:{
       marginTop:65,
       flexDirection:'row',
       alignItems:"flex-start",
       marginLeft:19
       
    }, 
    Traco:{
        width: 30,
        height: 2,
        backgroundColor: "white",
        marginVertical: 2.5,
    },
    TextoInicio2:{
        marginLeft:18,
        marginTop:100,
        width: 375,
        height: 80,
        borderRadius: 50
    }, 
    ViewImage:{
        marginLeft:12,
        marginTop:12,
        width: 375,
        height: 110,
        borderRadius: 50
    },
    ViewInvestimento:{
        backgroundColor: "white",
        marginLeft:18,
        marginTop:20,
        width: 375,
        height: 100,
    },
    Botao2:{
        backgroundColor:"white",
        borderRadius: 5,
        height: 78,
        // alignSelf: "center"
    },
    ViewBotao2: {
        // alignSelf: "center"
        flexDirection: "row",
        alignItems: "center",
        marginTop: 13,
        marginLeft: 20
        
    },
    botaoInvestimento: {
        marginLeft: 20
    },
    TextoBotao2:{
        fontSize:20,
        marginLeft:25,
    },
    icon4:{
        marginLeft: 105
    },
    Botao3:{
        backgroundColor:"white",
        borderRadius: 5,
        height: "100%"
        // alignSelf: "center"
    },
})

export default style