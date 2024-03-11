import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { products } from "../../lib/data";
import { Product } from '../../lib/type';

const ShopPage = () => {
  const { slug } = useLocalSearchParams();

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return <Text>Not Found</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-300 pt-20">
      <View className="p-4 bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
        <View className="flex flex-col items-center justify-center mb-4">
          <Image className='w-[250] h-[250] rounded-3xl' source={{ uri: product?.image }} />
          <Text className="text-2xl font-bold mt-2">{product?.name}</Text>
          <Text className="text-gray-500">{product?.brand}</Text>
        </View>

        <Text className="text-gray-700 mb-4">{product?.description}</Text>

        <View className="flex flex-row justify-between mb-4">
          <Text className="text-green-600 font-bold">Price: {product?.price}</Text>
          <Text className="text-yellow-500">Rating: {product?.rate}</Text>
          <Text className="text-red-500 font-bold">Price Before: {product?.discount}</Text>
        </View>

        <View className="flex flex-row justify-center">
          <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full">
            <Text className="text-white font-bold">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopPage;
