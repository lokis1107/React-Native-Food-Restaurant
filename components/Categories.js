import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../dummy_data";

const Categories = () => {
  const [activeCategories, setActiveCategories] = useState(null);
  return (
    <View className="flex-row">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{paddingHorizontal:15}}>
        {categories.map((item, index) => {
          let isActive = item.id == activeCategories;
          let bgClass = isActive ? "bg-gray-600 rounded-full" : "bg-gray-200 rounded-full";
          let bgText = isActive ? "font-bold" : ""
          return (
            <View
              key={index}
              className="flex items-center justify-center mr-2 mt-2"
            >
              <TouchableOpacity
                className={ bgClass}
                onPress={() => setActiveCategories(item.id)}
              >
                <Image source={item.image} style={{ height: 60, width: 60 }} />
              </TouchableOpacity>
              <Text className={bgText}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
