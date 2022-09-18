import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles, { BLUE } from "./styles";

export default () => (
  <View style={styles.centered}>
    <ActivityIndicator size="large" color={BLUE} />
  </View>
);
