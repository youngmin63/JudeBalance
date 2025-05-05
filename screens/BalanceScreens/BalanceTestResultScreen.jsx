import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function BalanceTestResultScreen({ route, navigation }) {
  const { score, duration } = route.params; // ✅ 컴포넌트 바깥에서 선언

  const getFeedback = (score) => {
    if (score >= 90) return "아주 훌륭해요! 균형 감각이 매우 안정적이에요 👏";
    if (score >= 70) return "좋아요! 꾸준히 유지하면 더 좋아질 거예요 👍";
    if (score >= 50) return "보통이에요. 가벼운 훈련을 추천해요 🙂";
    return "균형 향상이 필요해요. 꾸준한 연습이 중요해요 💪";
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🎯 균형 측정 결과</Text>
        <Text style={styles.score}>{score}점</Text>
        <Text style={styles.duration}>⏱️ 유지 시간: {duration}초</Text>
        <Text style={styles.feedback}>{getFeedback(score)}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Analyze")}
        >
          <Text style={styles.buttonText}>분석 화면으로 이동</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
  },
  card: {
    backgroundColor: "#fff",
    padding: 32,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: "80%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  score: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#14AE5C",
    marginBottom: 8,
  },
  duration: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  feedback: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 28,
  },
  button: {
    backgroundColor: "#14AE5C",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
