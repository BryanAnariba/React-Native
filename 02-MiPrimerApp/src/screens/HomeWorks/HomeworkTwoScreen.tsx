import React from 'react'
import { View, StyleSheet } from 'react-native';

export const HomeworkTwoScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.purpleBox } />
            <View style={ styles.orangeBox } />
            <View style={ styles.blueBox } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    purpleBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox: {
        width: '100%',
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2BC4D9'
    }
});