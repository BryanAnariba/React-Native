import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const PositionsScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.yellowBox }>
                <Text style={ styles.title }>
                    1 - P: Absolute
                </Text>
            </View>
            <View style={ styles.purpleBox }>
                <Text style={ styles.title }>
                    1 - P: Absolute
                </Text>
            </View>
            <View style={ styles.greenBox }>
                <Text style={ styles.title }>
                    2 - P: Absolute
                </Text>
            </View>
            <View style={ styles.orangeBox }>
                <Text style={ styles.title }>
                    3 - P: Absolute
                </Text>
            </View>
            <View style={ styles.redBox }>
                <Text style={ styles.title }>
                    4 - P: Absolute
                </Text>
            </View>
            <View style={ styles.blueBox }>
                <Text style={ styles.title }>
                    5 - P: Relative
                </Text>
            </View>
            <View style={ styles.pinkBox }>
                <Text style={ styles.title }>
                    6 - P: Relative
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    yellowBox: {
        // width: 100,
        // height: 100,
        backgroundColor: 'yellow',
        borderWidth: 5,
        borderColor: 'white',
        //position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        ...StyleSheet.absoluteFillObject
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center'
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
        left: 0
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        top: 0,
        right: 0
    },
    redBox: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
        right: 0
    },
    blueBox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 5,
        borderColor: 'white',
        position: 'relative',
        justifyContent: 'center',
        top: 0,
        right: 0
    },
    pinkBox: {
        width: 100,
        height: 100,
        backgroundColor: 'pink',
        borderWidth: 5,
        borderColor: 'white',
        position: 'relative',
        justifyContent: 'center',
        top: 0,
        right: 0
    },
    redBox: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
        right: 0
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    }
});
