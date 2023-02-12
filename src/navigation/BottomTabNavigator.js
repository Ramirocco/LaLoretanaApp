import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../assets/constantes/colors";
import CartNavigator from "./CartNavigator";
import Ionicons from '@expo/vector-icons/Ionicons'
import OrdersNavigator from "./OrdersNavigator";
import ShopNavigator from './ShopNavigator';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {

    
       return (
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false, 
            tabBarShowLabel : false, 
            tabBarStyle: styles.tabBar}}>
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator}
            options={{ 
                tabBarIcon: ()=> (
                    <View style={styles.icons}>
                        <Ionicons name="home" size={20} color="black"/>
                        <Text>Inicio</Text>
                    </View>
                ),
            }}/>
            <BottomTabs.Screen name="CartNavigator" component={CartNavigator}
            options={{ 
                tabBarIcon: ()=> (
                    <View style={styles.icons}>
                        <Ionicons name="cart" size={20} color="black"/>
                        <Text>Carrito</Text>
                    </View>
                ),
            }}/>
            <BottomTabs.Screen name="OrdersTab" component={OrdersNavigator}
            options={{ 
                tabBarIcon: ()=> (
                    <View style={styles.icons}>
                        <Ionicons name="list" size={20} color="black"/>
                        <Text>Ordenes</Text>
                    </View>
                ),
            }}/>
        </BottomTabs.Navigator>
    )
}
const styles = StyleSheet.create ({
    tabBar: {
        shadowColor: COLORS.secundary,
        shadowOffset: { width:0 , height: 2},
        shadowOpacity: 0.5,
        shadowRadius : 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        borderRadius: 15,
        height: 50
        
    },
    icons:{
        alignItems:'center',
    }
})