import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

export const HomeworkSix = () => {
    const { height, width } = useWindowDimensions();
    return (
        <View style={{ ...styles.container, width: width * 1 }}>
            <View style={{ ...styles.purpleBox, width: width * 1 }} />
            <View style={{ ...styles.orangeBox, width: width * 1 }} />
            <View style={{ ...styles.blueBox, width: width * 1 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'column',
    },
    purpleBox: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        flex: 1
    },
    orangeBox: {
        width: 100,
        borderWidth: 10,
        backgroundColor: '#F0A23B',
        borderColor: 'white',
        flex: 1
    },
    blueBox: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2BC4D9',
        flex: 2
    }
});
