import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function RecordScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("balance"); // 'balance' or 'workout'
  const [selectedDate, setSelectedDate] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (selectedDate) {
      fetchRecords(selectedDate, activeTab);
    }
  }, [selectedDate, activeTab]);

  const fetchRecords = async (date, tab) => {
    setLoading(true);
    try {
      // TODO: 실제 백엔드 API 호출로 변경
      const dummyBalanceRecords = [
        {
          id: 1,
          exercise: "한발서기",
          kcal: 50,
          duration: 2,
          date: date.toString().slice(0, 10),
        },
      ];
      const dummyWorkoutRecords = [
        {
          id: 2,
          exercise: "푸쉬업",
          kcal: 120,
          duration: 30,
          date: date.toString().slice(0, 10),
        },
        {
          id: 3,
          exercise: "스쿼트",
          kcal: 100,
          duration: 25,
          date: date.toString().slice(0, 10),
        },
      ];
      setRecords(tab === "balance" ? dummyBalanceRecords : dummyWorkoutRecords);
    } catch (error) {
      console.error(error);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backContentRow}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/73nvtd3r_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.backIcon}
              />
              <Text style={styles.backButton}>{"이전"}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 상단 탭 영역 */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "balance" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("balance")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "balance" && styles.activeTabText,
              ]}
            >
              균형 기록
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "workout" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("workout")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "workout" && styles.activeTabText,
              ]}
            >
              운동 기록
            </Text>
          </TouchableOpacity>
        </View>

        {/* 캘린더 */}
        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={onDateChange}
            todayBackgroundColor="#E2F163"
            selectedDayColor="#896CFE"
            selectedDayTextColor="#FFFFFF"
            previousTitle="이전"
            nextTitle="다음"
            months={[
              "1월",
              "2월",
              "3월",
              "4월",
              "5월",
              "6월",
              "7월",
              "8월",
              "9월",
              "10월",
              "11월",
              "12월",
            ]}
            textStyle={styles.calendarText}
          />
        </View>

        <Text style={styles.sectionTitle}>기록</Text>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#896CFE"
            style={{ marginTop: 20 }}
          />
        ) : records.length > 0 ? (
          records.map((record) => (
            <View key={record.id} style={styles.recordCard}>
              <View style={styles.recordLeft}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/9krjmv9i_expires_30_days.png",
                  }}
                  style={styles.recordIcon}
                />
                <View style={styles.recordInfo}>
                  <Text style={styles.kcalText}>{record.kcal} 칼로리</Text>
                  <Text style={styles.exerciseText}>{record.exercise}</Text>
                  <Text style={styles.dateText}>{record.date}</Text>
                </View>
              </View>
              <View style={styles.recordRight}>
                <Text style={styles.durationLabel}>시간</Text>
                <Text style={styles.durationText}>{record.duration} 분</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>운동 기록이 없습니다.</Text>
        )}
      </ScrollView>
      {/* 추가*/}

      <ImageBackground
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/r88zjmhn_expires_30_days.png",
        }}
        resizeMode="stretch"
        style={styles.bottomTabContainer}
      >
        <View style={styles.bottomTabRow}>
          {/* 밸런스 */}
          <View style={styles.tabItem}>
            <TouchableOpacity onPress={() => navigation.navigate("Balance")}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/53bgaoiv_expires_30_days.png",
                }}
                style={styles.tabIcon}
              />
            </TouchableOpacity>
            <Text style={styles.tabLabel}>밸런스</Text>
          </View>

          {/* 분석 */}
          <View style={styles.tabItem}>
            <TouchableOpacity onPress={() => navigation.navigate("Analyze")}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/40sxr3rx_expires_30_days.png",
                }}
                style={styles.tabIcon}
              />
            </TouchableOpacity>
            <Text style={styles.tabLabel}>분석</Text>
          </View>

          {/* 커뮤니티 */}
          <View style={styles.tabItem}>
            <TouchableOpacity onPress={() => navigation.navigate("Community")}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/2zdzmpz5_expires_30_days.png",
                }}
                style={styles.tabIcon}
              />
            </TouchableOpacity>
            <Text style={styles.tabLabel}>커뮤니티</Text>
          </View>

          {/* 프로필 */}
          <View style={styles.tabItem}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/t3350zhz_expires_30_days.png",
                }}
                style={styles.tabIcon}
              />
            </TouchableOpacity>
            <Text style={styles.tabLabel}>프로필</Text>
          </View>
        </View>
      </ImageBackground>

      {/*추가 끝 */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    width: 15,
    height: 8,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderRadius: 58,
    borderWidth: 2,
    marginRight: 6,
  },
  box2: {
    width: 7,
    height: 30,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    marginRight: 6,
  },
  box3: {
    width: 7,
    height: 30,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    marginTop: 64,
    marginRight: 8,
  },
  button: {
    borderRadius: 20,
    width: 6,
    height: 11,
    marginRight: 13,
  },
  button2: {
    borderRadius: 20,
    width: 19,
    height: 18,
    marginRight: 21,
  },
  button3: {
    borderRadius: 20,
    width: 13,
    height: 18,
    marginRight: 20,
  },
  button4: {
    borderRadius: 20,
    width: 21,
    height: 21,
  },
  button5: {
    flex: 1,
    backgroundColor: "#E2F163",
    borderColor: "#212020",
    borderRadius: 38,
    borderWidth: 1,
    paddingVertical: 7,
    marginRight: 21,
  },
  button6: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#212020",
    borderRadius: 38,
    borderWidth: 1,
    paddingVertical: 7,
  },
  button7: {
    borderRadius: 20,
    width: 15,
    height: 7,
  },
  column: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 9,
    marginRight: 2,
  },
  column2: {
    marginBottom: 12,
  },
  column3: {
    alignItems: "center",
  },
  column4: {
    marginVertical: 17,
    marginRight: 34,
  },
  column5: {
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 17,
    marginBottom: 25,
    marginHorizontal: 47,
  },
  column6: {
    flex: 1,
    marginRight: 12,
  },
  column7: {
    flex: 1,
    marginVertical: 1,
    marginRight: 12,
  },
  column8: {
    alignItems: "center",
    marginTop: 1,
  },
  column9: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 49,
  },
  image: {
    width: 13,
    height: 11,
    marginRight: 5,
  },
  image2: {
    width: 17,
    height: 9,
  },
  image3: {
    borderRadius: 20,
    width: 9,
    height: 15,
    marginBottom: 34,
    marginLeft: 1,
  },
  image4: {
    borderRadius: 20,
    width: 109,
    height: 109,
  },
  image5: {
    borderRadius: 20,
    height: 1,
    marginBottom: 15,
    marginHorizontal: 47,
  },
  image6: {
    borderRadius: 20,
    height: 1,
    marginBottom: 26,
    marginHorizontal: 47,
  },
  image7: {
    borderRadius: 20,
    width: 45,
    height: 45,
    marginRight: 9,
  },
  image8: {
    borderRadius: 20,
    width: 7,
    height: 9,
    marginLeft: 1,
  },
  image9: {
    borderRadius: 20,
    width: 16,
    height: 16,
    marginTop: 20,
    marginRight: 8,
  },
  image10: {
    borderRadius: 20,
    width: 7,
    height: 9,
    marginLeft: 2,
  },
  image11: {
    borderRadius: 20,
    width: 16,
    height: 16,
    marginTop: 21,
    marginRight: 8,
  },
  image12: {
    width: 29,
    height: 28,
    marginRight: 54,
  },
  image13: {
    width: 29,
    height: 28,
    marginRight: 66,
  },
  image14: {
    width: 29,
    height: 28,
    marginRight: 64,
  },
  image15: {
    width: 29,
    height: 28,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    paddingHorizontal: 35,
    marginBottom: 29,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    marginHorizontal: 35,
  },
  row3: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#D9D9D9",
    paddingVertical: 7,
    paddingLeft: 51,
    paddingRight: 40,
    marginBottom: 38,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  row5: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 28,
    marginHorizontal: 35,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },
  row7: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  row8: {
    flexDirection: "row",
    marginBottom: 14,
    marginLeft: 22,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 22,
  },
  row10: {
    flexDirection: "row",
    marginBottom: 19,
    marginLeft: 22,
  },
  row11: {
    flexDirection: "row",
    marginBottom: 19,
    marginHorizontal: 22,
  },
  row12: {
    flexDirection: "row",
    marginLeft: 23,
  },
  row13: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderColor: "#212020",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginBottom: 16,
    marginHorizontal: 35,
  },
  row14: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderColor: "#212020",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginBottom: 7,
    marginHorizontal: 34,
  },
  row15: {
    flexDirection: "row",
    marginBottom: 1,
  },
  row16: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    flex: 1,
  },
  text2: {
    color: "#212020",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  text3: {
    color: "#232222",
    fontSize: 22,
    fontWeight: "bold",
  },
  text4: {
    color: "#232222",
    fontSize: 14,
    marginLeft: 5,
  },
  text5: {
    color: "#232222",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 1,
  },
  text6: {
    color: "#232222",
    fontSize: 14,
  },
  text7: {
    color: "#232222",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 28,
  },
  text8: {
    color: "#896CFE",
    fontSize: 17,
    textAlign: "center",
    marginHorizontal: 24,
  },
  text9: {
    color: "#232222",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 94,
  },
  text10: {
    color: "#232222",
    fontSize: 14,
    marginRight: 33,
  },
  text11: {
    color: "#212020",
    fontSize: 12,
  },
  text12: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 37,
  },
  text13: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 34,
  },
  text14: {
    color: "#000000",
    fontSize: 12,
  },
  text15: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 32,
  },
  text16: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
  },
  text17: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 29,
  },
  text18: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 33,
  },
  text19: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 30,
  },
  text20: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 26,
  },
  text21: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  text22: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 27,
  },
  text23: {
    color: "#000000",
    fontSize: 12,
    marginRight: 28,
  },
  text24: {
    color: "#212020",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 35,
  },
  text25: {
    color: "#212020",
    fontSize: 12,
    marginLeft: 11,
  },
  text26: {
    color: "#232222",
    fontSize: 13,
    fontWeight: "bold",
    marginHorizontal: 1,
  },
  text27: {
    color: "#B3A0FF",
    fontSize: 12,
    fontWeight: "bold",
  },
  text28: {
    color: "#232222",
    fontSize: 13,
    fontWeight: "bold",
  },
  text29: {
    color: "#896CFE",
    fontSize: 15,
    fontWeight: "bold",
  },
  text30: {
    color: "#212020",
    fontSize: 12,
    marginLeft: 12,
  },
  text31: {
    color: "#232222",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 1,
    width: 48,
  },
  text32: {
    color: "#232222",
    fontSize: 12,
    marginRight: 57,
  },
  text33: {
    color: "#232222",
    fontSize: 12,
    textAlign: "center",
    flex: 1,
  },
  text34: {
    color: "#232222",
    fontSize: 12,
  },
  view: {
    alignItems: "center",
    marginBottom: 10,
  },
  view2: {
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    paddingLeft: 3,
    paddingRight: 20,
    marginRight: 7,
  },
  view3: {
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    paddingLeft: 3,
    paddingRight: 19,
    marginRight: 8,
  },
  view4: {
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    paddingLeft: 2,
    paddingRight: 20,
    marginRight: 6,
  },
  view5: {
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 20,
    marginRight: 7,
  },
  view6: {
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    paddingLeft: 5,
    paddingRight: 18,
    marginRight: 8,
  },
  view7: {
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    marginRight: 7,
  },
  view8: {
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    paddingLeft: 2,
    paddingRight: 21,
  },
  view9: {
    backgroundColor: "#E2F163",
    borderRadius: 13,
    paddingVertical: 5,
    paddingLeft: 1,
    paddingRight: 14,
    marginRight: 19,
  },

  monthSelector: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  monthButton: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  monthItem: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#232222",
  },
  selectedMonthItem: {
    color: "#896CFE",
    textDecorationLine: "underline",
  },
  calendarText: {
    fontFamily: "System",
    color: "#232222",
  },
  // 새로 추가
  bottomTabContainer: {
    alignItems: "center",
    paddingVertical: 6,

    backgroundColor: "#FFFFFF",
  },

  bottomTabRow: {
    justifyContent: "space-around",

    flexDirection: "row",
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
  },

  tabIcon: {
    width: 29,
    height: 28,
  },

  tabLabel: {
    fontSize: 12,
    color: "#232222",
    marginTop: 4,
  },
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  tabRow: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginHorizontal: 10,
  },
  activeTabButton: { backgroundColor: "#896CFE" },
  tabText: { fontSize: 16, color: "#232222", fontWeight: "bold" },
  activeTabText: { color: "#FFFFFF" },
  calendarContainer: { marginHorizontal: 20, marginVertical: 20 },
  calendarText: { color: "#232222", fontSize: 14 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#232222",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  recordCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  recordLeft: { flexDirection: "row", alignItems: "center" },
  recordIcon: { width: 45, height: 45, marginRight: 15 },
  recordInfo: { justifyContent: "center" },
  kcalText: { fontSize: 12, color: "#666666" },
  exerciseText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#232222",
    marginVertical: 2,
  },
  dateText: { fontSize: 12, color: "#AAAAAA" },
  recordRight: { alignItems: "center" },
  durationLabel: { fontSize: 12, color: "#AAAAAA" },
  durationText: { fontSize: 16, fontWeight: "bold", color: "#896CFE" },
  noDataText: {
    fontSize: 14,
    color: "#999999",
    textAlign: "center",
    marginTop: 30,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    fontSize: 24,
    color: "#232222",
    fontWeight: "bold",
  },

  backContentRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    width: 12,
    height: 12,
  },
  backButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#232222",
    marginLeft: 3, // 아이콘과 텍스트 사이 간격
  },
});
