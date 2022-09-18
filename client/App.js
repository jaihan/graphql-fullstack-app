import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-community/async-storage";
import { persistCache } from "apollo3-cache-persist";
import { AppLoading } from "expo";

import CheckoutScreen from "./src/CheckoutScreen";
import CheckoutDetailScreen from "./src/CheckoutDetailScreen";
import { screenOptions } from "./src/styles";
import { NativeBaseProvider, Box } from "native-base";

const Stack = createStackNavigator();

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

export default function App() {
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  if (loadingCache) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
          >
            <Stack.Screen
              name="Home"
              component={CheckoutScreen}
              options={{ title: "Checkout" }}
            />
            <Stack.Screen
              name="Detail"
              component={CheckoutDetailScreen}
              options={{ title: "Detail" }}
            />
          </Stack.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
