import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeIn, runOnJS } from "react-native-reanimated";

export default function LaunchScreen({ navigation }) {
  const hasAnimated = useRef(false); // 애니메이션이 끝났는지 추적

  useEffect(() => {
    const clearExpiredToken = async () => {
      const token = await AsyncStorage.getItem("usertoken");
      if (token) {
        await AsyncStorage.removeItem("usertoken");
      }
    };
    clearExpiredToken();
  }, []);

  const handleAfterFadeIn = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // FadeIn 끝난 뒤 1.5초 뒤에 이동
    setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Animated.Text
            entering={FadeIn.duration(1000).withCallback(() =>
              runOnJS(handleAfterFadeIn)()
            )}
            style={styles.text}
          >
            {"\n균형\n\n마당"}
          </Animated.Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
  },
  text: {
    color: "#212020",
    fontSize: 40,
    fontWeight: "bold",
  },
  view: {
    alignItems: "center",
    marginTop: 300,
    marginBottom: 359,
  },
});
