
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {Header} from './src/components/Header';


export default function App() {
  const GOAL = 2000; //meta diária em ml
  // const [consumed, setConsumed] = useState(0);

  // // função para acumular a quantidade ingerida
  // const handleAddWater = (amount) => {};

  //função para zerar o contador
    return(
      <SafeAreaProvider>
        <SafeAreaView>
          <StatusBar/>
          <View>
           <Header goal={GOAL} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>

    );

  }