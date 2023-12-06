import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Square;
