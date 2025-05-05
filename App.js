// App.js (다국어 통합 버전 + 매뉴얼 스크린 추가 + 영어 버전 매뉴얼)
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Video } from "expo-av";
import { Accelerometer, Gyroscope } from "expo-sensors";
import * as Speech from "expo-speech";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const Stack = createNativeStackNavigator();

function SetupScreen({ navigation }) {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState(null);

  const handleStart = async () => {
    if (!gender || !age || !language) {
      Alert.alert("모든 정보를 입력해주세요.");
      return;
    }
    await AsyncStorage.setItem("gender", gender);
    await AsyncStorage.setItem("age", age);
    await AsyncStorage.setItem("language", language);
    navigation.navigate("BalanceManual", { language });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>간단한 정보를 입력해주세요</Text>

      <Text style={styles.label}>언어 선택 / Language</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            language === "korean" && styles.selected,
          ]}
          onPress={() => setLanguage("korean")}
        >
          <Text style={styles.buttonText}>한국어</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            language === "english" && styles.selected,
          ]}
          onPress={() => setLanguage("english")}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>성별</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.genderButton, gender === "male" && styles.selected]}
          onPress={() => setGender("male")}
        >
          <Text style={styles.buttonText}>남성</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === "female" && styles.selected]}
          onPress={() => setGender("female")}
        >
          <Text style={styles.buttonText}>여성</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>나이</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
        placeholder="예: 25"
      />

      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startText}>시작하기 / Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function BalanceManualScreen({ route, navigation }) {
  const { language } = route.params;
  const handleNext = () => navigation.navigate("BalanceTest2", { language });

  const isKR = language === "korean";
  const texts = isKR
    ? {
        guide1: "📱 휴대폰 → ",
        ear: "오른쪽 귀",
        foot: "왼쪽 무릎 안쪽",
        caution: "절대로 핸드폰을 귀에서 떼지 마세요.",
        sound: "소리를 켜 주세요.",
        manualTitle: "📘 측정 매뉴얼",
        instruction1: "- 총 20초 동안 한 발로 균형을 유지합니다.",
        instruction2:
          "- 자이로센서와 가속도센서로 몸의 흔들림 정도를 계산합니다.",
        next: "이해했어요",
      }
    : {
        guide1: "📱 Phone → ",
        ear: "Right ear",
        foot: "Inner side of left knee",
        caution: "Do not remove the phone from your ear during measurement.",
        sound: "Please make sure sound is on.",
        manualTitle: "📘 How it works",
        instruction1: "- Maintain balance on one foot for 20 seconds.",
        instruction2: "- Gyroscope and accelerometer measure your body’s sway.",
        next: "Got it!",
      };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Video
          source={require("./assets/videos/balance-guide.mp4")}
          style={{ width: "100%", height: 320 }}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
        <View
          style={{ paddingHorizontal: 24, marginTop: 32, alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "#232222",
              lineHeight: 28,
              marginBottom: 28,
            }}
          >
            {texts.guide1}
            <Text style={{ fontWeight: "bold" }}>{texts.ear}</Text>
            {"\n"}
            🦶 {isKR ? "오른발 → " : "Right foot → "}
            <Text style={{ fontWeight: "bold" }}>{texts.foot}</Text>
            {"\n\n"}
            {isKR ? "측정 중에는 " : "During measurement, "}
            <Text style={{ fontWeight: "bold" }}>{texts.caution}</Text>
            {"\n\n"}
            🔊 {isKR ? "무음 모드일 경우 " : "If silent mode is on, "}
            <Text style={{ fontWeight: "bold" }}>{texts.sound}</Text>
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#14AE5C",
              marginBottom: 10,
            }}
          >
            {texts.manualTitle}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#444",
              lineHeight: 26,
              marginBottom: 36,
              textAlign: "left",
              alignSelf: "stretch",
            }}
          >
            {texts.instruction1}
            {"\n"}
            {texts.instruction2}
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#14AE5C",
              paddingVertical: 16,
              paddingHorizontal: 40,
              borderRadius: 30,
            }}
            onPress={handleNext}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              {texts.next}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function ThankYouScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        ✅ Measurement complete!{"\n"}Thank you for participating 🙏
      </Text>
    </SafeAreaView>
  );
}

