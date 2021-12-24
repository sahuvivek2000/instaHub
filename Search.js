/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
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
import {IconButton, Colors, List, Avatar} from 'react-native-paper';
import PostGrid from './PostGrid';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Search = () => {
  return (
    <View style={styles.searchBody}>
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
      <View
        style={{
          //   top: 10,
          bottom: 0,
          position: 'absolute',
          height: (height * 82) / 100,
          //   borderColor: 'yellow',
          //   borderWidth: 1,
        }}>
        <PostGrid />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchBody: {
    // width: '100%',
    // borderColor: 'yellow',
    // borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    // height: (height * 80) / 100,
    backgroundColor: 'black',
    // justifyContent: 'space-evenly',
  },
});

export default Search;
