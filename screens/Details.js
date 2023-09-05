import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";

const Details = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  // console.log('====================================');
  // console.log(item);
  // console.log('====================================');
  return (
    <View>
      <ScrollView>
        <CartIcon />
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />
          <TouchableOpacity
            className="absolute p-2 mt-4 ml-2 rounded-full bg-white"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            onPress={() => navigation.goBack()}
          >
            <Icons.ArrowLeftIcon size={24} color={"white"} />
          </TouchableOpacity>
        </View>

        {/* View part */}

        <View
          style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
          className="bg-white -mt-10 pt-3"
        >
          <View className="px-5">
            <Text className="font-bold text-2xl">{item.name}</Text>
          </View>
          <View className="flex-row items-center justify-between px-2 mt-2">
            <Image
              source={require("../images/fullStar.png")}
              className="h-5 w-5"
            />
            <Text className="font-bold">{item.stars}</Text>
            <Text className="font-bold">({item.reviews})reviews</Text>
            <Text className="font-bold">{item.category}</Text>
            <Icons.MapPinIcon size={20} color={"black"} />
            <Text className="font-semibold">Nearby {item.address}</Text>
          </View>
          <Text className="mt-2 ml-4 text-lg font-bold">
            {item.description}
          </Text>

          {/* menu part */}
          <View className="mt-5 pb-10">
            <Text className="font-bold text-2xl px-4">Menu</Text>

            {/* dishes */}
            {item.dishes.map((item, index) => {
              return <DishRow key={index} item={{ ...item }} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
