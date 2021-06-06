import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    result: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 5
    },
    littleResult: {
        fontSize: 30,
        color: 'white',
        textAlign: 'right',
        color: 'rgba(255,255,255,0.5)'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    
    textButton: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: '400',
    }
});