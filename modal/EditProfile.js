/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
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
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import axios from 'react-native-axios';
import DocumentPicker from 'react-native-document-picker';
import {
  IconButton,
  Colors,
  List,
  ProgressBar,
  Avatar,
} from 'react-native-paper';
import EncryptedStorage from 'react-native-encrypted-storage';
import base_url from '../app_constants';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const EditProfile = props => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');

  const saveUserDetail = async () => {
    console.log(name, userName, bio);

    const userdetail = {
      name: name,
      username: userName,
      bio: bio,
    };

    const result = await axios.post(
      `${base_url}/editUser/${props.userId[0].userId}`,
      userdetail,
    );
    console.log(result);

    // props.modalClose(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={props.open}>
      {/* {showLoader && (
      <View style={styles.loader}>
        <ActivityIndicator size={70} color="#fff" />
      </View> */}
      <View style={styles.mainBody}>
        <Pressable onPress={() => props.modalClose(false)}>
          <IconButton
            icon="close"
            color={Colors.white}
            size={35}
            // onPress={() => console.log("Pressed")}
          />
        </Pressable>
        <View style={styles.body}>
          <View style={styles.profileUser}>
            <View style={{justifyContent: 'center'}}>
              <Avatar.Image
                size={150}
                // icon="account-circle"
                color="white"
                source={require('../assests/avatar-icon.jpg')}
                style={{backgroundColor: 'blue'}}
              />
            </View>
            <View style={{marginTop: 50}}>
              {/* <Text style={{color: '#fff'}}>UserName</Text> */}
              <TextInput
                // defaultValue="UserName"
                value={userName}
                onChangeText={text => setUserName(text)}
                style={[styles.textInput, {textAlign: 'left'}]}
              />
            </View>
            <View style={{marginTop: 50}}>
              {/* <Text style={{color: '#fff'}}>UserName</Text> */}
              <TextInput
                // defaultValue="Name"
                value={name}
                onChangeText={text => setName(text)}
                style={[styles.textInput, {textAlign: 'left'}]}
              />
            </View>
            <View style={{marginTop: 50}}>
              {/* <Text style={{color: '#fff'}}>UserName</Text> */}
              <TextInput
                // defaultValue="Bio"
                value={bio}
                multiline
                onChangeText={text => setBio(text)}
                style={[
                  styles.textInput,
                  {height: (height * 20) / 100, textAlign: 'left'},
                ]}
              />
            </View>
            <View style={{marginTop: 50, width: width, alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  width: '85%',
                  backgroundColor: '#0088F8',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}
                onPress={() => saveUserDetail()}>
                <Text style={{fontSize: 20, color: '#fff'}}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <Text style={{color: '#fff', fontSize: 20}}>Bio :</Text> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    height: height,
    width: width,
    // borderColor: 'yellow',
    // borderWidth: 1,
    backgroundColor: '#000',
  },
  body: {
    height: (height * 90) / 100,
    width: width,

    // flexDirection: '',
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  profileUser: {
    // borderColor: 'yellow',
    // borderWidth: 2,
    marginTop: 20,
    height: (Dimensions.get('screen').height * 13) / 100,
    flexDirection: 'column',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flexDirection: 'row',
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 0.7,
    // marginBottom: 25,
    height: (height * 5) / 100,
    width: (width * 85) / 100,
    borderRadius: 7,
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default EditProfile;
