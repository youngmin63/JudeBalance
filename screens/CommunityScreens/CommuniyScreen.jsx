import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, } from "react-native";

const searchIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/vpfb1d5p_expires_30_days.png";
const notificationIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/mv5pww22_expires_30_days.png";
const writeIconUri = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kSlAsLCcc0/v57njntb_expires_30_days.png";



export default function CommunityScreen ({navigation}) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
	  // ✅ 백엔드 API 호출하는 부분 (지금은 임시 데이터)
	  setTimeout(() => {
		setPosts([
		  {
			id: 1,
			username: "Madison",
			profileImage: "https://url.to/profile1.png",
			content: "오늘 운동했어요! 균형감각 짱!",
			likes: 30254,
			comments: 12254,
			shares: 1254
		  },
		  {
			id: 2,
			username: "James",
			profileImage: "https://url.to/profile2.png",
			content: "밸런스 운동 추천합니다~",
			likes: 15000,
			comments: 8500,
			shares: 500
		  },
		]);
	  }, 1000);
	}, []);
  
	return (
		<SafeAreaView style={styles.container}>
		  <ScrollView>
	
			{/* ✅ 상단 버튼들 그대로 유지 */}
			    {/* 상단 타이틀 + 버튼들 */}
				<View style={styles.topRow}>
          <Text style={styles.title}>커뮤니티</Text>
          <TouchableOpacity onPress={() => alert('검색')}>
            <Image source={{ uri: searchIconUri }} style={styles.topIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('알림')}>
            <Image source={{ uri: notificationIconUri }} style={styles.topIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Post')}>
            <Image source={{ uri: writeIconUri }} style={styles.topIcon} />
          </TouchableOpacity>
        </View>
	
			{/* 게시글 리스트 렌더링 */}
			{posts.map((post) => (
			  <View key={post.id} style={styles.postCard}>
				{/* 프로필 */}
				<View style={styles.profileRow}>
				  <Image source={{ uri: post.profileImage }} style={styles.profileImage} />
				  <Text style={styles.username}>{post.username}</Text>
				</View>
	
				{/* 게시글 내용 */}
				<Text style={styles.postContent}>
				  {post.content}
				</Text>
	
				{/* 좋아요/댓글/공유 */}
				<View style={styles.statsRow}>
				  <View style={styles.statItem}>
					<Image source={{ uri: 'https://your.like.icon.url' }} style={styles.statIcon} />
					<Text style={styles.statText}>{post.likes.toLocaleString()}</Text>
				  </View>
				  <View style={styles.statItem}>
					<Image source={{ uri: 'https://your.comment.icon.url' }} style={styles.statIcon} />
					<Text style={styles.statText}>{post.comments.toLocaleString()}</Text>
				  </View>
				  <View style={styles.statItem}>
					<Image source={{ uri: 'https://your.share.icon.url' }} style={styles.statIcon} />
					<Text style={styles.statText}>{post.shares.toLocaleString()}</Text>
				  </View>
				</View>
			  </View>
			))}
	
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

</SafeAreaView>
);
}

{/*추가 끝 */}
		
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
		borderRadius: 20,
		width: 19,
		height: 18,
		marginRight: 21,
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
	button4: {
		width: 29,
		height: 28,
		marginRight: 54,
	},
	button5: {
		width: 29,
		height: 28,
		marginRight: 66,
	},
	button6: {
		width: 29,
		height: 28,
		marginRight: 64,
	},
	button7: {
		width: 29,
		height: 28,
	},
	button8: {
		color: "#232222",
		fontSize: 12,
		marginRight: 54,
	},
	button9: {
		color: "#232222",
		fontSize: 12,
		marginRight: 60,
	},
	button10: {
		color: "#232222",
		fontSize: 12,
		marginLeft: 3,
		marginRight: 57,
	},
	button11: {
		color: "#232222",
		fontSize: 12,
	},
	column: {
		alignItems: "flex-start",
		borderColor: "#FFFFFF",
		borderWidth: 1,
		marginHorizontal: 10,
	},
	column2: {
		borderColor: "#FFFFFF",
		borderWidth: 1,
		marginHorizontal: 10,
	},
	column3: {
		borderColor: "#232222",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 10,
		marginBottom: 114,
		marginHorizontal: 35,
	},
	column4: {
		alignItems: "center",
		paddingVertical: 6,
		paddingHorizontal: 49,
	},
	image: {
		width: 35,
		height: 35,
		marginRight: 5,
	},
	image2: {
		width: 10,
		height: 9,
		marginRight: 7,
	},
	image3: {
		width: 10,
		height: 6,
		marginRight: 7,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	
		marginBottom: 99,
		marginHorizontal: 30,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		paddingRight: 8,
		marginBottom: 17,
	},
	row3: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	row4: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginRight: 12,
	},
	row5: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	row6: {
		flexDirection: "row",
		marginBottom: 1,
	},
	row7: {
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
		fontSize: 15,
		fontWeight: "bold",
	},
	text3: {
		color: "#232222",
		fontSize: 14,
		marginBottom: 17,
	},
	text4: {
		color: "#232222",
		fontSize: 13,
		flex: 1,
	},
	text5: {
		color:  "#232222",
		fontSize: 15,
		fontWeight: "bold",
	},
	view: {
		borderColor: "#232222",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 8,
		marginBottom: 34,
		marginHorizontal: 35,
	},
	view2: {
		borderColor: "#232222",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 8,
		marginBottom: 46,
		marginHorizontal: 35,
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
  postCard: {
	backgroundColor: '#FFFFFF',
	borderRadius: 20,
	padding: 20,
	marginHorizontal: 20,
	marginBottom: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 2 },
	shadowOpacity: 0.1,
	shadowRadius: 5,
	elevation: 3,
  },
  profileRow: {
	flexDirection: 'row',
	alignItems: 'center',
	marginBottom: 10,
  },
  profileImage: {
	width: 40,
	height: 40,
	borderRadius: 20,
	marginRight: 10,
  },
  username: {
	fontSize: 16,
	fontWeight: 'bold',
	color: '#232222',
  },
  postContent: {
	fontSize: 14,
	color: '#666666',
	marginBottom: 15,
  },
  statsRow: {
	flexDirection: 'row',
	justifyContent: 'space-between',
  },
  statItem: {
	flexDirection: 'row',
	alignItems: 'center',
  },
  statIcon: {
	width: 20,
	height: 20,
	marginRight: 6,
  },
  statText: {
	fontSize: 13,
	color: '#232222',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#232222',
    flex: 1, // 좌측 정렬 유지
  },
  topIcon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  
});     
