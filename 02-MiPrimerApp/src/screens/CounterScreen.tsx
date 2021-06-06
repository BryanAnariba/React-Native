import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';


export const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                This is a Counter: { counter }
            </Text> 

            <Fab 
                title="+1"
                onPress={ () => setCounter( counter + 1 ) }
                position="br"
            />

            <Fab 
                title="-1"
                position="bl"
                onPress={ () => setCounter(counter - 1) }
            />

            {/* <TouchableOpacity
                style={ styles.fabLocationButtonLeft } 
                onPress={ substract }>
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: { 
        fontSize: 30, 
        textAlign: 'center',
        top: -10
    },
});
