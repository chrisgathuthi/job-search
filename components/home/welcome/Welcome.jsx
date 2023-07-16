import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  PlatformColor,
  Image,
} from "react-native";
import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time")
  const jobType = ["Full-time", "Part-time", "Contractor"];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Chris</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="what are you looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtn}
          />
        </TouchableOpacity>
        <View style={styles.tabsContainer}>
          <FlatList
            data={jobType}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.tab(activeJobType, item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
