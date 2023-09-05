import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";

const DishRow = ({ item }) => {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl pb-3 shadow-2xl">
      <Image
        source={item.image}
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
      />
      <View className="px-4 items-center">
        <Text className="font-bold text-xl">{item.name}</Text>
        <Text className="text-gray-600">{item.description}</Text>

        {/* Amount part */}
        <View className="flex-row items-center justify-between">
          <View className="mr-20">
            <Text className="font-bold text-lg">${item.price}</Text>
          </View>
          <View className="flex-row items-center justify-between space-x-3">
            <TouchableOpacity className="rounded-full bg-orange-400 p-1">
              <Icons.MinusIcon size={20} color={"white"} />
            </TouchableOpacity>
            <Text className="font-bold text-lg">0</Text>
            <TouchableOpacity className="rounded-full bg-orange-400 p-1">
              <Icons.PlusIcon size={20} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
