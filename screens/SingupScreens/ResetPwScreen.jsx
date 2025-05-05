import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
export default function ResetPwScreen({ navigation }) {
  const [textInput1, onChangeTextInput1] = useState("");
  const [textInput2, onChangeTextInput2] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/9q7rn46a_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.button}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{"비밀번호 재설정"}</Text>
        </View>
        <Text style={styles.text2}>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        </Text>
        <Text style={styles.text3}>{"새 비밀번호"}</Text>
        <TextInput
          placeholder={"*************"}
          value={textInput1}
          onChangeText={onChangeTextInput1}
          style={styles.input}
        />
        <Text style={styles.text3}>{" 새 비밀번호 재입력"}</Text>
        <TextInput
          placeholder={"*************"}
          value={textInput2}
          onChangeText={onChangeTextInput2}
          style={styles.input2}
        />
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.text4}>{"비밀번호 재설정"}</Text>
          </TouchableOpacity>
        </View>
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
    width: 6,
    height: 11,
    marginRight: 86,
  },
  button2: {
    borderColor: "#232222",
    borderRadius: 100,
    borderWidth: 1,
    paddingVertical: 11,
    paddingHorizontal: 19,
  },
  input: {
    color: "#232222",
    fontSize: 16,
    marginBottom: 13,
    marginHorizontal: 41,
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 18,
    paddingLeft: 25,
    paddingRight: 50,
  },
  input2: {
    color: "#232222",
    fontSize: 16,
    marginBottom: 81,
    marginHorizontal: 41,
    backgroundColor: "#FFFFFF",
    borderColor: "#232222",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 20,
    paddingLeft: 19,
    paddingRight: 38,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 76,
    marginLeft: 35,
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
  },
  text2: {
    color: "#232222",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 62,
    marginHorizontal: 33,
  },
  text3: {
    color: "#232222",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
    marginLeft: 46,
  },
  text4: {
    color: "#232222",
    fontSize: 18,
    fontWeight: "bold",
  },
  view: {
    alignItems: "center",
    marginBottom: 304,
  },
});
