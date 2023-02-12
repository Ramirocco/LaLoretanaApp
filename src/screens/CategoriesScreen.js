import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { CATEGORIES } from '../assets/data/Categories';
import CategoriesItems from '../components/CategoriesItems'
import React from 'react'

const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = ({ item }) => (
        <View style={styles.containerCategory}>
            <CategoriesItems item={item} onSelected={HandleSelectedCategory} />
        </View>)

const HandleSelectedCategory =(item)=> {
    navigation.navigate("Products", {
        categoryId: item.id,
        title: item.title})
}
    return (
        <View style={styles.container}>
            <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={item => item.id} />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCategory: {
        padding: 10,
        height: 150,
        width: 350
    }
});