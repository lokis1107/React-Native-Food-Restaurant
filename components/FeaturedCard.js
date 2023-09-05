import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const FeaturedCard = ({ item }) => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={()=> navigation.navigate("Details", {...item})}>
      <View className="ml-2 mr-2 bg-gray-100 rounded-3xl shadow-lg">
        <Image source={item.image} className="h-36 w-64 rounded-t-3xl" />
        <View className="px-2 pb-4 space-y-2 mt-1">
          <Text className="text-lg font-bold">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../images/fullStar.png")}
              className="h-5 w-5"
            />
            <Text className="font-bold">{item.stars}</Text>
            <Text className="font-bold">({item.reviews})reviews</Text>
            <Text className="font-bold pl-10">{item.category}</Text>
          </View>
          <View className="mt-1 flex-row items-center">
            <Icons. MapPinIcon size={20} color={"black"} />
            <Text className="font-semibold">Nearby {item.address}</Text>
        </View>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FeaturedCard;
