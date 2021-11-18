import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet,
  TouchableOpacityBase
  } from 'react-native';
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);
  const { removeItemFromCart } = useContext(CartContext);
  useEffect(() => {
    setProduct(getProduct(productId));
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }

  function onRemoveFromCart() {
    removeItemFromCart(product.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <View>
            <Button
            onPress={onAddToCart}
            title="Add to cart"
            />

            <Button
            onPress={onRemoveFromCart}
            title="Remove From Cart"
            />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  addbtn:
  {
    width: "57%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#e3963e",
  },
  text:
  {

  }
});