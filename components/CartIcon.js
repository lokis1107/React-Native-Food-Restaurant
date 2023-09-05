import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row items-center justify-between rounded-full p-4 mx-4"
      >
        <View
          className="rounded-full px-4"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <Text className="text-lg font-bold text-white">3</Text>
        </View>
        <Text className="font-bold text-xl text-white">Cart Items</Text>
        <Text className="font-bold text-lg text-white">$10</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
