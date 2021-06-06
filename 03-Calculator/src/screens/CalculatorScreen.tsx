import React from "react";
import {View, Text} from "react-native";
import {styles} from "../theme/AppTheme";
import {CalculatorButton} from "../components/CalculatorButton";
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {btnadd,
    btndivide,
    btnproduct,
    btnsubstract,
    calculate,
    clear,
    constructNumber,
    deleteLastClickedNumber,
    addPositiveOrNegativeSigno,
    number,
    previusNumber } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {
        ( previusNumber !== '0' ) && (<Text style={styles.littleResult}> {previusNumber} </Text>)
      }
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true}>
        {" "}
        {number}{" "}
      </Text>

      {/* Buttons */}
      <View style={styles.row}>
        <CalculatorButton title={"C"} buttonColor={"#9B9B9B"} action={clear} />
        <CalculatorButton title={"+/-"} buttonColor={"#9B9B9B"} action={ addPositiveOrNegativeSigno }/>
        <CalculatorButton title={"del"} buttonColor={"#9B9B9B"} action={ deleteLastClickedNumber }/>
        <CalculatorButton title={"/"} buttonColor={"#FF9427"} action={ btndivide }/>
      </View>

      <View style={styles.row}>
        <CalculatorButton title={"1"} action={constructNumber} />
        <CalculatorButton title={"2"} action={constructNumber} />
        <CalculatorButton title={"3"} action={constructNumber} />
        <CalculatorButton title={"x"} buttonColor={"#FF9427"} action={ btnproduct } />
      </View>

      <View style={styles.row}>
        <CalculatorButton title={"4"} action={constructNumber} />
        <CalculatorButton title={"5"} action={constructNumber} />
        <CalculatorButton title={"6"} action={constructNumber} />
        <CalculatorButton title={"-"} buttonColor={"#FF9427"} action={ btnsubstract }/>
      </View>

      <View style={styles.row}>
        <CalculatorButton title={"7"} action={constructNumber} />
        <CalculatorButton title={"8"} action={constructNumber} />
        <CalculatorButton title={"9"} action={constructNumber} />
        <CalculatorButton title={"+"} buttonColor={"#FF9427"} action={ btnadd }/>
      </View>

      <View style={styles.row}>
        <CalculatorButton title={"0"} ancho={true} action={constructNumber} />
        <CalculatorButton title={"."} action={constructNumber} />
        <CalculatorButton title={"="} buttonColor={"#FF9427"} action={ calculate }/>
      </View>
    </View>
  );
};
