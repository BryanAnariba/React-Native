import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/AppTheme';


const App = () => {
  return (
    <SafeAreaView style={ styles.body }>
      {/* Ojo el status bar esto es por que en ios al poner en negro cubre la barra de arriba */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;
