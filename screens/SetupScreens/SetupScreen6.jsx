import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SetupScreen6({navigation}) {
  const [level, setLevel] = useState(null);

  const handleNext = async () => {
    if (level) {
      await AsyncStorage.setItem('fitnessLevel', level);
      navigation.navigate('Setup7');
    } else {
      Alert.alert('운동 능력을 선택해주세요!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 상단 네비게이션 */}
        <TouchableOpacity
          style={styles.topNav}
          onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/73nvtd3r_expires_30_days.png',
            }}
            style={styles.backIcon}
            resizeMode="stretch"
          />
          <Text style={styles.backText}>이전</Text>
        </TouchableOpacity>

        {/* 타이틀 */}
        <Text style={styles.title}>내 운동 능력은 어느 정도인가요?</Text>
        <Text style={styles.subtitle}>
          여러분의 운동 능력을 알려주시면 맞춤 운동을 추천해 드려요!
        </Text>

        {/* 운동 레벨 선택 */}
        <View style={styles.levelContainer}>
          {['초보', '중급', '고급'].map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.levelButton,
                level === item && styles.selectedButton,
              ]}
              onPress={() => setLevel(item)}>
              <Text
                style={[
                  styles.levelText,
                  level === item && styles.selectedText,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 다음 버튼 */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  scrollContainer: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    alignItems: 'center',
  },
  topNav: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 40,
  },
  backIcon: {width: 12, height: 12},
  backText: {fontSize: 16, fontWeight: 'bold', color: '#232222', marginLeft: 8},
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#232222',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  levelContainer: {width: '100%', marginBottom: 60},
  levelButton: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  levelText: {fontSize: 20, color: '#232222', fontWeight: 'bold'},
  selectedButton: {backgroundColor: '#14AE5C', borderColor: '#14AE5C'},
  selectedText: {color: '#FFFFFF'},
  nextButton: {
    backgroundColor: '#14AE5C',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
  },
  nextButtonText: {color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'},
});
