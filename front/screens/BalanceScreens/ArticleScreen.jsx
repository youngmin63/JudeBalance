import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
export default function ArticleScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          {/* ✅ 상단 뒤로가기 버튼만 */}

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

        {/* ✅ "균형감각 아티클"은 따로 분리 */}
        <Text style={styles.text}>{" 균형감각 아티클"}</Text>

        <Text style={styles.text2}>{"Strength Training Tips"}</Text>
        <View style={styles.row2}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/kwrbt982_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image2}
          />
          <Text style={styles.text3}>{"published on September 15"}</Text>
        </View>
        <View style={styles.view}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/4svk2ypt_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image3}
          />
        </View>
        <Text style={styles.text4}>
          {
            "Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries, and unlock your full potential in the gym."
          }
        </Text>
        <Text style={styles.text5}>{"Plan Your Routine:"}</Text>
        <Text style={styles.text6}>
          {
            "Before starting any workout, plan your routine for the week. Focus on different muscle groups on different days to allow for adequate rest and recovery."
          }
        </Text>
        <Text style={styles.text5}>{"Warm-Up:"}</Text>
        <Text style={styles.text7}>
          {
            "Begin your workout with a proper warm-up session. This could include light cardio exercises like jogging or jumping jacks, as well as dynamic stretches to prepare your muscles for the upcoming workout."
          }
        </Text>
        <ImageBackground
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/mhp4c38o_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.column}
        >
          <View style={styles.row3}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/t65pzrjk_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image4}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/pln7qqzz_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image5}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/m71o502u_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/205i72md_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image7}
            />
          </View>
          <View style={styles.row4}>
            <Text style={styles.text8}>{"밸런스"}</Text>
            <Text style={styles.text9}>{"분석"}</Text>
            <Text style={styles.text10}>{"커뮤니티"}</Text>
            <Text style={styles.text11}>{"프로필"}</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  button: {
    borderRadius: 20,
    width: 19,
    height: 18,
    marginRight: 30,
    marginTop: 3,
    paddingRight: 30,
    fontWeight: "bold",
  },
  button2: {
    borderRadius: 20,
    width: 13,
    height: 18,
    marginRight: 20,
  },
  button3: {
    borderRadius: 20,
    width: 21,
    height: 21,
  },
  column: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 49,
  },
  image: {
    borderRadius: 20,
    width: 6,
    height: 11,
    marginRight: 13,
  },
  image2: {
    borderRadius: 20,
    width: 10,
    height: 10,
    marginRight: 6,
  },
  image3: {
    borderRadius: 20,
    height: 198,
    marginHorizontal: 35,
  },
  image4: {
    width: 29,
    height: 28,
    marginRight: 54,
  },
  image5: {
    width: 29,
    height: 28,
    marginRight: 66,
  },
  image6: {
    width: 29,
    height: 28,
    marginRight: 64,
  },
  image7: {
    width: 29,
    height: 28,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    marginHorizontal: 35,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    marginLeft: 35,
  },
  row3: {
    flexDirection: "row",
    marginBottom: 1,
  },
  row4: {
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
    color: "#212020",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    marginBottom: 70,
    marginLeft: 130,
  },
  text2: {
    color: "#212020",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 11,
    marginLeft: 36,
  },
  text3: {
    color: "#232222",
    fontSize: 14,
  },
  text4: {
    color: "#232222",
    fontSize: 14,
    marginBottom: 24,
    marginHorizontal: 36,
  },
  text5: {
    color: "#232222",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    marginLeft: 35,
  },
  text6: {
    color: "#232222",
    fontSize: 14,
    marginBottom: 19,
    marginHorizontal: 35,
  },
  text7: {
    color: "#232222",
    fontSize: 14,
    marginBottom: 14,
    marginHorizontal: 35,
  },
  text8: {
    color: "#232222",
    fontSize: 12,
    marginRight: 52,
  },
  text9: {
    color: "#232222",
    fontSize: 12,
    textAlign: "center",
    flex: 1,
  },
  text10: {
    color: "#232222",
    fontSize: 12,
    marginRight: 57,
  },
  text11: {
    color: "#232222",
    fontSize: 12,
  },
  view: {
    backgroundColor: "#FFFFFF",
    borderColor: "#212020",
    borderWidth: 1,
    paddingVertical: 22,
    marginBottom: 27,
  },
  image9: {
    borderRadius: 20,
    width: 6,
    height: 11,
    marginRight: 3,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 38,
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
    marginLeft: 8, // 아이콘과 텍스트 사이 간격
  },
});
