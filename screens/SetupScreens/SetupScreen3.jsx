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
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SetupScreen3({ navigation }) {
  const [age, setAge] = useState(28);

  const handleNext = async () => {
    await AsyncStorage.setItem('age', String(age));
    navigation.navigate("Setup4");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* 상단 네비게이션 */}
        <TouchableOpacity style={styles.topNav} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/73nvtd3r_expires_30_days.png" }}
            style={styles.backIcon}
          resizeMode="stretch"
          />
          <Text style={styles.backText}>이전</Text>
        </TouchableOpacity>

        {/* 타이틀 */}
        <Text style={styles.title}>나이를 선택해주세요</Text>
        <Text style={styles.subtitle}>정확한 운동 추천을 위해 필요해요</Text>

        {/* Picker 카드 */}
        <View style={styles.pickerCard}>
          <Picker
            selectedValue={String(age)}
            onValueChange={(itemValue) => setAge(Number(itemValue))}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {Array.from({ length: 100 }, (_, i) => (
              <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
            ))}
          </Picker>
        </View>

        {/* 선택된 나이 강조 표시 */}
        <View style={styles.resultRow}>
          <Text style={styles.ageText}>{age}</Text>
          <Text style={styles.unitText}>세</Text>
        </View>

        {/* 다음 버튼 */}
        <TouchableOpacity
  style={styles.nextButton}
  onPress={handleNext}
>

          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContainer: { paddingHorizontal: 24, paddingVertical: 40, alignItems: "center" },
  topNav: { flexDirection: "row", alignSelf: "flex-start", alignItems: "center", marginBottom: 40 },
  backIcon: { width: 12, height: 12 },
  backText: { fontSize: 16, fontWeight: "bold", color: "#232222", marginLeft: 8 },
  title: { fontSize: 28, fontWeight: "bold", color: "#232222", textAlign: "center", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#666", textAlign: "center", marginBottom: 30 },
  pickerCard: {
    //backgroundColor: "#F2F2F2",
    height:200,
    width:300,
    borderRadius: 16,
  
    padding: 10,
    marginBottom: 40,
 
    alignItems: "center",
  },
  picker: { width: 200, height: 150 },
  pickerItem: { fontSize: 32, color: "#232222" },
  resultRow: { flexDirection: "row", alignItems: "flex-end", marginBottom: 60 },
  ageText: { fontSize: 64, fontWeight: "bold", color: "#232222", marginRight: 6 },
  unitText: { fontSize: 24, color: "#232222", marginBottom: 10 },
  nextButton: {
    backgroundColor: "#14AE5C",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
  },
  nextButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
