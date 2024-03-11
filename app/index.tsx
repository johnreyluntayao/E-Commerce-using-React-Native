import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import { Svg, Path } from 'react-native-svg';

export default function Page() {

  const image = "https://i.pinimg.com/736x/5a/df/db/5adfdb9af547b0de271f1093236f1c30.jpg";
  return (
    
    <View className="flex-1 items-center bg-white">
      <Image source={{uri: image}} className="absolute w-[100%] h-[100%] mr-4"/>
      <View className="">
      <Text className="text-6xl p-2 items-center font-bold text-sky-300 bg-sky-600 rounded-b-3xl pt-[50] pl-8">Hello!</Text>
      <Text className="text-xl pt-3 font-bold italic  mb-6  max-w-xl selection:text-sky-300">Welcome to Hermes Shop!</Text>
      </View>


    <View className="">
      <TouchableOpacity
        onPress={() => router.navigate('/shop/')}
        className="bg-white border py-4 px-8 rounded-2xl items-center justify-center mt-[400] shadow-xl"
      >

<Svg
    fill="none"
    className="w-6 h-6 stroke-black"
  ><Path
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z " fill="#2f6565"
    />
  </Svg>
      </TouchableOpacity>
      </View>
    </View>
    
  );
}
