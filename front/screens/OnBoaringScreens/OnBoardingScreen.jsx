import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const pages = [
  { title: "당신의 밸런스를\n지금 측정해보세요" },
  { title: "AI가 분석하여\n맞춤 운동을 추천해드려요" },
  { title: "꾸준한 운동으로\n건강한 습관을 만들어보세요" },
];

export default function OnBoardingScreen({ navigation }) {
  const [pageIndex, setPageIndex] = useState(0);

  const handleNext = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.skipText}>건너뛰기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <Animated.View
          key={pageIndex}
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
        >
          <Text style={styles.title}>{pages[pageIndex].title}</Text>
        </Animated.View>

        <View style={styles.pageIndicatorContainer}>
          {pages.map((_, i) => (
            <View
              key={i}
              style={i === pageIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {pageIndex === pages.length - 1 ? "시작하기" : "다음"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F3F6" },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  skipText: { fontSize: 15, color: "#888", fontWeight: "500" },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#232222",
    textAlign: "center",
    marginTop: 24,
    lineHeight: 28,
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#3182F6",
    width: 16,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  nextButton: {
    backgroundColor: "#3182F6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
