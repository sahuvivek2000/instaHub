/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
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
} from 'react-native';
import {IconButton, Colors, List} from 'react-native-paper';

const ProfileHead = () => {
  return (
    <View style={styles.head}>
      <Text style={{fontSize: 22, color: 'white', left: 20}}>User_Name</Text>
      <View style={{flexDirection: 'row'}}>
        <IconButton icon="plus-circle-outline" color="#fff" size={27} />
        <IconButton icon="menu" color="#fff" size={27} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    width: '100%',
    // backgroundColor: 'pink',
    // borderColor: 'yellow',
    // borderWidth: 2,
    height: (Dimensions.get('screen').height * 6) / 100,
    justifyContent: 'space-between',
    // alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default ProfileHead;
