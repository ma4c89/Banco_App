import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";

const StatusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

Header.defaultProps = {
  name: "Usuário",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6C63FF",
    paddingTop: StatusBarHeight,
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 145,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 200, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15, // metade da largura/altura para ficar perfeitamente circular
  },
});
