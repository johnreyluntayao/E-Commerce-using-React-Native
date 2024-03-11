import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, SafeAreaView, TextInput, ToastAndroid} from 'react-native';
import { products } from "../app/lib/data";
import { Product } from '../app/lib/type';
import { Button } from 'react-native';
import { router } from 'expo-router';
import { Svg, Path } from 'react-native-svg';
import { useState } from 'react';

type CardProps = {
    item: Product;
}

const Card = ({item}:CardProps) => {
    const [quantity, setQuantity] = useState(0);

  const quantityAddHandler = () => {
    setQuantity(quantity + 1);
  };

  const quantityMinusHandler = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };


 return (

   <View className="p-4 border-b flex flex-row justify-between">
      <View className="flex flex-row items-center">
        <Image source={{ uri: item.image }} className="w-40 h-40 mr-4 rounded-lg" />
       <View className="absolute top-0 left-0 p-4">
          <Text className="text-md font-bold mb-1">{item.name}</Text>
          <Text className="text-gray-500">{item.brand}</Text>
        </View>
      </View>

      <View className="flex flex-col items-end pt-2">
        <Text className="text-gray-700 mb-1 italic">{item.description}</Text>
        <Text className="text-green-600 font-bold mb-1 text-lg">{item.price}</Text>
        <View className="flex flex-row items-center mb-1">
      <Svg width="9" height="9" fill="none" className="inline-block h-[9px] w-[9px]"><Path d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z" fill="#F7B543"></Path></Svg>
      <Text className="text-gray-700">{item.rate}</Text>
        </View>
        <Text className="text-red-500 font-bold mb-1 line-through">{item.discount}</Text>


        <Pressable
          onPress={() => { if (quantity !== 0) {
            router.navigate({ pathname: "/shop/[slug]", params: { slug: item.slug } });
          }else{
            ToastAndroid.show("You need to order first", ToastAndroid.BOTTOM);
          }}}
          className="p-2 mt-2 rounded-lg bg-blue-500">
          <Text className="text-white font-bold pl-2 pr-2">Order
</Text>

        </Pressable>


      </View>

      <View className="flex flex-col items-center mt-2">
      <Pressable onPress={quantityAddHandler} className="border p-2 rounded">
          <Text className="text-lg font-bold">+</Text>
        </Pressable>
        <Text className="text-lg font-bold my-2">{quantity}</Text>
        <Pressable onPress={quantityMinusHandler} className="border p-2 rounded">
          <Text className="text-lg font-bold">-</Text>
        </Pressable>


      </View>
    </View>
    )
    
    

    // <View style={styles.container}>
    //   <Text style={styles.header}>Product List</Text>
    //   {products.map(product => (
    //     <View key={product.slug} style={styles.productContainer}>
    //       <Text style={styles.productName}>{product.name}</Text>
    //       <Text>{product.brand}</Text>
    //       <Image source={{ uri: product.image }} style={styles.productImage} />
    //       <Text>{product.description}</Text>
    //       <Text>Price: {product.price}</Text>
    //       <Text>Rating: {product.rate}</Text>
    //       <Text>Discount: {product.discount}</Text>
    //       <Image source={{ uri: product.sticker }} style={styles.discountSticker} />
    //     </View>
    //   ))}
    // </View>
}
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   productContainer: {
//     marginBottom: 20,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   productImage: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginBottom: 10,
//   },
//   discountSticker: {
//     width: 100,
//     height: 100,
//     resizeMode: 'cover',
//   },
// });

export default Card;
