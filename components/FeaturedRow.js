import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

export default function FeaturedRow({
  id,
  title,
  description,
  featuredCategory,
}) {
  const [restaurants, getRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" &&_id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
        
      }
    }[0]`,
        { id }
      )
      .then((data) => getRestaurants(data.restaurants));
  }, [id]);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map((e) => (
          <RestaurantCard
            key={e._id}
            id={e._id}
            imgUrl={e.image}
            title={e.name}
            rating={e.rating}
            genre={e.type.name}
            adress={e.adress}
            short_description={e.short_description}
            dishes={e.dishes}
            long={e.long}
            lat={e.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
