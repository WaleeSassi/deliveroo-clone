import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategorieCard from "./CategorieCard";
import client from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "category" ]{
      ...,
    }`
      )
      .then((data) => setCategories(data));
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories.map((e) => (
        <CategorieCard key={e._id} imgUrl={e.image} title={e.name} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
