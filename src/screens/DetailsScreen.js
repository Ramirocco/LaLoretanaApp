import { Button, StyleSheet, Text, View } from 'react-native'

import DetailsItem from '../components/DetailsItem'
import React from 'react'

const DetailsScreen = ({navigation, route, item}) => {
  return (
    <DetailsItem item={item} />
  )
}

export default DetailsScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });