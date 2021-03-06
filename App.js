import React from "react";
import { SafeAreaView, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/Tabs";

import { Home, Restaurant, OrderDelivery } from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
