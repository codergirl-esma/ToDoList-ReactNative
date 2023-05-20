import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from 'react-navigation/native';
import { createNativeStackNavigator } from 'react-navigation/native-stack';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import ChatList from './screens/ChatList';
import Chat from './screens/Chat';
import Settings from './screens/Settings';
import SignIn from './screens/SignIn';
import Signup from './screens/Signup';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-native-paper';
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhqjL2JYLL5rtvBbt3J8o50fIuyXrcYIA",
  authDomain: "chat-app-3d0d1.firebaseapp.com",
  projectId: "chat-app-3d0d1",
  storageBucket: "chat-app-3d0d1.appspot.com",
  messagingSenderId: "394532601087",
  appId: "1:394532601087:web:c0643179af212aad68a0ca"
};

firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const isLogin = false;
    if (!isLogin) {
      navigation.navigate('KayitOl');
    }
  }, []);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={
                route.name === 'ChatList' ? 'chatbubble-ellipses' : 'settings'
              }
              color={color}
              size={size}
            />
          );
        },
      })}>
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="GirisYap"
            component={SignIn}
            options={{ presentation: 'fullScreenModal' }}
          />
          <Stack.Screen
            name="KayitOl"
            component={Signup}
            options={{ presentation: 'fullScreenModal' }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
