import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <View style={styles.game}>
      <Text style={styles.status}>{status}</Text>
      <Board squares={squares} onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    alignItems: "center",
    marginTop: 50,
  },
  status: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

const calculateWinner = (squares) => {
  // TODO: Implement logic to calculate the winner
  return null;
};

export default Game;
