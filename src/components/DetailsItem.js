import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const DetailsItem = ({ item }) => {
    return (
        <View style={styles.container} >
            <View style={styles.containerImg}>
                <Image style={styles.image}
                    source={{ uri: item.img }}>
                </Image>
            </View>
            <View style={styles.containerText}>
                <Text>{item.name}</Text>
                <Text>{item.name}</Text>
                <Text>{item.name}</Text>
                <Text> Variantes: {item.variants} </Text>
            </View>
        </View>
    )
}

export default DetailsItem

const styles = StyleSheet.create({})