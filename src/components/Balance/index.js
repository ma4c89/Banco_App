import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Balance({ saldo, gastos }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -18,
    marginStart: 15,
    marginEnd: 15,
    borderRadius: 10,
    paddingTop: 25,
    paddingBottom: 20,
    zIndex: 99,
    elevation: 8,
  },
  itemTitle: {
    fontSize: 18,
    color: "#6C63FF",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    fontSize: 19,
    color: "#6C63FF",
    marginRight: 6,
  },
  balance: {
    fontSize: 19,
    color: "#2ECC71",
  },
  expenses: {
    fontSize: 19,
    color: "#FF6B6B",
  },
});
