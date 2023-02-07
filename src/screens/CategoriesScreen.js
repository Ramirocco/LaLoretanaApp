import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>categoriesScreen</Text>
      <Button title='Ir a Productos' onPress={ ()=> navigation.navigate("Products")}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });