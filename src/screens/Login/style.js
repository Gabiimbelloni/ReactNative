import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    Total: {
        //backgroundColor:"white", 
        marginBottom:"12%",
        width: "100%",
        height: "100%",
        marginLeft:"6%",
        alignItems:"flex-start",

    },
    Texto1:{
        fontSize: 20,
        fontWeight: "bold"
    },
    Login:{
        opacity: 0.5,
        marginVertical:"8%",
    },
    Opcao:{
        color: "red",
        marginVertical:"75%",
        marginTop:"1%",
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    Botao:{
        backgroundColor:"red",
        width: "90%",
        height: "6%",
        borderRadius: 5,

    },
    TextoBotao:{
        fontSize:20,
        color: "white",
        textAlign:"center",
        margin:"4%"
    }, 
    toggle:{
        marginLeft:"75%",
        marginTop:"-7%",
       
    },
    toggle2:{
        marginLeft:"75%",
        marginTop:"-11%"
    }
})

export default style