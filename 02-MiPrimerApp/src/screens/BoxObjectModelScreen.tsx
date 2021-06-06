import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 25,
    backgroundColor: 'crimson',
    color: 'white',
    textAlign: 'center',
    borderWidth: 6,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
