import React from 'react';
import { Stack, router } from 'expo-router';
import { TouchableOpacity, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: "                   Hermes Shop",
        headerLeft: () => (
          <>
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex items-center ml-4"
          >
            <Text className="text-blue-500 font-bold">Back</Text>
            
          </TouchableOpacity>
              <Svg fill="none" className=" absolute right-[-100] w-6 h-6 stroke-black">
              <Path  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </Svg>
            </>
        ),
      }}
    />
  );
}
