import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("비밀번호 오류", "비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post("https://judebalancebackendserver.onrender.com/api/auth/signup", {
        username,
        password,
        email,
        gender: "male",
        phoneNumber: phone,
        age: 0,
        fitnessLevel: "none",
        height: 0,
        name: "",
        nickname: "",
        weight: 0,
      });

      console.log(response.data);
      Alert.alert("회원가입 성공", "로그인 화면으로 이동합니다.");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("회원가입 실패", error.response?.data?.message || "서버 오류가 발생했습니다.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* 상단 네비게이션 */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backRow}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/73nvtd3r_expires_30_days.png" }}
              style={styles.backIcon}
            />
            <Text style={styles.backText}>이전</Text>
          </TouchableOpacity>
          <Text style={styles.backText2}> 계정생성 </Text>
        </View>

        <Text style={styles.title}>Let's Start!</Text>

        {/* 입력창들 */}
        <TextInput placeholder="이메일" placeholderTextColor="#888" value={email} onChangeText={setEmail} style={styles.input} />
        <TextInput placeholder="유저 이름" placeholderTextColor="#888" value={username} onChangeText={setUsername} style={styles.input} />
        <TextInput placeholder="핸드폰 번호 (선택)" placeholderTextColor="#888" value={phone} onChangeText={setPhone} style={styles.input} />
        <TextInput placeholder="비밀번호" placeholderTextColor="#888" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <TextInput placeholder="비밀번호 확인" placeholderTextColor="#888" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.input} />

        {/* 가입하기 버튼 */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>가입하기</Text>
        </TouchableOpacity>

        {/* 로그인 링크 */}
        <View style={styles.loginRow}>
          <Text style={styles.grayText}>이미 계정이 있으신가요?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}> 
            <Text style={styles.linkText}>로그인하기</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContainer: { paddingHorizontal: 24, paddingVertical: 40 },
  topRow: { flexDirection: "row", alignItems: "center", marginBottom: 40 },
  backRow: { flexDirection: "row", alignItems: "center" },
  backIcon: { width: 12, height: 12 },
  backText: { fontSize: 20, fontWeight: "bold", color: "#232222", marginLeft: 8 },
  title: { fontSize: 28, fontWeight: "bold", color: "#232222", textAlign: "center", marginBottom: 40 },
  input: { backgroundColor: "#F2F2F2", borderRadius: 8, paddingVertical: 16, paddingHorizontal: 20, fontSize: 14, marginBottom: 20 },
  signupButton: { backgroundColor: "#14AE5C", borderRadius: 30, paddingVertical: 16, alignItems: "center", marginTop: 20, marginBottom: 30 },
  signupButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  loginRow: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
  grayText: { color: "#888", fontSize: 13 },
  linkText: { color: "#14AE5C", fontSize: 13, fontWeight: "bold", marginLeft: 6 },
  backText2: { fontSize: 20, fontWeight: "bold", color: "#232222", marginLeft: 80, },
});
