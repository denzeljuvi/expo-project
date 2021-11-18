import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { login } from './screens/login.js';
import { CartProvider } from './CartContext.js';
import { checkout } from './screens/checkout.js';
import { Orderconfirm } from './screens/Orderconfirm.js';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='login' component={login} 
          options={({ navigation }) => ({
            title: 'Login',
            Login: () => <loginBtn navigation={navigation}/>
          })}/>  
          <Stack.Screen name='ProductsList' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='checkout' component={checkout}
          options={({ navigation}) => ({
            title: 'Checkout',
            checkout: () => <checkoutBtn navigation={navigation}/>,

          })} />
          <Stack.Screen name= 'OrderConfirm' component={Orderconfirm} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default App;