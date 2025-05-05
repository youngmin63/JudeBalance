import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SetupScreen2({ navigation }) {
  const [gender, setGender] = useState(null);

  const handleNext = async () => {
    if (gender) {
      await AsyncStorage.setItem("gender", gender);
      navigation.navigate("Setup3");
    } else {
      Alert.alert("성별을 선택해주세요!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 상단 네비게이션 */}
        <TouchableOpacity
          style={styles.topNav}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/73nvtd3r_expires_30_days.png",
            }}
            style={styles.backIcon}
            resizeMode="stretch"
          />

          <Text style={styles.backText}>이전</Text>
        </TouchableOpacity>

        {/* 타이틀 */}
        <Text style={styles.title}>성별을 선택해주세요</Text>

        {/* 성별 선택 버튼 */}
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "남자" && styles.selectedButton,
            ]}
            onPress={() => setGender("남자")}
          >
            <Text
              style={[
                styles.genderText,
                gender === "남자" && styles.selectedText,
              ]}
            >
              👨‍🦰 남자
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "여자" && styles.selectedButton,
            ]}
            onPress={() => setGender("여자")}
          >
            <Text
              style={[
                styles.genderText,
                gender === "여자" && styles.selectedText,
              ]}
            >
              👩 여자
            </Text>
          </TouchableOpacity>
        </View>

        {/* 다음 버튼 */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
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
    alignItems: "center",
  },
  topNav: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    marginBottom: 40,
  },
  backIcon: { width: 12, height: 12 },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#232222",
    marginLeft: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#232222",
    textAlign: "center",
    marginBottom: 60,
  },
  genderContainer: { width: "100%", marginBottom: 60 },
  genderButton: {
    backgroundColor: "#F2F2F2",
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },
  genderText: { fontSize: 20, color: "#232222", fontWeight: "bold" },
  selectedButton: { backgroundColor: "#896CFE", borderColor: "#896CFE" },
  selectedText: { color: "#FFFFFF" },
  nextButton: {
    backgroundColor: "#14AE5C",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
  },
  nextButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
