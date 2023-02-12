import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { PRODUCTS } from '../assets/data/Products';
import ProductsItems from '../components/ProductsItems'
import React from 'react'

const ProductsScreen = ({ navigation, route }) => {

  const NewProducts = PRODUCTS.filter (product => product.category === route.params.categoryId);
  
  const RenderProductsItem = ({ item }) => (
    <View style={styles.containerProduct}>
      <ProductsItems item={item} onSelected={HandleSelectedProduct} />
    </View>)

  const HandleSelectedProduct = (item) => {
    navigation.navigate("Details", {
      ProductId: item.id,
      name: item.name,
    })
  }
  return (
    <View>

      <FlatList data={NewProducts} renderItem={RenderProductsItem} keyExtractor={item=>item.id} numColumns= {2} />

    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerProduct: {
    padding: 10,
    height: 280,
    width: "50%"
  }
});