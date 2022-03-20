/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useRef, useEffect} from 'react';
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
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import io from 'socket.io-client';

import {Avatar, IconButton} from 'react-native-paper';
import base_url from './app_constants';
const socket = io.connect(base_url);
const height = Dimensions.get('screen').height;
const width = Dimensions.get('window').width;
var message;
var userData;
const MeassageScreen = props => {
  const [user, setUser] = useState();
  const [senderID, setSenderID] = useState();
  const [recieverID, setRecieverID] = useState(props.userID);
  const [msg, setMsg] = useState();
  const [newMsg, setNewMsg] = useState();

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

  useFocusEffect(
    React.useCallback(() => {
      console.log('in useFocus');
      // message = [];
      socket.on('getChat', data => {
        console.log('getChat', data);
        message = data && data[0].messages;
        setMsg(message);
        console.log(message);
      });
    }),
  );

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
        // console.log(userData);
        setSenderID(userData.userId);
        // setRecieverID();
        // await fetchFeed();
        // await fetchUser();
        // await checkUser();
        // await getMsg();
        // socket.on('getChat', data => {
        //   console.log('getChat', data);
        //   // message = data && data[0].messages;
        //   // setMsg(message);
        //   // console.log(message);
        // });
        const data1 = {
          senderId: '61a7216abb4e260855fbdf0a',
          recieverId: '61a5c96dd3a7f8374e2a9f39',
        };
        socket.emit('openChat', data1);
        // getMsg();
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    // getMsg();
    socket.on('getChat', data => {
      console.log('getChat', data);
      message = data && data[0].messages;
      setMsg(message);
      console.log(message);
    });
  });

  const getMsg = () => {
    // console.log('socket');
    // const data1 = {
    //   senderId: '61a7216abb4e260855fbdf0a',
    //   recieverId: '61a5c96dd3a7f8374e2a9f39',
    // };
    // socket.emit('openChat', data1);
    const chat = {
      msg: newMsg,
      senderId: senderID,
      recieverId: recieverID,
    };
    socket.emit('chat', chat);
    setNewMsg('');
    // socket.on('getChat', data => {
    //   console.log('getChat', data);
    //   // message = data && data[0].messages;
    //   // setMsg(message);
    //   // console.log(message);
    // });
  };

  const SenderMsg = ({msg, from}) => {
    return (
      <View
        style={[
          {alignSelf: from === 'sender' ? 'flex-end' : 'flex-start'},
          {flexDirection: 'row', marginTop: 15},
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
  const scrollViewRef = useRef();
  const closeScreen = () => {
    // message = [];
    setMsg([]);
    props.closeChat(false);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={props.open}>
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
              <TouchableOpacity onPress={() => closeScreen()}>
                <IconButton icon="arrow-left" color="#fff" />
              </TouchableOpacity>
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({animated: true})
            }>
            {msg &&
              msg.map(i => (
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
            <TextInput value={newMsg} onChangeText={text => setNewMsg(text)} />
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    height: height,
    width: width,
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: '#000',
    position: 'absolute',
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
