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

export default function OnboardingScreen4({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* 메인 콘텐츠 */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* 메인 이미지 */}
     
        {/* 메인 문구 */}
        <Text style={styles.title}>
          친구들과 내 운동을 공유하며{"\n"}같이 성장하세요
        </Text>

        {/* 페이지 인디케이터 */}
        <View style={styles.pageIndicatorContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

      </ScrollView>

      {/* 하단 시작하기 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("Login")}> 
          <Text style={styles.startButtonText}>시작하기</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
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
    marginTop: 50,
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
  startButton: {
    backgroundColor: "#14AE5C",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
