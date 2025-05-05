import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("입력 오류", "아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(
        "https://535a-2001-2d8-e745-f8f0-488b-90ca-2ec2-3489.ngrok-free.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.warn("로그인 응답이 JSON이 아님:", text);
        throw new Error("서버 오류가 발생했습니다. 다시 시도해주세요.");
      }

      if (response.ok) {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.setItem("token", data.token);
        console.log("전송할 토큰:", data.token);

        const profileResponse = await fetch(
          "https://535a-2001-2d8-e745-f8f0-488b-90ca-2ec2-3489.ngrok-free.app/api/user/me",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.token}`,
            },
          }
        );

        const profileText = await profileResponse.text();
        let profileData;
        try {
          profileData = JSON.parse(profileText);
        } catch (e) {
          console.warn("프로필 응답이 JSON이 아님:", profileText);
          throw new Error("프로필 정보를 가져오는 데 실패했습니다.");
        }

        if (profileResponse.ok) {
          if (profileData.isProfileSetupCompleted) {
            navigation.navigate("Balance");
          } else {
            navigation.navigate("Setup1");
          }
        } else {
          Alert.alert("오류", "프로필 정보를 가져오지 못했습니다.");
        }
      } else {
        Alert.alert(
          "로그인 실패",
          data.message || "유저 이름 또는 비밀번호를 확인해주세요."
        );
      }
    } catch (error) {
      console.error("로그인 처리 중 오류:", error.message);
      Alert.alert("에러", error.message || "서버와 연결할 수 없습니다.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>로그인</Text>
        <Text style={styles.subtitle}>환영합니다!</Text>
        <Text style={styles.description}>
          {"나의 밸런스를 측정하고,\n맞춤 운동으로\n균형잡힌 몸을 만드세요"}
        </Text>

        <TextInput
          placeholder="유저 이름"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.linkRow}>
          <Text style={styles.textGray}>비밀번호를 잊으셨나요?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPw")}>
            <Text style={styles.link}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linkRow}>
          <Text style={styles.textGray}>계정이 없으신가요?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.link}>회원가입</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.agreeText}>
          로그인하시면 아래 내용에 동의하는 것으로 간주됩니다.
        </Text>

        <View style={styles.policyRow}>
          <TouchableOpacity>
            <Text style={styles.policyLink}>개인정보 처리방침</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.policyLink}>이용약관</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollView: { flex: 1, paddingHorizontal: 24 },
  title: { fontSize: 28, fontWeight: "bold", color: "#232222", marginTop: 22 },
  subtitle: { fontSize: 20, color: "#232222", marginTop: 58 },
  description: { fontSize: 14, color: "#555", lineHeight: 22, marginTop: 22 },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    padding: 14,
    marginTop: 20,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#14AE5C",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 24,
  },
  loginButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  linkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  textGray: { color: "#888", fontSize: 13 },
  link: { color: "#14AE5C", fontSize: 13, fontWeight: "bold" },
  agreeText: {
    color: "#888",
    fontSize: 12,
    marginTop: 30,
    textAlign: "center",
  },
  policyRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  policyLink: { color: "#14AE5C", fontSize: 12, marginHorizontal: 10 },
});
