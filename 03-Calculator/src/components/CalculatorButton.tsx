import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "../theme/AppTheme";

interface Props {
  title: string;
  buttonColor?: string;
  ancho?: boolean;
  action?: (clickedNumber: string) => void;
}

export const CalculatorButton = ({
  title,
  buttonColor = "#2D2D2D",
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(title)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: buttonColor,
          width: ancho === true ? 160 : 80,
        }}
      >
        <Text
          style={{
            ...styles.textButton,
            color: buttonColor === "#9B9B9B" ? "black" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
