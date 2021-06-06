import React from 'react';

import { View, StyleSheet, useWindowDimensions } from 'react-native';

export const HomeworkSevenScreen = () => {

    return (
        <View style={{ ...styles.container, width: 100 }}>
            <View style={{ ...styles.purpleBox, width: 100 }} />
            <View style={{ ...styles.orangeBox, width: 100 }} />
            <View style={{ ...styles.blueBox, width: 100 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    purpleBox: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        height: 100,
    },
    orangeBox: {
        width: 100,
        borderWidth: 10,
        backgroundColor: '#F0A23B',
        borderColor: 'white',
        height: 100,
    },
    blueBox: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2BC4D9',
        height: 100,
    }
});
