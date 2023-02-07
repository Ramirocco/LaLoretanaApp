import { StyleSheet, Text, View } from 'react-native';

import ShopNavigator from './src/navigation/ShopNavigator';
import {useFonts} from 'expo-font'

export default function App() {

  const [FontsLoaded] = useFonts (
    {
      Pacifico : require ('./src/assets/fonts/PacificoRegular.ttf'),
      Faustina: require ('./src/assets/fonts/FaustinaVariableFont_wght.ttf'),
      Poppins: require ('./src/assets/fonts/PoppinsMedium.ttf')
    })

    if (!FontsLoaded){ return null}
    
  return (
      <ShopNavigator/>
      )
}
