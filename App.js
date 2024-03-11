import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import QuizListScreen from './screens/QuizListScreen';
import QuizTakingScreen from './screens/QuizTakingScreen';

import { saveQuizResultToLocal, getQuizResultFromLocal } from './DataStorage';

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Load user data when the app starts
    loadUserData();
  }, []);

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

  const saveUserData = async (data) => {
    try {
      const userDataJSON = JSON.stringify(data);
      await AsyncStorage.setItem('@userData', userDataJSON);
      setUserData(data);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Profile">
          {(props) => <ProfileScreen {...props} userData={userData} saveUserData={saveUserData} />}
        </Drawer.Screen>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="QuizList" component={QuizListScreen} />
        <Drawer.Screen name="QuizTaking" component={QuizTakingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
