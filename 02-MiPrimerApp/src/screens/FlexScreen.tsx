import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
export const FlexScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.box }>
                Box 1
            </Text>
            <Text style={ styles.box2 }>
                Box 2
            </Text>
            <Text style={ styles.box3 }>
                Box 3
            </Text>
            <Text style={ styles.box }>
                Box 1
            </Text>
            <Text style={ styles.box2 }>
                Box 2
            </Text>
            <Text style={ styles.box3 }>
                Box 3
            </Text>
            <Text style={ styles.box }>
                Box 1
            </Text>
            <Text style={ styles.box2 }>
                Box 2
            </Text>
            <Text style={ styles.box3 }>
                Box 3
            </Text>
            <Text style={ styles.box }>
                Box 1
            </Text>
            <Text style={ styles.box2 }>
                Box 2
            </Text>
            <Text style={ styles.box3 }>
                Box 3
            </Text>
            <Text style={ styles.box }>
                Box 1
            </Text>
            <Text style={ styles.box2 }>
                Box 2
            </Text>
            <Text style={ styles.box3 }>
                Box 3
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'flex-end',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: 'red',
        fontSize: 20,
        borderWidth: 5,
        borderColor: 'white',
        padding: 5,
        // alignSelf: 'center'
    },
    box2: {
        backgroundColor: 'green',
        fontSize: 20,
        borderWidth: 5,
        borderColor: 'white',
        padding: 5,
        // alignSelf: 'flex-start'
    },
    box3: {
        backgroundColor: 'blue',
        fontSize: 20,
        borderWidth: 5,
        borderColor: 'white',
        padding: 5,
        // alignSelf: 'flex-end'
    }   
});
