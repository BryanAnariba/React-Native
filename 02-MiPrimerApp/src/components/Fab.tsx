import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, position, onPress }: Props) => {
    const ios = () => {
        return (
            <TouchableNativeFeedback
                activeOpacity={ 0.8 }
                styles={[styles.fabLocation, 
                    ( position === 'br' ) ? styles.right : styles.left 
                ]}
                onPress={ onPress }>
                <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    const android = () => {
        return (
            <View style={[
                styles.fabLocation, 
                ( position === 'br' ) ? styles.right : styles.left 
                ]}>
                <TouchableNativeFeedback 
                    background={ TouchableNativeFeedback.Ripple('#28425B', true, 30) }
                    onPress={ onPress }>
                    <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    // OJO AL RETORNO, RESULTA QUE EL OTON ESTILIZADO NO E SIGUAL EN IOS Y EN IOS PERO CON ESTE TERNARIO SI
    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#56BAD6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 12,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
