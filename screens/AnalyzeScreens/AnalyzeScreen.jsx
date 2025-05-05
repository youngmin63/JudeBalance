// AnalyzeScreen.jsx - 점수 기반 리팩터링 버전

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function AnalyzeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [prediction, setPrediction] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  const [myAverage, setMyAverage] = useState(null);
  const [peerAverage, setPeerAverage] = useState(null);
  const [percentile, setPercentile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        const predictionRes = await axios.post(
          "https://535a-2001-2d8-e745-f8f0-488b-90ca-2ec2-3489.ngrok-free.app/api/ai/predict",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setPrediction(predictionRes.data);

        const history = predictionRes.data.balance_history || [];
        const scores = history.map((h) => h.balanceScore);

        const predicted =
          scores.length > 0
            ? scores[scores.length - 1] *
              (1 + predictionRes.data.expectedGrowth)
            : 0;

        const newChartData = [...scores.reverse(), predicted];
        setChartData(newChartData);

        const newLabels = scores
          .map((_, i) => `최근 ${scores.length - i}회차`)
          .concat("예측");
        setChartLabels(newLabels);

        const comparisonRes = await axios.get(
          "https://535a-2001-2d8-e745-f8f0-488b-90ca-2ec2-3489.ngrok-free.app/api/analyze/comparison",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMyAverage(comparisonRes.data.myAverage);
        setPeerAverage(comparisonRes.data.peerAverage);
        setPercentile(comparisonRes.data.percentile);

        setLoading(false);
      } catch (e) {
        console.error("예측 또는 비교 요청 실패:", e);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#896CFE"
          style={{ marginTop: 100 }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>내 또래와 기록 비교</Text>
        <View style={styles.compareBox}>
          <Text style={styles.compareText}>
            🧍 내 평균:{" "}
            <Text style={styles.highlight}>{myAverage?.toFixed(1)}점</Text>
          </Text>
          <Text style={styles.compareText}>
            👥 또래 평균:{" "}
            <Text style={styles.highlight}>{peerAverage?.toFixed(1)}점</Text>
          </Text>
          <Text style={styles.compareText}>
            🔝 상위 <Text style={styles.highlight}>{percentile}%</Text>에
            해당합니다
          </Text>
        </View>

        <Text style={styles.sectionTitle}>내 기록 분석</Text>
        <View style={styles.resultBox}>
          {prediction ? (
            <>
              <Text style={styles.predictionMessage}>{prediction.message}</Text>
              <Text style={styles.predictionReason}>
                📌 {prediction.reason}
              </Text>
              <Text style={styles.predictionGrowth}>
                📈 예상 성장률: {(prediction.expectedGrowth * 100).toFixed(1)}%
              </Text>
              <Text style={styles.unitLabel}>단위: 점수</Text>

              <LineChart
                data={{
                  labels: chartLabels,
                  datasets: [
                    {
                      data: chartData,
                      color: (opacity = 1) => `rgba(137, 108, 254, ${opacity})`,
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={Dimensions.get("window").width - 40}
                height={220}
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 1,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: () => "#232222",
                }}
                bezier
                style={{
                  marginVertical: 16,
                  borderRadius: 10,
                  alignSelf: "center",
                }}
              />
            </>
          ) : (
            <Text style={styles.noDataText}>예측 결과를 불러오는 중...</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("TotalRecord")}
        >
          <Text style={styles.buttonPrimaryText}>전체 기록 확인</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
    color: "#232222",
  },
  compareBox: {
    backgroundColor: "#F4F4F4",
    padding: 20,
    borderRadius: 14,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  compareText: { fontSize: 16, color: "#232222", marginBottom: 6 },
  highlight: { fontWeight: "bold", color: "#896CFE" },
  resultBox: {
    backgroundColor: "#F7F5FF",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  predictionMessage: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
    textAlign: "center",
  },
  predictionReason: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
    textAlign: "center",
  },
  predictionGrowth: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#3CB371",
    textAlign: "center",
  },
  unitLabel: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  buttonPrimary: {
    backgroundColor: "#E2F163",
    borderRadius: 20,
    paddingVertical: 14,
    marginHorizontal: 40,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 60,
  },
  buttonPrimaryText: { fontSize: 16, fontWeight: "bold", color: "#232222" },
  noDataText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
});
