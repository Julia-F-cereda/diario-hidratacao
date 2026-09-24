import { View, Text, StyleSheet } from 'react-native';
import {COLORS} from '../constants/colors';


export function Header({goal}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Diário de hidratação</Text>
            <Text style={styles.subtitle}>Meta diaria: {goal}mL </Text>
        </View>
    )
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginBottom: '24',
  },
  
  title:{
    fontWeight: 'bold',
    color: COLORS.textMain,
    fontSize: 22,
  },

  subtitle:{
    color: COLORS.textMuted,
    marginTop: 4,
    fontSize: 14,
  },

})