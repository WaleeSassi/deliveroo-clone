import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#00CCBB] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white font-extrabold">
          <Currency quantity={basketTotal} currency="EUR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
