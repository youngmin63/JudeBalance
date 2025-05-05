import React from "react";
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
export default function BalanceScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Text style={styles.text}>{"밸런스"}</Text>
          <TouchableOpacity onPress={() => alert("Pressed!")}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/1sjlbk6e_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.button}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Pressed!")}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/nw0c4ia5_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.button2}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BalanceTest")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/x7vxplmf_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>{"밸런스 측정"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/ds9uiqs8_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>{"밸런스 운동"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>{"내 밸런스"}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TotalRecord")}
            style={styles.seeAllButton}
          >
            <Text style={styles.seeAllText}>{"모두보기 "}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recordCard}>
          <View style={styles.recordRow}>
            <Text style={styles.recordTitle}>{"균형 기록"}</Text>
            <Text style={styles.recordDescription}>
              {"현재 평균 기록 62초로 매우 우수해요!"}
            </Text>
          </View>

          <View style={styles.recordRow}>
            <Text style={styles.recordTitle}>{"운동 기록"}</Text>
            <Text style={styles.recordDescription}>
              {"이번주 운동 완료 4회로 우수해요!"}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.recommendCard}
          onPress={() => alert("Pressed!")}
        >
          <View style={styles.recommendContent}>
            <Text style={styles.recommendTitle}>{"이번주\n추천 운동"}</Text>
            <Text style={styles.recommendSubtitle}>
              {"Plank With Hip Twist"}
            </Text>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/cusizcwq_expires_30_days.png",
            }}
            resizeMode="contain"
            style={styles.recommendImage}
          />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>{"균형감각 아티클"}</Text>

        <View style={styles.articleRow}>
          <TouchableOpacity
            style={styles.articleCard}
            onPress={() => navigation.navigate("Article")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/ns5wlnb9_expires_30_days.png",
              }}
              resizeMode="cover"
              style={styles.articleImage}
            />
            <Text style={styles.articleTitle}>{"Supplement Guide..."}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.articleCard}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/75scadp8_expires_30_days.png",
              }}
              resizeMode="cover"
              style={styles.articleImage}
            />
            <Text style={styles.articleTitle}>
              {"15 Quick & Effective Daily Routines..."}
            </Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
  },
  button: {
    borderRadius: 20,
    width: 13,
    height: 18,
    marginRight: 20,
  },
  button2: {
    borderRadius: 20,
    width: 21,
    height: 21,
  },
  button3: {
    borderRadius: 20,
    width: 28,
    height: 32,
    marginBottom: 6,
  },
  button4: {
    borderRadius: 20,
    width: 32,
    height: 32,
    marginBottom: 6,
    marginTop: 4,
  },
  button5: {
    borderRadius: 20,
    width: 157,
    height: 134,
    marginRight: 9,
  },
  button6: {
    borderRadius: 20,
    width: 157,
    height: 134,
  },
  button7: {
    width: 29,
    height: 28,
    marginRight: 54,
  },
  button8: {
    width: 29,
    height: 28,
    marginRight: 70,
  },
  button9: {
    width: 29,
    height: 28,
    marginRight: 64,
  },
  button10: {
    width: 29,
    height: 28,
  },
  button11: {
    color: "#232222",
    fontSize: 12,
    marginRight: 54,
  },
  button12: {
    color: "#232222",
    fontSize: 12,
    marginRight: 65,
  },
  button13: {
    color: "#232222",
    fontSize: 12,
    marginLeft: 6,
    marginRight: 57,
  },
  button14: {
    color: "#232222",
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#212020",
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 25,
    marginBottom: 45,
    marginHorizontal: 34,
  },
  column: {
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 6,
    marginRight: 26,
  },
  column2: {
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 2,
  },
  column3: {
    alignItems: "flex-start",
    borderColor: "#232222",
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 24,
    marginBottom: 48,
    marginHorizontal: 35,
  },
  column4: {
    flex: 1,
    alignItems: "center",
    marginRight: 12,
  },
  column5: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 49,
  },
  image: {
    width: 6,
    height: 11,
    marginTop: 1,
  },
  image2: {
    borderRadius: 20,
    width: 157,
    height: 125,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 22,
    marginHorizontal: 34,
  },
  row2: {
    flexDirection: "row",
    alignContents: "center",

    alignItems: "flex-start",
    borderColor: "#212020",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 40,
    paddingLeft: 80,
    marginBottom: 34,
    marginHorizontal: 40,
  },
  row3: {
    flexDirection: "row",
    marginBottom: 11,
    marginHorizontal: 40,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginLeft: 43,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 43,
  },
  row6: {
    flexDirection: "row",
    marginBottom: 7,
    marginHorizontal: 35,
  },
  row7: {
    flexDirection: "row",
    marginBottom: 2,
    marginLeft: 41,
  },
  row8: {
    alignSelf: "stretch",
    flexDirection: "row",
    marginBottom: 1,
  },
  row9: {
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
    color: "#232222",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  text2: {
    color: "#232222",
    fontSize: 12,
  },
  text3: {
    color: "#232222",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    width: 56,
  },
  text4: {
    color: "#232222",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  text5: {
    color: "#34C759",
    fontSize: 14,
    marginRight: 23,
  },
  text6: {
    color: "#232222",
    fontSize: 12,
    flex: 1,
  },
  text7: {
    color: "#232222",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text8: {
    color: "#232222",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 7,
    marginLeft: 35,
  },
  text9: {
    color: "#232222",
    fontSize: 12,
    marginRight: 50,
  },
  text10: {
    color: "#232222",
    fontSize: 12,
    width: 112,
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },

  //
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#232222",
  },
  seeAllButton: {
    backgroundColor: "#E2F163",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#232222",
  },
  recordContainer: {
    paddingHorizontal: 20,
  },
  recordRow: {
    marginBottom: 12,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#232222",
    marginBottom: 4,
  },
  recordDescription: {
    fontSize: 14,
    color: "#666666",
  },

  //
  row2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  card: {
    width: 140,
    height: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // 안드로이드 그림자
  },
  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#232222",
  },

  //
  recommendCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android 그림자
  },
  recommendContent: {
    flex: 1,
  },
  recommendTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#232222",
    marginBottom: 8,
  },
  recommendSubtitle: {
    fontSize: 14,
    color: "#666666",
  },
  recommendImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },

  //
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#232222",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  articleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  articleCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  articleImage: {
    width: "100%",
    height: 100,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#232222",
    padding: 8,
  },

  //
  recordCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  recordRow: {
    marginBottom: 15,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#232222",
    marginBottom: 5,
  },
  recordDescription: {
    fontSize: 14,
    color: "#666666",
  },
});
