import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../assets/constantes/colors'
import React from 'react'

const CategoriesItems = ({ item, onSelected }) => {
    return (
        <View style={{...styles.categoryItem, ...{backgroundColor: item.colors}}}>
            <TouchableOpacity style={styles.container} onPress = {()=> onSelected(item)}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> 
                        {item.title}
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={ styles.image}
                     source={{ uri: item.img}}>
                    </Image>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoriesItems

const styles = StyleSheet.create({
    categoryItem: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        margin: 0,
        shadowColor: "black",
        shadowOpacity : 0.5,
        shadowOffset: {width: 0 , height: 2},
        elevation: 5

    },
    
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        flex: 1
    },

    imageContainer: {
        width: "40%",
        height: "100%"
    },
    textContainer: {
        width: "60%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center"
        
    },
    text: { fontWeight: "700"},
    
    image: {width: "100%",
    height:"100%",
borderTopRightRadius: 10,
borderBottomRightRadius: 10}

})