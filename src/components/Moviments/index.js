import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Moviments({ data, isVisible, onToggle }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(data.id)}
      activeOpacity={0.7}
    >
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {isVisible ? (
          <Text style={data.type === 1 ? styles.value : styles.expenses}>
            {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`}
          </Text>
        ) : (
          <View style={styles.skeleton} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25,
    paddingBottom: 10,
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C54",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#706FD3",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16.5,
    color: "#2C2C54",
  },
  value: {
    fontSize: 16.5,
    fontWeight: "bold",
    color: "#2ECC71",
  },
  expenses: {
    fontSize: 16.5,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  skeleton: {
    width: 80,
    height: 15,
    backgroundColor: "rgba(108, 99, 255, 0.3)",
    borderRadius: 10,
  },
});
