import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../assets/constantes/colors'
import React from 'react'

const ProductsItems = ({ item, onSelected }) => {
    return (
        <View style={{ ...styles.ProductItem, ...{ backgroundColor: item.colors } }}>
            <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={{ uri: item.img }}>
                    </Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                    <Text>
                        {item.description}
                    </Text>
                    <Text>
                        $ {item.precio}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductsItems

const styles = StyleSheet.create({
    ProductItem: {
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,


    },
    name: {
        fontWeight: "600",
        textTransform: "uppercase"
    },

    container: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"

    },

    imageContainer: {
        width: "90%",
        height: "40%"
    },
    textContainer: {
        width: "100%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center"

    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,

    }
})