import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CART } from '../assets/data/Cart'
import CartItem from '../components/CartItem'
import React from 'react'

const CartScreen = () => {
    const HandleConfirmCart = () => { console.log("confirm item") }
    const HandleDeleteItem = () => { console.log("delete item") }
    const total = 120
    const RenderCartItem = ({ item }) => (
        <CartItem item={item} onDelete={HandleDeleteItem} />
    )
    return (
        <View style={styles.container}>

            <View style={styles.list}>
                <FlatList data={CART} renderItem={RenderCartItem} keyExtractor={item => item.id} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={HandleConfirmCart} >
                    <Text>Confirm</Text>
                    <View style={styles.confirm} >
                        <Text style={styles.total}> Total </Text>
                        <Text> ${total} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
        paddingBottom:120
    },
    footer:{
        flex:1,
        borderTopColor: "#ccc",
        borderTopWidth: 1
    },
    confirm:{
        flexDirection:"row",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#ccc",
        padding:10
    },
    list:{
        flex:1,
    },
    text:{
        fontSize: 18,
    },
    total:{
        flexDirection: "row",
    }
    }
)