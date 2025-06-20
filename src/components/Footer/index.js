import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="home" size={26} color="#6C63FF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="questioncircleo" size={26} color="#6C63FF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="search1" size={26} color="#6C63FF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 45, // empurra para cima
    elevation: 5,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    alignItems: "center",
  },
  areaButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EFEFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
