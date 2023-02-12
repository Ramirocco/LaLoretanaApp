import { COLORS } from '../assets/constantes/colors'
import CategoriesScreen from "../screens/CategoriesScreen"
import DetailsScreen from "../screens/DetailsScreen"
import { NavigationContainer } from "@react-navigation/native"
import ProductScreen from "../screens/ProductsScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary},
        headerTintColor: "black",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "La Loretana",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  )
}