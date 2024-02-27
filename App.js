import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Custom Drawer Content Component
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="="
        onPress={() => props.navigation.toggleDrawer()}
        icon={() => <Ionicons name="menu" size={24} color="black" />}
      />
    </DrawerContentScrollView>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* Your Tab Screens */}
    </Tab.Navigator>
  );
};

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    configureGoogleSignIn();
    // Load user data when the app starts
    loadUserData();
  }, []);

  const configureGoogleSignIn = async () => {
    await GoogleSignin.configure({
      webClientId: 'AIzaSyC9fSqX-utq_sIG19B5CpobGSMB0NlcObc', // Your web client ID from Firebase
    });
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // Save user data or perform further actions
    } catch (error) {
      console.log('Google sign in error:', error);
    }
  };

  const loadUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('@userData');
      if (userDataJSON !== null) {
        const userData = JSON.parse(userDataJSON);
        setUserData(userData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Profile">
          {(props) => (
            <ProfileScreen
              {...props}
              userData={userData}
              saveUserData={saveUserData}
              signInWithGoogle={signInWithGoogle}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
