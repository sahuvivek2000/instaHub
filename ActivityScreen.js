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
import {IconButton, Colors, List, Avatar, Badge} from 'react-native-paper';
import PostGrid from './PostGrid';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const ActivityScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          //   borderColor: 'yellow',
          //   borderWidth: 1,
          paddingLeft: 20,
          height: (height * 5) / 100,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 23, fontWeight: '600', color: 'white'}}>
          Activity
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   borderColor: 'yellow',
          //   borderWidth: 1,
          height: (height * 10) / 100,
          justifyContent: 'flex-start',
          paddingLeft: 20,
        }}>
        <Avatar.Image size={53} source={require('./assests/avatar-icon.jpg')} />
        <Badge style={{position: 'absolute', top: 19, left: 56}}>3</Badge>
        <View style={{left: 10}}>
          <Text style={{fontSize: 15, color: 'white'}}>Follow request</Text>
          <Text style={{fontSize: 13, color: 'grey'}}>
            Approve or ignore request
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
});

export default ActivityScreen;
