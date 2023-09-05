import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="relative bg-white">
        {/* Back button */}

        <TouchableOpacity
          className="px-5 mt-2 border rounded-full p-3 w-14"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          onPress={() => navigation.goBack()}
        >
          <Icons.ArrowLeftIcon size={28} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
