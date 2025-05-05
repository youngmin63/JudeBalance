import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Accelerometer, Gyroscope } from "expo-sensors";
import * as Speech from "expo-speech";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function BalanceTestScreen2({ navigation }) {
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(0);
  const gyroData = useRef([]);
  const accelData = useRef([]);
  const gyroRef = useRef(null);
  const accelRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const lastTap = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text, onDone) => {
    setIsSpeaking(true);
    Speech.speak(text, {
      rate: 0.5,
      pitch: 1.2,
      voice:
        Platform.OS === "ios" ? "com.apple.ttsbundle.Yuna-compact" : undefined,
      onDone: () => {
        setIsSpeaking(false);
        if (onDone) onDone();
      },
    });
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < 300) {
      handleStart();
    }
    lastTap.current = now;
  };

  const handleStart = () => {
    Speech.stop();
    speak("눈을 감고 한쪽발을 반대 쪽 무릎에 대 주세요", () => {
      speak("3초 후 측정을 시작합니다. 자세를 유지해주세요", () => {
        speak("3...", () => {
          speak("2...", () => {
            speak("1...", () => {
              speak("시작!", () => {
                startMeasurement();
              });
            });
          });
        });
      });
    });
  };

  const [measuredDuration, setMeasuredDuration] = useState(0); // 추가

  const startMeasurement = () => {
    setIsMeasuring(true);
    timerRef.current = 0;
    setTimer(0);
    setMeasuredDuration(0); // 초기화
    gyroData.current = [];
    accelData.current = [];

    const interval = setInterval(() => {
      timerRef.current += 1;
      setTimer(timerRef.current);

      if (timerRef.current >= 20) {
        stopMeasurement(interval, 20);
      }
    }, 1000);

    // 센서 수집
    Gyroscope.setUpdateInterval(200);
    Accelerometer.setUpdateInterval(200);

    gyroRef.current = Gyroscope.addListener((data) => {
      gyroData.current.push(data);
    });

    accelRef.current = Accelerometer.addListener((data) => {
      accelData.current.push(data);
    });

    // 조기 발착 감지용 추가 조건이 있다면 여기에 작성 가능
    const SHAKE_THRESHOLD = 3.5; // 필요에 따라 조정 가능
    const CHECK_WINDOW_SIZE = 5; // 최근 N개로 판단

    gyroRef.current = Gyroscope.addListener((data) => {
      gyroData.current.push(data);

      // 자동 흔들림 감지
      if (gyroData.current.length >= CHECK_WINDOW_SIZE) {
        const recent = gyroData.current.slice(-CHECK_WINDOW_SIZE);
        const avgShake =
          recent.reduce((sum, { x, y, z }) => {
            return sum + Math.abs(x) + Math.abs(y) + Math.abs(z);
          }, 0) / CHECK_WINDOW_SIZE;

        if (avgShake > SHAKE_THRESHOLD) {
          setIsMeasuring(false);
          stopMeasurement(interval);
           // 자동 중단
        }
      }
    });
  };

  const calculateBalanceScore = (gyroRecords, accelRecords) => {
    const gyroInstability =
      gyroRecords.reduce((sum, { x, y, z }) => {
        return sum + Math.abs(x) + Math.abs(y) + Math.abs(z);
      }, 0) / gyroRecords.length;

    const accelInstability =
      accelRecords.reduce((sum, { x, y, z }) => {
        const magnitude = Math.sqrt(x * x + y * y + z * z);
        return sum + Math.abs(magnitude - 1);
      }, 0) / accelRecords.length;

    const rawScore = 100 - (gyroInstability * 10 + accelInstability * 50);
    return Math.max(0, Math.min(100, Math.round(rawScore)));
  };

  const stopMeasurement = async (interval) => {
    clearInterval(interval);
    gyroRef.current?.remove();
    accelRef.current?.remove();
    setIsMeasuring(false);

    const duration = timerRef.current;
    const rawScore = calculateBalanceScore(gyroData.current, accelData.current);

    // ✅ 유지 시간 기반 보정: 20초 미만이면 비율 감점
    const durationRatio = Math.min(duration / 20, 1);
    const adjustedScore = Math.round(rawScore * durationRatio);

    speak("측정 종료");
    navigation.navigate("BalanceResult", {
      score: adjustedScore,
      duration: duration, // ✅ 유지 시간 전달
    });

    try {
      const token = await AsyncStorage.getItem("token");
      await axios.post(
        "https://535a-2001-2d8-e745-f8f0-488b-90ca-2ec2-3489.ngrok-free.app/api/balance/save",
        {
          balanceScore: adjustedScore,
          duration: duration,
          date: new Date().toISOString().slice(0, 10),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      Alert.alert("✅ 기록 저장 완료");
      navigation.navigate("Analyze");
    } catch (error) {
      console.error("❌ 저장 실패:", error);
      Alert.alert("❌ 서버 저장 실패");
    }
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleDoubleTap}>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          {isMeasuring ? (
            <View style={styles.measureContainer}>
              <Text style={styles.timerLabel}>측정 중</Text>
              <Text style={styles.timer}>{timer} 초</Text>
            </View>
          ) : (
            <Animated.View style={[styles.guideCircle, { opacity: fadeAnim }]}>
              <Text style={styles.guideText}>📱 휴대폰을 귀에 댄 후</Text>
              <Text style={styles.guideTextBold}>
                화면을 두 번 터치해주세요
              </Text>
            </Animated.View>
          )}

          {isSpeaking && (
            <Text style={styles.speakingNotice}>
              🎧 소리가 나오는 중입니다...
            </Text>
          )}
        </View>
        <Text style={styles.soundNotice}>
          {`※ 소리가 들리지 않는다면 휴대폰 음량을 확인해주세요.\n무음 모드일 경우 무음 모드 해제가 필요합니다.`}
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  guideCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#E6F4EA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  guideText: { fontSize: 16, color: "#333" },
  guideTextBold: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14AE5C",
    marginTop: 6,
  },
  timerLabel: { fontSize: 18, color: "#888", marginBottom: 8 },
  timer: { fontSize: 56, fontWeight: "bold", color: "#14AE5C" },
  measureContainer: { alignItems: "center" },
  soundNotice: {
    marginTop: 20,
    fontSize: 13,
    color: "#888",
    textAlign: "center",
  },
  speakingNotice: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
});