function BalanceTestScreen2({ route, navigation }) {
  const lang = route.params?.language || "korean";
  const texts = {
    korean: {
      speak1: "눈을 감고 한쪽발을 반대 쪽 무릎에 대 주세요",
      speak2: "3초 후 측정을 시작합니다. 자세를 유지해주세요",
      guide1: "📱 휴대폰을 귀에 댄 후",
      guide2: "화면을 두 번 터치해주세요",
      timerLabel: "측정 중",
      done: "측정 종료",
      audio: "🎧 소리가 나오는 중입니다...",
      notice: "※ 소리가 들리지 않는다면 음량과 무음 모드를 확인해주세요.",
    },
    english: {
      speak1:
        "Please stand on one foot and place the other foot against your knee.",
      speak2: "We will begin in 3 seconds. Please stay still.",
      guide1: "📱 Hold phone to your ear",
      guide2: "Double tap the screen",
      timerLabel: "Measuring",
      done: "Measurement complete.",
      audio: "🎧 Audio is playing...",
      notice: "※ Please ensure your volume is up and not in silent mode.",
    },
  }[lang];

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
      language: lang === "korean" ? "ko-KR" : "en-US",
      onDone: () => {
        setIsSpeaking(false);
        if (onDone) onDone();
      },
    });
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < 300) handleStart();
    lastTap.current = now;
  };

  const handleStart = () => {
    Speech.stop();
    speak(texts.speak1, () => {
      speak(texts.speak2, () => {
        speak("3...", () =>
          speak("2...", () =>
            speak("1...", () => speak("시작!", () => startMeasurement()))
          )
        );
      });
    });
  };

  const startMeasurement = () => {
    setIsMeasuring(true);
    timerRef.current = 0;
    setTimer(0);
    gyroData.current = [];
    accelData.current = [];

    const interval = setInterval(() => {
      timerRef.current += 1;
      setTimer(timerRef.current);
      if (timerRef.current >= 20) stopMeasurement(interval);
    }, 1000);

    Gyroscope.setUpdateInterval(200);
    Accelerometer.setUpdateInterval(200);
    gyroRef.current = Gyroscope.addListener((d) => gyroData.current.push(d));
    accelRef.current = Accelerometer.addListener((d) =>
      accelData.current.push(d)
    );
  };

  const calculateBalanceScore = (gyroRecords, accelRecords) => {
    const gyroInstability =
      gyroRecords.reduce(
        (s, { x, y, z }) => s + Math.abs(x) + Math.abs(y) + Math.abs(z),
        0
      ) / gyroRecords.length;
    const accelInstability =
      accelRecords.reduce(
        (s, { x, y, z }) => s + Math.abs(Math.sqrt(x * x + y * y + z * z) - 1),
        0
      ) / accelRecords.length;
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
    const adjustedScore = Math.round(rawScore * Math.min(duration / 20, 1));
    speak(texts.done);
    navigation.navigate("ThankYou");
    try {
      const gender = await AsyncStorage.getItem("gender");
      const age = await AsyncStorage.getItem("age");
      await axios.post(
        "https://1faa-35-245-218-179.ngrok-free.app/api/balance/raw",
        {
          date: new Date().toISOString(),
          balanceScore: adjustedScore,
          duration,
          gender,
          age,
          gyro: gyroData.current,
          accel: accelData.current,
        }
      );
    } catch (e) {
      console.log("Failed to save:", e);
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
              <Text style={styles.timerLabel}>{texts.timerLabel}</Text>
              <Text style={styles.timer}>{timer} sec</Text>
            </View>
          ) : (
            <Animated.View style={[styles.guideCircle, { opacity: fadeAnim }]}>
              <Text style={styles.guideText}>{texts.guide1}</Text>
              <Text style={styles.guideTextBold}>{texts.guide2}</Text>
            </Animated.View>
          )}
          {isSpeaking && (
            <Text style={styles.speakingNotice}>{texts.audio}</Text>
          )}
        </View>
        <Text style={styles.soundNotice}>{texts.notice}</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Setup">
        <Stack.Screen
          name="Setup"
          component={SetupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BalanceManual"
          component={BalanceManualScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BalanceTest2"
          component={BalanceTestScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThankYou"
          component={ThankYouScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 24 },
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  label: { fontSize: 16, color: "#555", marginBottom: 8 },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  genderButton: {
    backgroundColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  selected: { backgroundColor: "#14AE5C" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 32,
  },
  startButton: {
    backgroundColor: "#14AE5C",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  startText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  text: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#333",
  },
});
