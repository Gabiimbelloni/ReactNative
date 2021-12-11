import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Inicio } from "../screens/Inicio";

const Stack = createStackNavigator()

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Inicio" component={Inicio} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}