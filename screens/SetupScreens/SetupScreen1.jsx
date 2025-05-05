import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SetupScreen1({ navigation }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      setToken(storedToken);
      console.log("Setup1에서 불러온 토큰:", storedToken);
    };
    loadToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* 상단 이전 버튼 */}
        <TouchableOpacity style={styles.topNav} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/73nvtd3r_expires_30_days.png" }}
            style={styles.backIcon}
            resizeMode="stretch"
          />
          <Text style={styles.backText}>이전</Text>
        </TouchableOpacity>

        {/* 타이틀 */}
        <Text style={styles.title}>꾸준히 운동하는 것이 제일 중요합니다!</Text>

        {/* 설명 */}
        <Text style={styles.description}>
          바쁜 일상 속에서도 하루 5분의 운동 습관을 들이기 위해
          저희가 도와드릴게요.
        </Text>

        {/* 다음 버튼 */}
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("Setup2")}>
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  backIcon: {
    width: 12,
    height: 12,
  },
  backText: {
    fontSize: 16,
    color: "#232222",
    fontWeight: "bold",
    marginLeft: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#232222",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 80,
    paddingHorizontal: 10,
  },
  nextButton: {
    backgroundColor: "#14AE5C",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 20,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
