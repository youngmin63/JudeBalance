import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function BalanceTestScreen() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("BalanceTest2");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Video
          source={require("../../assets/videos/balance-guide.mp4")}
          style={styles.video}
          resizeMode="contain"
          shouldPlay
          isLooping
        />

        <View style={styles.textContainer}>
          <Text style={styles.instruction}>
            📱 휴대폰 → <Text style={styles.bold}>오른쪽 귀</Text>
            {"\n"}🦶 오른발 → <Text style={styles.bold}>왼쪽 무릎 안쪽  </Text>
            {"\n\n"}측정 중에는{" "}
            <Text style={styles.bold}>절대로 핸드폰을 귀에서 떼지 마세요.</Text>
            {"\n\n"}🔊 무음 모드일 경우{" "}
            <Text style={styles.bold}>소리를 켜 주세요.</Text>
          </Text>

          <Text style={styles.manualTitle}>📘 측정 매뉴얼</Text>
          <Text style={styles.manualText}>
            - 총 20초 동안 한 발로 균형을 유지합니다.{"\n"}
            - 자이로센서와 가속도센서로{" "}
            <Text style={styles.bold}>몸의 흔들림 정도</Text>를 계산합니다.{"\n"}
            - 흔들림이 적을수록{" "}
            <Text style={styles.bold}>높은 점수</Text>를 받게 됩니다.{"\n"}
            - 측정 종료 후 점수가 화면에 표시됩니다.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>이해했어요</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: { paddingBottom: 40 },
  video: { width: "100%", height: 320 },
  textContainer: {
    paddingHorizontal: 24,
    marginTop: 32,
    alignItems: "center",
  },
  instruction: {
    fontSize: 18,
    textAlign: "center",
    color: "#232222",
    lineHeight: 28,
    marginBottom: 28,
  },
  manualTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14AE5C",
    marginBottom: 10,
  },
  manualText: {
    fontSize: 16,
    color: "#444",
    lineHeight: 26,
    marginBottom: 36,
    textAlign: "left",
    alignSelf: "stretch",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    backgroundColor: "#14AE5C",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
