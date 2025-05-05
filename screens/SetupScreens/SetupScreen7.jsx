import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function SetupScreen7({ navigation }) {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);


  const handleStart = async () => {
    try {
      const gender = await AsyncStorage.getItem("gender");
      const age = await AsyncStorage.getItem("age");
      const weight = await AsyncStorage.getItem("weight");
      const height = await AsyncStorage.getItem("height");
      const fitnessLevel = await AsyncStorage.getItem("fitnessLevel");

      console.log("gender from storage:", gender);
console.log("age from storage:", age);
console.log("weight from storage:", weight);
console.log("height from storage:", height);
console.log("fitnessLevel from storage:", fitnessLevel);

      if (!gender || !fitnessLevel) {
        Alert.alert("입력 오류", "성별과 운동 수준을 먼저 선택해주세요.");
        return;
      }

      const token = await AsyncStorage.getItem("userToken"); 
      console.log("전송할 토큰:", token);// ✅ 토큰 가져오기

      const setupData = {
        gender,
        age: Number(age),
        weight: Number(weight),
        height: Number(height),
        fitnessLevel,
        name,
        nickname,
        email,
        phoneNumber: phone,

        // 어떤 정보 암호화할지 정하기 , 다 하면 너무 느려짐 , 암호화시키기, 
       
      };

      console.log("보낼 데이터:", setupData);

      const response = await axios.post(
        "https://1960-218-235-68-44.ngrok-free.app/api/user/profile/me",
        setupData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,  // ✅ headers 안으로 이동
          },
        }
      );

      if (response.status === 200) {
        await AsyncStorage.multiRemove([
          "gender",
          "age",
          "weight",
          "height",
          "fitnessLevel",
        ]);
        navigation.replace("Balance");
      } else {
        Alert.alert("오류", "서버 저장에 실패했습니다.");
      }
    }  
    catch (error) {
      console.error(error);
      Alert.alert("오류", error.response?.data?.message || "서버 연결 실패");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
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

          <Text style={styles.title}>프로필을 완성해주세요</Text>

          <TouchableOpacity
            style={styles.profileImageContainer}
           
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.placeholderContainer}>
                <Text style={styles.plusSign}>+</Text>
                <Text style={styles.uploadText}>사진 업로드</Text>
              </View>
            )}
          </TouchableOpacity>

          <TextInput
            placeholder="이름"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="닉네임"
            value={nickname}
            onChangeText={setNickname}
            style={styles.input}
          />
          <TextInput
            placeholder="이메일"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="핸드폰 번호"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>시작하기</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  profileImage: { width: 120, height: 120, borderRadius: 60 },
  placeholderContainer: { alignItems: "center", justifyContent: "center" },
  plusSign: { fontSize: 40, color: "#888" },
  uploadText: { fontSize: 14, color: "#888" },
  input: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  startButton: {
    backgroundColor: "#14AE5C",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  startButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
