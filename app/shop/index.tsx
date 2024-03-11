import React from "react";
import { View, FlatList, Image, TextInput} from "react-native"; 
import { products } from "../lib/data"; 
import Card from "../../components/Card"; 
import { Product } from "../app/lib/type";


type CardProps = {
  item: Product;
};

export default function Page({ item }: CardProps) {
  return (

    <>
    <TextInput className="border rounded-full text-center w-[300] p-1 mt-2 mb-2 ml-7" placeholder="Search for the shoes you want" />
    <FlatList
      data={products}
      renderItem={({ item }) => <Card item={item} />} 
    />

    </>
  );
};