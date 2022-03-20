/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
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
  Animated,
  Easing,
  DrawerLayoutAndroid,
} from 'react-native';
import axios from 'react-native-axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import MeassageScreen from './MessageScreen';
import {IconButton, Colors, List, Avatar} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import base_url from './app_constants';
let userData;
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const posts = [
  {username: 'Bheem', image: 'https://picsum.photos/700'},
  {username: 'Raju', image: 'https://picsum.photos/700'},
  {username: 'Kalu', image: 'https://picsum.photos/700'},
  {username: 'Chutki', image: 'https://picsum.photos/700'},
  {username: 'Jhonny', image: 'https://picsum.photos/700'},
  {username: 'Jordi', image: 'https://picsum.photos/700'},
  {username: 'Luke', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
];
let userList;
const Chats = () => {
  const [usersList, setUsersList] = useState();
  const [openChat, setOpenChat] = useState(false);
  const [userID, setUserID] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        var data = await EncryptedStorage.getItem('user_session');
        // console.log('line 68 -', JSON.parse(data));
        data = JSON.parse(data);
        // data.state ? (isLogin = data.state) : null;
        // isLogin = data.state;
        // setIsLogin(isLogin);
        userData = data;
        console.log(userData, `${base_url}/users/`);
        await getUser();
        // await fetchUser();
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const showChat = userId => {
    setOpenChat(true);
    setUserID(userId);
    console.log(userId);
  };

  const getUser = async () => {
    const users = await axios.get(`${base_url}/users/`);
    console.log('fetchUser', users.data);
    userList = users.data;
    setUsersList(userList);
  };
  const closeChat = (state) => {
    setOpenChat(state);
  };

  return (
    <View style={styles.main}>
      <MeassageScreen open={openChat} closeChat={closeChat} userId={userID} />
      <View style={styles.head}>
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            height: (height * 3.8) / 100,
            width: (width * 90) / 100,
            alignSelf: 'center',
            top: 20,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            //   flex: 0.045,
          }}>
          <IconButton icon="magnify" color="white" size={23} />
          <TextInput
            placeholder="Search"
            style={{
              fontSize: 16,
              height: '100%',
              width: '85%',
              // borderColor: 'yellow',
              // borderWidth: 1,
              padding: 0,
            }}
          />
        </View>
      </View>
      <View style={styles.chat}>
        {userList && (
          <FlatList
            data={usersList}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => showChat(item._id)}>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                  {/* <Avatar.Image
                  source={{uri: 'https://picsum.photos/700'}}
                  color="white"
                  size={54}
                  style={{
                    //   borderColor: '#f56729',
                    //   borderWidth: 2,
                    marginTop: '2%',
                    marginLeft: '5%',
                  }}
                  backgroundColor="black"
                /> */}
                  <Avatar.Image
                    size={54}
                    source={require('./assests/avatar-icon.jpg')}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      left: 20,
                      //   backgroundColor: 'red',
                      width: '77%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={{color: '#fff', fontSize: 18}}>
                      {item.username}
                    </Text>
                    <IconButton icon="camera-outline" color="white" />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'red',
    height: (height * 76.96) / 100,
    width: '100%',
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  head: {},
  chat: {
    top: 60,
  },
});
export default Chats;
