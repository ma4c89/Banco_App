import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container} // ✅ Correção feita aqui
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="wallet" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Empréstimo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="mobile1" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Recarga</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Config.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="qrcode" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="swap" size={26} color="#6C63FF" />
        </View>
        <Text style={styles.labelButton}>Transferência</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 15,
    marginTop: 30,
    paddingEnd: 15,
    paddingStart: 15,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: "#FFFFFF",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    elevation: 20,
  },
  labelButton: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6C63FF",
  },
});
