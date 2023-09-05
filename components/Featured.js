import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import FeaturedCard from "./FeaturedCard";

const Featured = ({ title, desc, restaurant }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View className="space-y-1">
          <Text className="font-bold text-xl text-gray-900">{title}</Text>
          <Text className="text-xs text-gray-500">{desc}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{ color: themeColors.text }}
            className="font-bold text-lg"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
      >
      {
        restaurant.map((item, index)=>{
            return(
                <FeaturedCard key={index} item={item} />
            )
        })
      }
      </ScrollView>
    </View>
  );
};

export default Featured;
