import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import { featured } from "../dummy_data";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-2 pb-2 mt-2">
        <View className="flex-row flex-1 p-3 mt-2 items-center space-x-1 border rounded-full border-gray-500">
          <Icons.MagnifyingGlassIcon size={24} color="black" />
          <TextInput placeholder="Restaurant" className="flex-1 ml-2" />
          <View className="flex-row pl-2 items-center border-0 border-l-2 border-l-gray-300">
            <Icons.MapPinIcon size={24} color={"black"} />
            <Text className="font-bold">Tiruchirapalli, TamilNadu</Text>
          </View>
        </View>
        <View className="flex-row items-center bg-gray-200 p-3 mt-2 rounded-full">
          <Icons.AdjustmentsHorizontalIcon size={24} color={"black"} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:70}}>
        {/* categories */}

        <Categories />

        {/* featured */}

        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <Featured
                key={index}
                title={item.title}
                restaurant={item.restaurants}
                desc={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
