import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

export default function CategorieCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
