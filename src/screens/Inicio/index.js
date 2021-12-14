import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import style from "./style"
import { MaterialCommunityIcons, EvilIcons, MaterialIcons, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function Inicio() {
    return (
        <>
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
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: "#EFF1EB" }}>
                    <View style={style.Total2}>
                        <Text style={style.texto2}>Olá, Ramon Ives{"\n"}Ag 4421 CC 0024858-0</Text>
                        {/* <AntDesign name="enviromento" size={24} color="black" /> */}
                        <View style={style.TextoInicio}>
                            <TouchableOpacity style={style.Botao} onPress={() => { }}>
                                <View style={style.ViewBotao}>
                                    <MaterialCommunityIcons style={style.icon2} name="lock-reset" size={40} color="red" />
                                    <Text style={style.TextoBotao}>Habilite o ID Santander e faça pagamentos e outras transações pelo app</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.TextoInicio2}>
                        <TouchableOpacity style={style.Botao2} onPress={() => { }}>
                            <View style={style.ViewBotao2}>
                                <Foundation name="dollar" size={45} color="black" />
                                <Text style={style.TextoBotao2}>Saldo disponível</Text>
                                <MaterialIcons style={style.icon4} name="keyboard-arrow-down" size={45} color="black" />
                            </View>

                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}>
                            <View>
                                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "white", height: 106, width: 130, marginLeft: 12, borderWidth: 0.5, borderColor: "#dddddd", alignItems: "center", paddingTop: 15 }} onPress={() => { }}>
                                    <Image resizeMode="contain" style={{ height: 40, width: 40 }} source={require("../../assets/pix2.jpg")} />
                                    <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>Pix</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "white", height: 106, width: 130, marginLeft: 12, borderWidth: 0.5, borderColor: "#dddddd", alignItems: "center", paddingTop: 15 }} onPress={() => { }}>
                                    <MaterialCommunityIcons name="barcode-scan" size={36} color="red" />
                                    <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>Pagar</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "white", height: 106, width: 130, marginLeft: 12, borderWidth: 0.5, borderColor: "#dddddd", alignItems: "center", paddingTop: 15 }} onPress={() => { }}>
                                    <MaterialCommunityIcons name="transfer" size={35} color="red" />
                                    <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>Transferência</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "white", height: 106, width: 130, marginLeft: 12, borderWidth: 0.5, borderColor: "#dddddd", alignItems: "center", paddingTop: 15 }} onPress={() => { }}>
                                    <Ionicons name="qr-code-outline" size={35} color="red" />
                                    <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>Cobrar</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "white", height: 106, width: 130, marginLeft: 12, borderWidth: 0.5, borderColor: "#dddddd", alignItems: "center", paddingTop: 15 }} onPress={() => { }}>
                                    <Ionicons name="receipt-outline" size={35} color="red" />
                                    <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>Comprovante</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>


                    </View>
                    <Image resizeMode="contain" style={{ width: 365, height: 100, marginLeft: 18 }} source={require("../../assets/santander.jpeg")} />

                    <View style={style.ViewInvestimento}>
                        <TouchableOpacity style={style.Botao} onPress={() => { }}>
                            <View style={style.ViewBotao}>
                                <FontAwesome5 name="umbrella-beach" size={25} color="red" />
                                <Text style={style.TextoBotao}>Seguro Acidentes Pessoais: Proteção por menos de R$1 por dia. Simule aqui.</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <SimpleLineIcons style={{ marginLeft: 200 }} name="options" size={24} color="black" />
                    <Text style={{ fontWeight: "bold", fontSize: 22, marginLeft: "4%" }}>Cartões</Text>

                    <View style={{ marginTop: 18, width: 375, height: 80, marginLeft: 18 }}>
                        <TouchableOpacity style={style.Botao3} onPress={() => { }}>
                            <View style={style.ViewBotao2}>
                                <MaterialCommunityIcons name="credit-card-multiple-outline" size={24} color="black" />
                                <Text style={style.TextoBotao2}>Meus cartões</Text>
                                <MaterialIcons style={style.icon4} name="keyboard-arrow-down" size={45} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "white", marginTop: 30, borderColor: "red", borderWidth: 1, width: 375, height: 50, marginLeft: 18 }} onPress={() => { }}>
                        <Text style={{ fontSize: 19, textAlign: "center", marginTop: 12, color: "red" }}>Cartão online</Text>
                    </TouchableOpacity>

                    <Image resizeMode="contain" style={{ marginTop: 25, width: 375, height: 110, marginLeft: 18 }} source={require("../../assets/santander2.jpeg")} />

                    <Text style={{ fontWeight: "bold", fontSize: 22, marginLeft: 18, marginTop: 18 }}>Empréstimo</Text>

                    <View style={{ marginTop: 15, width: 375, height: 88, marginLeft: 18 }}>
                        <TouchableOpacity style={style.Botao3} onPress={() => { }}>
                            <View style={style.ViewBotao2}>
                                <FontAwesome5 name="hand-holding-usd" size={28} color="black" />
                                <Text style={style.TextoBotao2}>Empréstimo</Text>
                                <MaterialIcons style={style.icon4} name="keyboard-arrow-down" size={45} color="black" />
                            </View>
                            <Text style={{ marginTop: 10, marginLeft: 20, opacity: 0.5 }}>Organize sua vida financeira</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontWeight: "bold", fontSize: 22, marginLeft: "4%", marginTop: 20 }}>Poupança e Investimento</Text>

                    <View style={{ marginTop: 15, width: 375, height: 88, marginLeft: 18 }}>
                        <TouchableOpacity style={style.Botao3} onPress={() => { }}>
                            <View style={style.ViewBotao2}>
                                <FontAwesome5 name="piggy-bank" size={28} color="black" />
                                <Text style={style.TextoBotao2}>Poupança</Text>
                                <MaterialIcons style={{ marginLeft: 124 }} name="keyboard-arrow-down" size={45} color="black" />
                            </View>
                            <Text style={{ marginTop: 10, marginLeft: 20, opacity: 0.5 }}>Guarde seu dinheiro agora mesmo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15, width: 375, height: 88, marginLeft: 18 }}>
                        <TouchableOpacity style={style.Botao3} onPress={() => { }}>
                            <View style={style.ViewBotao2}>
                                <FontAwesome5 name="file-invoice-dollar" size={28} color="black" />
                                <Text style={style.TextoBotao2}>Investimentos</Text>
                                <MaterialIcons style={{ marginLeft: 100 }} name="keyboard-arrow-down" size={45} color="black" />
                            </View>
                            <Text style={{ marginTop: 10, marginLeft: 20, opacity: 0.5 }}>Faça o seu dinheiro render mais</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}