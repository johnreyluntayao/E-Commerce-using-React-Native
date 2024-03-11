import {Text, TextInput, ScrollView, Image, Button, Pressable, FlatList, View} from "react-native";
import {useState} from "react";



export const Sample = () => {

    const [text, setText] = useState("");
    const [isSelected, setIsSelected] = useState(false);
    return (
    // <ScrollView className="flex-1">


    //         {Array(10)
    //             .fill(10)
    //                 .map(() => ( 

    //                 <>
    //                 <Text className="border rounded-3xl p-2 text-center font-bold text-5xl text-yellow-100">My App {text}</Text>
    //                 <TextInput placeholder="Enter something" onChangeText={(text) => setText(text)}/>

            
            
    //                 <Image className="rounded-2xl"source={{uri: "https://reactjs.org/logo-og.png"}} style={{width: 300, height: 300}}
    //                 />

    //                 {/* Button */}
    //                 <Button className="" title={isSelected ? "Selected" : "Not Selected"} onPress={() => setIsSelected((prev) => !prev)} />

    //                 {/* Pressable Text */}
    //                 {/* <Pressable onPress={() => setIsSelected((prev) => !prev)}>
    //                     <Text>{isSelected ? "Selected" : "Not Selected"}</Text>
    //                 </Pressable> */}

    //                 </>
 
    //                 ))}

    // </ScrollView>
                    <FlatList className="mt-10" data={Array(10).fill(10)}
                        renderItem={() => (
                            <>
                    <Text className="border rounded-3xl p-2 text-center font-bold text-5xl text-yellow-100">My App {text}</Text>
                    <TextInput className="flex bg-sky-400 text-lg border rounded-lg m-2 p-1" placeholder="Enter something" onChangeText={(text) => setText(text)}/>

            
            
                    <Image className="rounded-2xl mt-4 mb-4"source={{uri: "https://reactjs.org/logo-og.png"}} style={{width: 300, height: 300}}
                    />

                    {/* Button hindi nalalagyan ng className */}
                    {/* <Button title={isSelected ? "Selected" : "Not Selected"} onPress={() => setIsSelected((prev) => !prev)} /> */}

                    {/* Pressable Text */}
                    
                     <Pressable className="absolute bottom-[-1] left-[98] mb-4 flex justify-center items-center p-1" onPress={() => setIsSelected((prev) => !prev)}>
                        <Text className=" text-lg text-center font-semibold border rounded-xl w-[100px] p-1 bg-sky-400">{isSelected ? "Selected" : "Not Selected"}</Text>
                    </Pressable>

                    </>
                        )

                        }/>

    )
}