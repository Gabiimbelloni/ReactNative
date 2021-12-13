import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    Total: {
        //marginBottom:"12%",
        //width: "100%",
        height: 900,
        marginLeft:25,
        alignItems:"flex-start",

    },
    Texto1:{
        fontSize: 20,
        fontWeight: "bold"
    },
    Login:{
        opacity: 0.5,
        marginVertical:28,
    },
    Opcao:{
        color: "red",
        marginVertical:300,
        marginTop:5,
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    Botao:{
        backgroundColor:"red",
        width: 356,
        height: 55,
        borderRadius: 5,

    },
    TextoBotao:{
        fontSize:20,
        color: "white",
        textAlign:"center",
        margin:14
    }, 
    toggle:{
        marginLeft:300,
        marginTop:"-7%",
       
    },
    toggle2:{
        marginLeft:300,
        marginTop:"-11%"
    }
})

export default style