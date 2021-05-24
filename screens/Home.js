import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { COLORS, icons, images, SIZES, FONTS } from "../constants";

import {
  initialCurrentLocation,
  categoryData,
  affordable,
  fairPrice,
  expensive,
  restaurantData,
} from "../DummyData";

//42:30

const Home = () => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation
  );

  const onSelectCategory = (category) => {
    //Filter restaurant (Filters restaurants that contain the selected categories inside theier 'categories' array)
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };

  const renderHeader = () => {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMainCategories = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color: COLORS.white,
              // fontFamily: FONTS.body5.fontFamily,
              // fontSize: FONTS.body5.fontSize,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Main</Text>
        <Text style={{ ...FONTS.h1 }}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
