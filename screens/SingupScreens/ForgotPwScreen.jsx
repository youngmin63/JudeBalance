import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text, TextInput, StyleSheet, Alert } from "react-native";

export default function ForgotPwScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email.includes("@")) {
      Alert.alert("이메일 오류", "올바른 이메일 주소를 입력해주세요.");
      return;
    }
    Alert.alert("전송 완료", "비밀번호 재설정 링크를 이메일로 보내드렸습니다.");
    setEmail("");
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
            <Text style={styles.backText}>이전 </Text>
          </TouchableOpacity>
		  <Text style={styles.backText2}>비밀번호 찾기 </Text>
        </View>

        {/* 메인 문구 */}
        <Text style={styles.title}>비밀번호를 잊으셨나요?</Text>
        <Text style={styles.description}>입력하신 이메일 주소로 링크를 보내드립니다.</Text>

        {/* 이메일 입력창 */}
        <TextInput
          placeholder="example@example.com"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        {/* 전송 버튼 */}
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>전송</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContainer: { paddingHorizontal: 24, paddingVertical: 40 },
  topRow: { flexDirection: "row", alignItems: "center", marginBottom: 100 },
  backRow: { flexDirection: "row", alignItems: "center" },
  backIcon: { width: 12, height: 12 },
  backText: { fontSize: 20, fontWeight: "bold", color: "#232222", marginLeft: 8 },
  title: { fontSize: 24, fontWeight: "bold", color: "#232222", textAlign: "center", marginBottom: 10 },
  description: { fontSize: 14, color: "#555", textAlign: "center", lineHeight: 22, marginBottom: 40 },
  input: { backgroundColor: "#F2F2F2", borderRadius: 8, paddingVertical: 16, paddingHorizontal: 20, fontSize: 14, marginBottom: 30 },
  sendButton: { backgroundColor: "#14AE5C", borderRadius: 30, paddingVertical: 16, alignItems: "center" },
  sendButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  backText2: { fontSize: 20, fontWeight: "bold", color: "#232222", marginLeft: 60 },
});
