/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
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
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import SocketIOClient from 'socket.io-client';

import {Avatar, IconButton} from 'react-native-paper';
import base_url from './app_constants';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var message;
var userData;
const MeassageScreen = () => {
  const [user, setUser] = useState();
  const [senderID, setSenderID] = useState();
  const [recieverID, setRecieverID] = useState();
  const [msg, setMsg] = useState();
  const temp = [
    {from: 'sender', message: 'hy'},
    {from: 'reciever', message: 'hy'},
    {from: 'sender', message: 'sup!!'},
    {from: 'reciever', message: 'nice'},
    {from: 'sender', message: 'wbu'},
    {from: 'reciever', message: 'just chilllin !!'},
    {from: 'sender', message: 'ohk'},
    {from: 'reciever', message: 'bye!'},
  ];
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
        setUser(data);
        console.log(userData);
        setSenderID(userData.userId);
        setRecieverID('61a5c96dd3a7f8374e2a9f39');
        // await fetchFeed();
        // await fetchUser();
        // await checkUser();
        // await getMsg();
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    // getMsg();
  });

  const getMsg = async () => {
    const socket = await SocketIOClient(base_url, {
      query: {
        senderId: senderID,
        recieverId: recieverID,
      },
    });
    //   console.log(socket);
    socket.on('getChat', data => {
      // console.log('getChat', data[0].messages);
      message = data && data[0].messages;
      setMsg(message);
      console.log(message);
    });
  };

  const SenderMsg = ({msg, from}) => {
    return (
      <View
        style={[
          {alignSelf: from === 'sender' ? 'flex-end' : 'flex-start'},
          {flexDirection: 'row'},
        ]}>
        {from !== 'sender' && (
          <Avatar.Icon
            size={30}
            style={{
              backgroundColor: '#f56729',
              alignSelf: 'center',
              display: 'flex',
              marginRight: 9,
            }}
            color="#fff"
            icon="account"
          />
        )}
        <View style={styles.Smsg}>
          <Text>{msg}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainBody}>
      <View style={styles.chatHead}>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   backgroundColor: 'red',
              width: (width * 70) / 100,
              height: '100%',
              justifyContent: 'space-evenly',
            }}>
            <IconButton icon="arrow-left" color="#fff" />
            <Avatar.Icon
              size={40}
              style={{backgroundColor: '#f56729'}}
              color="#fff"
              icon="account"
            />

            <View
              style={{
                flexDirection: 'column',
                // backgroundColor: 'yellow',
                width: '60%',
              }}>
              <Text style={{color: '#fff', fontSize: 19}}>Name</Text>
              <Text style={{color: '#fff'}}>user_name</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <IconButton color="#fff" icon="phone-outline" />
            <IconButton color="#fff" icon="video-outline" />
          </View>
        </View>
      </View>
      <View style={styles.chatBody}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {message &&
            message.map(i => (
              <SenderMsg
                msg={i.message_body || 'no msg'}
                from={i.user.senderId === senderID ? 'sender' : 'reciever'}
              />
              // <Text style={{color: 'red'}}>test</Text>
            ))}
        </ScrollView>
        {/* <Text style={{color: 'red'}}>test</Text> */}
      </View>
      <View style={styles.messageBox}>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: '#f56729',
            width: 40,
            height: 40,
            left: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconButton color="#fff" icon="camera-outline" />
        </View>
        <View style={{left: 3, width: '70%'}}>
          <TextInput />
        </View>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: '#f56729',
            width: 40,
            height: 40,
            right: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconButton
            color="#fff"
            icon="send-outline"
            onPress={() => getMsg()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    height: height,
    width: width,
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: '#000',
  },
  chatHead: {
    width: width,
    height: (height * 7) / 100,
    // backgroundColor: 'grey',
  },
  messageBox: {
    width: (width * 98) / 100,
    height: (height * 6) / 100,
    backgroundColor: 'rgba(255,255,255,0.15)',
    position: 'absolute',
    bottom: (height * 7) / 100,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  chatBody: {
    height: (height * 80) / 100,
    width: width,
    // backgroundColor: 'grey',
    flexDirection: 'column-reverse',
    paddingBottom: 20,
  },
  Smsg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: (height * 6) / 100,
    width: (width * 30) / 100,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    maxWidth: (width * 50) / 100,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
});

export default MeassageScreen;
