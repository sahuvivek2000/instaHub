/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButton, Colors, List, Avatar} from 'react-native-paper';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const PostModal = props => {
  const [moreOption, setMoreOption] = useState(false);
  useEffect(() => {
    setMoreOption(props.open);
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={moreOption}
      style={{
        // backgroundColor: 'rgba(0,0,0,0.4)',
        backgroundColor: 'red',
        // flex: 1,
        // position: 'absolute',
      }}>
      <View
        style={{
          backgroundColor: 'black',
          flex: 0.6,
          top: 170,
          width: (width * 95) / 100,
          borderRadius: 10,
          left: '2.4%',
          //   alignItems: 'center',
          //   flexDirection: 'row',
          //   height: (height * 5) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            // backgroundColor: 'red',
            height: (height * 6) / 100,
          }}>
          <Avatar.Image
            source={require('../assests/avatar-icon.jpg')}
            color="white"
            size={40}
            style={{
              //   borderColor: '#f56729',
              //   borderWidth: 2,
              marginTop: '2%',
              marginLeft: '5%',
            }}
            backgroundColor="black"
          />
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 15}}>
            <Text style={{color: 'white', fontSize: 20}}>UserName</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Image
            style={{
              flex: 1,
            }}
            source={{uri: 'https://picsum.photos/700'}}
            // resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            // bottom: 5,
          }}>
          <IconButton icon="heart-outline" color="white" />
          <IconButton icon="account-circle-outline" color="white" />

          <IconButton icon="send-outline" color="white" />
          <IconButton icon="dots-vertical" color="white" />
        </View>
      </View>
    </Modal>
  );
};

export default PostModal;
