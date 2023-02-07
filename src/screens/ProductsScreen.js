import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ProductsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>productsScreen</Text>
      <Button title='Ir a Detalles' onPress={()=> navigation.navigate("Details")}/>
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});