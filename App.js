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
const mydata = [
  {title: 'View Profile', icon: 'account-circle'},
  {title: 'Mute', icon: 'microphone-off'},
];
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  const [a, setA] = React.useState('black');
  // const [i, setI] = React.useState(0);
  const [modalVis, setModalVis] = useState(false);
  const [moreOption, setMore] = useState(false);
  const [data, setData] = useState({modal: false, other: false});

  const [col, setCol] = React.useState([
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'pink',
    'grey',
    'purple',
    'black',
  ]);
  const callbackFunction = data => {
    setModalVis(data.modal);
    console.log('entered callbackFunction', data);
    setMore(data.other);

    // console.log("object", data);
  };
  const storyVisible = data => {
    setModalVis(data);
  };

  // col.map((i) => {
  //   setTimeout(() => {
  //     setA(i);
  //   }, 5000);
  // });
  // useEffect(() => {
  //   callbackFunction;
  // });

  return (
    // <View style={styles.container}>
    // {/* <Home /> */}
    // {/* <Profile /> */}
    // {/* <View
    //   style={
    //     {
    //       // justifyContent: 'flex-end',
    //       // bottom: 0,
    //       // position: 'absolute',
    //       // flex: 1,
    //       // backgroundColor: 'yellow',
    //       // borderColor: 'red',
    //       // borderWidth: 1,
    //       // height: 200,
    //       // width: '100%',
    //     }
    //   }> */}
    // {/* <BottomNav /> */}
    // <View style={{height: '100%'}}>
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
          component={Profile}
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
    // </View>
    //   {/* </View> */}
    // {/* </View> */}
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
