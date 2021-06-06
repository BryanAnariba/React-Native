import React from 'react';
import { View, StyleSheet } from 'react-native';


export const HomeworkFour = () => {
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
        backgroundColor: '#5856D6',
        position: 'absolute',
        top: 0,
        right: 0
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        alignSelf: 'center'
    },
    blueBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2BC4D9',
        position: 'absolute',
        bottom: 0,
        left:0,
        alignSelf: 'flex-start'
    }
});
