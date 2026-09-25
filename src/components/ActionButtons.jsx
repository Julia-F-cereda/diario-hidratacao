import { View, Text, Pressable, StyleSheet } from 'react-native';
import {COLORS} from '../constants/colors';
export function ActionButtons(){
    return(
        <View>
            <View>
                <Text style={styles.text}>Adicionar Consumo:</Text>
            </View>

            <View>
                <Pressable onPress={ActionButtons()}>300ml</Pressable>
                <Pressable onPress={ActionButtons()}>350ml</Pressable>
                <Pressable onPress={ActionButtons()}>500ml</Pressable>
            </View>
            
        </View>
    )
};
const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.primary,
    },

    container:{
        flexDirection: 'column',
    }
});