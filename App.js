/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  Pressable,
  Modal,
  Button,
  View,
  Alert,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {IconButton, Colors, List} from 'react-native-paper';
// import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
// import Icon from "react-native-vector-icons/dist/FontAwesome";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import EncryptedStorage from 'react-native-encrypted-storage';
import {mdiAccountCircle} from '@mdi/js';
import AppBar from './AppBar';
import BottomNav from './BottomNav';
import StoryTab from './StoryTab';
import Feed from './Feed';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import ActivityScreen from './ActivityScreen';
import ReelsScreen from './ReelsScreen';
import MessageScreen from './MessageScreen';
import LoginPage from './LoginPage';
const mydata = [
  {title: 'View Profile', icon: 'account-circle'},
  {title: 'Mute', icon: 'microphone-off'},
];
var userName = '';
var userEmail = '';
var userId = '';
var isLogin = false;
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  const [Login, setIsLogin] = React.useState();
  // const [modalVis, setModalVis] = useState(false);
  // const [moreOption, setMore] = useState(false);
  // const [data, setData] = useState({modal: false, other: false});
  // const [userEmail, setUserEmail] = useState('');
  // const [UserName, setUserName] = useState('');
  // const [userId, setUserId] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        var data = await EncryptedStorage.getItem('user_session');
        // console.log('line 68 -', JSON.parse(data));
        data = JSON.parse(data);
        // data.state ? (isLogin = data.state) : null;
        isLogin = data.state;
        setIsLogin(isLogin);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  // const callbackFunction = data => {
  //   setModalVis(data.modal);
  //   console.log('entered callbackFunction', data);
  //   setMore(data.other);

  //   // console.log("object", data);
  // };
  // const storyVisible = data => {
  //   setModalVis(data);
  // };

  const setUserData = async () => {
    const data = {
      userName: userName,
      userEmail: userEmail,
      userId: userId,
      state: isLogin,
    };
    await EncryptedStorage.setItem('user_session', JSON.stringify(data));
    // console.log('line 96 -', isLogin);
  };

  const parentFunction = async value => {
    isLogin = value.state;
    setIsLogin(value.state);
    // setUserEmail(value.userEmail);
    // setUserName(value.userName);
    // setUserId(value.userId);
    userName = value.userName;
    userEmail = value.userEmail;
    userId = value.userId;
    // console.log(value);
    setUserData();
  };
  const profileFunction = async value => {
    isLogin = value;
    setIsLogin(value);
  };
  return (
    <View
      style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('window').height,
      }}>
      {/* {!isLogin && <LoginPage callbackFunction={parentFunction} />} */}
      {Login ? (
        <NavigationContainer>
          <Tab.Navigator
            barStyle={{
              backgroundColor: 'black',
              // height: (Dimensions.get('screen').height * 5) / 100,
              // borderColor: 'yellow',
              // borderWidth: 2,
            }}
            labeled={false}>
            <Tab.Screen
              name="Home"
              // tabBarOptions={{showLabel: false}}
              options={{
                tabBarIcon: () => (
                  <IconButton
                    icon="home-outline"
                    color="white"
                    size={26}
                    style={{
                      // flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // borderColor: 'yellow',
                      // borderWidth: 2,
                      // top: 0,
                      height: '100%',
                    }}
                  />
                ),

                headerShown: false,
              }}
              component={Home}
              // options={{headerShown: false}}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={{
                tabBarIcon: () => (
                  <IconButton
                    icon="magnify"
                    color="white"
                    size={26}
                    style={{
                      // flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // borderColor: 'yellow',
                      // borderWidth: 2,
                      // top: 0,
                      height: '100%',
                    }}
                  />
                ),

                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Reels"
              component={ReelsScreen}
              options={{
                tabBarIcon: () => (
                  <IconButton
                    icon="movie-outline"
                    color="white"
                    size={26}
                    style={{
                      // flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // borderColor: 'yellow',
                      // borderWidth: 2,
                      // top: 0,
                      height: '100%',
                    }}
                  />
                ),

                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Activity"
              component={ActivityScreen}
              options={{
                tabBarIcon: () => (
                  <IconButton
                    icon="heart-outline"
                    color="white"
                    size={26}
                    style={{
                      // flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // borderColor: 'yellow',
                      // borderWidth: 2,
                      // top: 0,
                      height: '100%',
                    }}
                  />
                ),

                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Profile"
              // component={Profile}
              children={() => <Profile childFunction={profileFunction} />}
              options={{
                tabBarIcon: () => (
                  <IconButton
                    icon="account-circle-outline"
                    color="white"
                    size={26}
                    style={{
                      // flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // borderColor: 'yellow',
                      // borderWidth: 2,
                      // top: 0,
                      height: '100%',
                    }}
                  />
                ),

                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <LoginPage callbackFunction={parentFunction} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    // alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
  },
  appbar: {
    width: '100%',

    // shadowRadius: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    // borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',

    padding: 35,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // padding: 0,
  },
  button: {
    elevation: 2,
  },

  closeIcon: {
    alignSelf: 'flex-end',
    // position: "absolute",
    elevation: 2,
    zIndex: 4,
    // alignContent: "flex-start",
    // justifyContent: "flex-start",
    // backgroundColor: "red",
    // flex: 0.079,
    // marginLeft: 50,
  },
  body: {
    height: '100%',
    backgroundColor: 'grey',
    width: '100%',
    borderRadius: 10,
    // zIndex: 1,
    // elevation: 1,
    left: 0,
    top: 0,
    position: 'absolute',
    // flex: 9,
  },
  footer: {
    // position: "absolute",
    elevation: 5,
    zIndex: 5,
    // backgroundColor: "red",
    // height: "50%",
    width: '90%',
    // flex: 10,
    marginBottom: 10,
    color: 'white',

    // justifyContent: "flex-end",
  },
  onLongPress: {
    // height: "20%",
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'flex-end',
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: (Dimensions.get('screen').height * 20) / 100,
    // alignSelf: "flex-end",
    // justifyContent: "flex-end",
    flexDirection: 'column',
    // marginTop: "167%",
    // borderColor: "red",
    // borderWidth: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  list: {
    width: '90%',
    // borderWidth: 1,
    // borderColor: "yellow",
    marginBottom: '5%',
    marginRight: '5%',

    // elevation: ,
  },
});

export default App;
