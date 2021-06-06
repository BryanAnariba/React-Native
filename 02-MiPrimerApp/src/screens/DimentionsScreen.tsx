import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';

// const { height, width } = Dimensions.get('window');

export const DimentionsScreen = () => {
    const {width, height} = useWindowDimensions();
    return (
    <View>
        <View style={ styles.container }>
            <View  style={{
                ...styles.purpleBox,
                width: width * 0.20,
                height: height * 0.20
            }}/>
            <View  style={{
                ...styles.orangeBox,
                width: width * 0.40,
                height: height * 0.10
            }} />
        </View>
        <Text> W: { width }, H: { height } </Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: 'purple',
        width: '50%', 
        height: '50%'
    },
    orangeBox: {
        backgroundColor: 'orange'
    }
});
