import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

export const HomeworkFiveScreen = () => {
    const { height } = useWindowDimensions();
    return (
        <View style={ styles.container }>
            <View style={{ ...styles.purpleBox, height: height * 1 }} />
            <View style={{ ...styles.orangeBox, height: height * 1 }} />
            <View style={{ ...styles.blueBox, height: height * 1 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    purpleBox: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        width: 100,
        borderWidth: 10,
        backgroundColor: '#F0A23B',
        borderColor: 'white'
    },
    blueBox: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2BC4D9'
    }
});
