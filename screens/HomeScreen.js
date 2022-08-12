import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []); // when the UI Reload
  //when the functional component reload
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        
      }
    }`
      )
      .then((data) => setFeaturedCategory(data));
  }, []);
  return (
    <SafeAreaView className="pt-9 bg-white">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2">
          <SearchIcon color="#00CCBB" size={20} />
          <TextInput
            placeholder="Restaurants and cuisins"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {featuredCategory.map((e) => (
          <FeaturedRow
            key={e._id}
            id={e._id}
            title={e.name}
            description={e.short_description}
            featuredCategory="features"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
