import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
export default function PostScreen({ navigation }) {
  const [textInput1, onChangeTextInput1] = useState("");
  const [textInput2, onChangeTextInput2] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.buttonRow}
            onPress={() => navigation.navigate("Community")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/73nvtd3r_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image9}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Community")}>
              <Text style={styles.button}>{"이전"}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.text2}>{"게시물 작성"}</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.column2}>
            <View style={styles.row3}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/juxzg5sh_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image3}
              />
              <Text style={styles.text3}>{" Madison"}</Text>
            </View>
            <TextInput
              placeholder={"내용 입력"}
              value={textInput1}
              onChangeText={onChangeTextInput1}
              style={styles.input}
            />
          </View>
          <View style={styles.box2}></View>
          <TextInput
            placeholder={"사진 /영상 추가"}
            value={textInput2}
            onChangeText={onChangeTextInput2}
            style={styles.input2}
          />
          <View style={styles.view}>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text4}>{"등록하기"}</Text>
            </TouchableOpacity>
          </View>
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
    height: 9,
    marginBottom: 11,
    marginLeft: 98,
  },
  button: {
    borderRadius: 20,
    width: 6,
    height: 11,
    marginRight: 116,
  },
  button2: {
    backgroundColor: "#E2F163",
    borderColor: "#212020",
    borderRadius: 100,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 39,
   
  },
  column: {
    alignItems: "flex-start",
    borderColor: "#232222",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 26,
    marginBottom: 174,
    marginHorizontal: 35,
  },
  column2: {
    paddingBottom: 14,
    marginBottom: 4,
    marginHorizontal: 10,
  },
  column3: {
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
    width: 35,
    height: 35,
    marginRight: 5,
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
  input: {
    color: "#391713",
    fontSize: 20,
    marginHorizontal: 9,
    backgroundColor: "#FFFFFF",
    borderColor: "#212020",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 13,
    paddingLeft: 11,
    paddingRight: 22,
  },
  input2: {
    color: "#391713",
    fontSize: 20,
    marginBottom: 146,
    marginHorizontal: 19,
    backgroundColor: "#FFFFFF",
    borderColor: "#212020",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 8,
    paddingLeft: 11,
    paddingRight: 22,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    paddingHorizontal: 35,
    marginBottom: 30,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 89,
    marginLeft: 25,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 8,
    marginBottom: 47,
  },
  row4: {
    flexDirection: "row",
    marginBottom: 1,
  },
  row5: {
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
    color: "#232222",
    fontSize: 20,
    fontWeight: "bold",
    textAlign:'center',
    marginTop:50,
    marginLeft:80,
  },
  text3: {
    color: "#232222",
    fontSize: 15,
    fontWeight: "bold",
  },
  text4: {
    color: "#232222",
    fontSize: 17,
    fontWeight: "bold",
    
  },
  text5: {
    color: "#232222",
    fontSize: 12,
    marginRight: 57,
  },
  text6: {
    color: "#232222",
    fontSize: 12,
    textAlign: "center",
    flex: 1,
  },
  text7: {
    color: "#232222",
    fontSize: 12,
  },
  view: {
    alignItems: "center",
    marginLeft:90,
  },

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
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 38,
    marginLeft: 5,
  },
  button: {
    color: "#232222",
    fontSize: 15,
    fontWeight: "bold",
  },
  image9: {
    borderRadius: 20,
    width: 6,
    height: 11,
    marginRight: 3,
  },
});
