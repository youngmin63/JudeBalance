import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function OnboardingScreen3({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* 상단바 */}
      <View style={styles.topBar}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.skipText}>건너뛰기</Text>
        </TouchableOpacity>
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
       

        <Text style={styles.title}>
          균형 감각 향상에{"\n"}특화된 운동을 준비했습니다
        </Text>

        {/* 페이지 인디케이터 */}
        <View style={styles.pageIndicatorContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </ScrollView>

      {/* 하단 다음 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("Onboarding4")}> 
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  skipText: {
    fontSize: 16,
    color: "#888",
    fontWeight: "bold",
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop:300,
  },
  mainImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#232222",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
    lineHeight: 30,
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#896CFE",
    width: 20,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  nextButton: {
    backgroundColor: "#14AE5C",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
