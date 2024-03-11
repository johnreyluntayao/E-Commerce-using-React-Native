
import { Text, View } from 'react-native';
import { Sample } from './components/Sample';


export default function App() {
  return (
    <View className="flex items-center justify-center bg-blue-400">

      <Sample />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'green',
//     fontSize: 90,
//     alignSelf: 'center',
//   }
// });
