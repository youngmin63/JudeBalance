import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, } from "react-native";

// ✅ 아이콘 이미지 URL 선언
const profileImageUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/0dvmpuwh_expires_30_days.png";
const infoIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/ga7odye4_expires_30_days.png";
const postIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/2o9xobmj_expires_30_days.png";
const friendIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/qelv03er_expires_30_days.png";
const settingIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/tslkoxh0_expires_30_days.png";
const logoutIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/e9sgj1sk_expires_30_days.png";





export default function ProfileScreen ({navigation})  {
	return (<SafeAreaView style={styles.container}>
		<ScrollView>
	  
		  {/* 프로필 카드 */}
		  <View style={styles.profileCard}>
			<Image source={{ uri: profileImageUri }} style={styles.profileImage} />
			<Text style={styles.username}>권영민</Text>
			<Text style={styles.email}>madisons@example.com</Text>
		  </View>
	  
		  {/* 인바디 정보 카드 */}
		  <View style={styles.bodyStatsRow}>
			<View style={styles.bodyStat}>
			  <Text style={styles.bodyStatValue}>75kg</Text>
			  <Text style={styles.bodyStatLabel}>몸무게</Text>
			</View>
			<View style={styles.bodyStat}>
			  <Text style={styles.bodyStatValue}>28</Text>
			  <Text style={styles.bodyStatLabel}>나이</Text>
			</View>
			<View style={styles.bodyStat}>
			  <Text style={styles.bodyStatValue}>1.65m</Text>
			  <Text style={styles.bodyStatLabel}>키</Text>
			</View>
		  </View>
	  
		  {/* 메뉴 버튼 */}
		  <TouchableOpacity style={styles.menuButton} onPress={() => alert('내 기본정보')}>
			<Image source={{ uri: infoIconUri }} style={styles.menuIcon} />
			<Text style={styles.menuText}>내 기본정보</Text>
		  </TouchableOpacity>
	  
		  <TouchableOpacity style={styles.menuButton} onPress={() => alert('내 게시물')}>
			<Image source={{ uri: postIconUri }} style={styles.menuIcon} />
			<Text style={styles.menuText}>내 게시물</Text>
		  </TouchableOpacity>
	  
		  <TouchableOpacity style={styles.menuButton} onPress={() => alert('친구')}>
			<Image source={{ uri: friendIconUri }} style={styles.menuIcon} />
			<Text style={styles.menuText}>친구</Text>
		  </TouchableOpacity>
	  
		  <TouchableOpacity style={styles.menuButton} onPress={() => alert('설정')}>
			<Image source={{ uri: settingIconUri }} style={styles.menuIcon} />
			<Text style={styles.menuText}>설정</Text>
		  </TouchableOpacity>
	  
		  <TouchableOpacity style={styles.menuButton} onPress={() => alert('로그아웃')}>
			<Image source={{ uri: logoutIconUri }} style={styles.menuIcon} />
			<Text style={styles.menuText}>로그아웃</Text>
		  </TouchableOpacity>
	  
		</ScrollView>
	
	  
		
            { /* 추가*/}

<ImageBackground 
source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/r88zjmhn_expires_30_days.png" }} 
resizeMode="stretch"
style={styles.bottomTabContainer}
>
<View style={styles.bottomTabRow}>

{/* 밸런스 */}
<View style={styles.tabItem}>
<TouchableOpacity onPress={() => navigation.navigate('Balance')}>
  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/53bgaoiv_expires_30_days.png" }} style={styles.tabIcon} />
</TouchableOpacity>
<Text style={styles.tabLabel}>밸런스</Text>
</View>

{/* 분석 */}
<View style={styles.tabItem}>
<TouchableOpacity onPress={() => navigation.navigate('Analyze')}>
  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/40sxr3rx_expires_30_days.png" }} style={styles.tabIcon} />
</TouchableOpacity>
<Text style={styles.tabLabel}>분석</Text>
</View>

{/* 커뮤니티 */}
<View style={styles.tabItem}>
<TouchableOpacity onPress={() => navigation.navigate('Community')}>
  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/2zdzmpz5_expires_30_days.png" }} style={styles.tabIcon} />
</TouchableOpacity>
<Text style={styles.tabLabel}>커뮤니티</Text>
</View>

{/* 프로필 */}
<View style={styles.tabItem}>
<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/t3350zhz_expires_30_days.png"}} style={styles.tabIcon} />
</TouchableOpacity>
<Text style={styles.tabLabel}>프로필</Text>
</View>

</View>
</ImageBackground>

{/*추가 끝 */}
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		width: 6,
		height: 11,
	},
	button: {
		width: 29,
		height: 28,
		marginRight: 54,
	},
    button1: {
		width: 29,
		height: 28,
		marginRight: 64,
	},
    

	button2: {
		width: 29,
		height: 28,
		marginRight: 64,
	},
	button3: {
		width: 29,
		height: 28,
	},
	button4: {
		color: "#232222",
		fontSize: 12,
		marginRight: 55,
	},
	button5: {
		color: "#232222",
		fontSize: 12,
		marginRight: 65,
	},
	button6: {
		color: "#232222",
		fontSize: 12,
		marginRight: 55,
       
	},
	button7: {
		color: "#232222",
		fontSize: 12,
       
	},
	buttonRow: {
		flexDirection: "row",
        
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 35,
	},
	buttonRow2: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 24,
		marginHorizontal: 34,
	},
	buttonRow3: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 24,
		marginHorizontal: 36,
	},
	buttonRow4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 113,
		marginHorizontal: 35,
	},
	column: {
		alignItems: "center",
	},
	column2: {
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		borderColor: "#212020",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 16,
		marginBottom: 55,
		marginHorizontal: 36,
	},
	column3: {
       
            alignItems: "center",
            paddingVertical: 6,
            paddingHorizontal: 49,
        
	},
	column4: {
		alignItems: "center",
		marginTop: 16,
	},
	column5: {
		alignItems: "center",
		paddingVertical: 6,
		paddingHorizontal: 49,
	},
	image: {
		borderRadius: 20,
		width: 125,
		height: 125,
	},
	image2: {
		borderRadius: 20,
		width: 40,
		height: 40,
		marginRight: 23,
	},
	image3: {
		borderRadius: 20,
		width: 6,
		height: 11,
	},
	image4: {
		borderRadius: 20,
		width: 40,
		height: 40,
		marginRight: 22,
        marginTop:5,
        
	},
	image5: {
		borderRadius: 20,
		width: 40,
		height: 40,
		marginRight: 22,
        marginTop:3,
	},
	image6: {
		borderRadius: 20,
		width: 40,
		height: 40,
		marginRight: 22,
	},
	image7: {
		width: 29,
		height: 28,
		marginRight: 63,
	},
	row: {
		flexDirection: "row",
		marginBottom: 2,
		marginHorizontal: 26,
	},
	row2: {
		flexDirection: "row",
		marginLeft: 23,
	},
	row3: {
		flexDirection: "row",
		marginBottom: 1,
        paddingHorizontal:1,
        alignSelf: "stretch",
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
		color: "#232222",
		fontSize: 20,
		fontWeight: "bold",
		
		marginBottom: 8,
		marginLeft: 26,
	},
	text2: {
		color: "#232222",
		fontSize: 20,
		fontWeight: "bold",
	},
	text3: {
		color: "#232222",
		fontSize: 13,
	},
	text4: {
		color: "#232222",
		fontSize: 15,
		fontWeight: "bold",
		flex: 1,
	},
	text5: {
		color: "#232222",
		fontSize: 15,
		fontWeight: "bold",
		marginRight: 70,
	},
	text6: {
		color: "#232222",
		fontSize: 15,
		fontWeight: "bold",
	},
	text7: {
		color: "#232222",
		fontSize: 15,
		marginVertical: 3,
		marginRight: 83,
	},
	text8: {
		color: "#232222",
		fontSize: 15,
		marginRight: 103,
	},
	text9: {
		color: "#232222",
		fontSize: 15,
	},
	text10: {
		color: "#232222",
		fontSize: 20,
		flex: 1,
	},
	text11: {
		color: "#232222",
		fontSize: 20,
		marginVertical: 16,
		flex: 1,
	},
	text12: {
		color: "#232222",
		fontSize: 20,
		marginVertical: 14,
		flex: 1,
	},
	view: {
		alignItems: "center",
	},
	view2: {
		alignItems: "center",
		marginBottom: 30,
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
  

  container: {
	flex: 1,
	backgroundColor: "#FFFFFF",
  },
  profileCard: {
	alignItems: 'center',
	paddingVertical: 30,
	backgroundColor: '#FFFFFF',
	borderRadius: 20,
	marginHorizontal: 20,
	marginTop: 20,
	marginBottom: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 2 },
	shadowOpacity: 0.1,
	shadowRadius: 5,
	elevation: 3,
  },
  profileImage: {
	width: 100,
	height: 100,
	borderRadius: 50,
	marginBottom: 15,
  },
  username: {
	fontSize: 20,
	fontWeight: 'bold',
	color: '#232222',
  },
  email: {
	fontSize: 14,
	color: '#666666',
  },
  bodyStatsRow: {
	flexDirection: 'row',
	justifyContent: 'space-around',
	marginHorizontal: 20,
	marginBottom: 30,
  },
  bodyStat: {
	alignItems: 'center',
  },
  bodyStatValue: {
	fontSize: 18,
	fontWeight: 'bold',
	color: '#232222',
  },
  bodyStatLabel: {
	fontSize: 13,
	color: '#666666',
  },
  menuButton: {
	flexDirection: 'row',
	alignItems: 'center',
	paddingVertical: 15,
	marginHorizontal: 20,
	borderBottomWidth: 1,
	borderBottomColor: '#EEEEEE',
  },
  menuIcon: {
	width: 24,
	height: 24,
	marginRight: 15,
  },
  menuText: {
	fontSize: 16,
	fontWeight: 'bold',
	color: '#232222',
  },
  

});