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

import {IconButton, Colors, List, Avatar} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

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
const Chats = () => {
  return (
    <View style={styles.main}>
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
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <Avatar.Image
                source={{uri: item.image}}
                color="white"
                size={54}
                style={{
                  //   borderColor: '#f56729',
                  //   borderWidth: 2,
                  marginTop: '2%',
                  marginLeft: '5%',
                }}
                backgroundColor="black"
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
          )}
        />
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
