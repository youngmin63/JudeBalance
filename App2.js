import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// App.js 또는 index.js

import LaunchScreen from "./screens/OnBoaringScreens/LaunchScreen.jsx"; // 경로 맞게 수정

import OnboardingScreen2 from "./screens/OnBoaringScreens/OnBoarding2.jsx";
import OnboardingScreen3 from "./screens/OnBoaringScreens/OnBoarding3.jsx";
import OnboardingScreen4 from "./screens/OnBoaringScreens/OnBoarding4.jsx";
import LoginScreen from "./screens/SingupScreens/LoginScreen.jsx";
import SignupScreen from "./screens/SingupScreens/SignupScreen.jsx";
import forgotPwScreen from "./screens/SingupScreens/ForgotPwScreen.jsx";
import SetupScreen1 from "./screens/SetupScreens/SetupScreen1.jsx";
import SetupScreen2 from "./screens/SetupScreens/SetupScreen2.jsx";
import SetupScreen3 from "./screens/SetupScreens/SetupScreen3.jsx";
import SetupScreen4 from "./screens/SetupScreens/SetupScreen4.jsx";
import SetupScreen5 from "./screens/SetupScreens/SetupScreen5.jsx";
import SetupScreen6 from "./screens/SetupScreens/SetupScreen6.jsx";
import SetupScreen7 from "./screens/SetupScreens/SetupScreen7.jsx";
import BalanceScreen from "./screens/BalanceScreens/BalanceScreen.jsx";
import AnalyzeScreen from "./screens/AnalyzeScreens/AnalyzeScreen.jsx";
import CommunityScreen from "./screens/CommunityScreens/CommuniyScreen.jsx";
import ProfileScreen from "./screens/ProfileScreens/ProfileScreen.jsx";
import PostScreen from "./screens/CommunityScreens/PostScreen.jsx";
import TotalRecordScreen from "./screens/AnalyzeScreens/TotalRecordScreen.jsx";
import ArticleScreen from "./screens/BalanceScreens/ArticleScreen.jsx";
import BalanceTestScreen from "./screens/BalanceScreens/BalanceTestScreen.jsx";
import BalanceTestScreen2 from "./screens/BalanceScreens/BalanceTestScreen2.jsx";
import BalanceTestResultScreen from "./screens/BalanceScreens/BalanceTestResultScreen.jsx";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Launch" component={LaunchScreen} />

        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="Onboarding4" component={OnboardingScreen4} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPw" component={forgotPwScreen} />
        <Stack.Screen name="Setup1" component={SetupScreen1} />
        <Stack.Screen name="Setup2" component={SetupScreen2} />
        <Stack.Screen name="Setup3" component={SetupScreen3} />
        <Stack.Screen name="Setup4" component={SetupScreen4} />
        <Stack.Screen name="Setup5" component={SetupScreen5} />
        <Stack.Screen name="Setup6" component={SetupScreen6} />
        <Stack.Screen name="Setup7" component={SetupScreen7} />
        <Stack.Screen name="Balance" component={BalanceScreen} />
        <Stack.Screen name="Analyze" component={AnalyzeScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="TotalRecord" component={TotalRecordScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="BalanceTest" component={BalanceTestScreen} />
        <Stack.Screen name="BalanceTest2" component={BalanceTestScreen2} />
        <Stack.Screen name="BalanceResult" component={BalanceTestResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
