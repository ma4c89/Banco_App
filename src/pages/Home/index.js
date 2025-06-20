import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";
import Footer from "../../components/Footer";

const list = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "300,90",
    date: "05/07/2025",
    type: 0,
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "2.500,90",
    date: "07/07/2025",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "7.500,90",
    date: "10/07/2025",
    type: 1,
  },
];

export default function Home() {
  const [visibleItem, setVisibleItem] = useState(null);

  const toggleItem = (id) => {
    setVisibleItem((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <Header name="Sofia Ferreira" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Moviments
            data={item}
            isVisible={visibleItem === item.id}
            onToggle={toggleItem}
          />
        )}
      />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
    color: "#6C63FF",
  },
  list: {
    marginStart: 15,
    marginTop: 10,
    marginEnd: 15,
  },
});
