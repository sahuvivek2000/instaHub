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
import {IconButton, Colors, List, ProgressBar} from 'react-native-paper';
import EncryptedStorage from 'react-native-encrypted-storage';
import base_url from '../app_constants';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var userData;
const AddPost = props => {
  const [post, setPost] = useState(false);
  const [caption, setCaption] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [fileToUpload, setFileToUpload] = useState();
  const [showLoader, setShowLoader] = useState(false);

  // useEffect(() => {
  //   setPost(props.open);
  // }, []);
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
        // console.log(userData);
        await requestFilePermission();
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  const requestFilePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download Photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied---------', granted);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const selectFile = async e => {
    e.persist();

    // await requestFilePermission();
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('res', res);
      setFileToUpload(res);
    } catch (err) {
      console.log(err);
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        console.log('Canceled');
      } else {
        // For Unknown Error
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const uploadImage = async e => {
    setShowLoader(true);
    // e.persist();
    console.log('entered');
    const data = new FormData();
    data.append('title', imageAlt);
    data.append('description', caption);
    data.append('userId', userData.userId);
    data.append(
      'image',
      fileToUpload[0],
      // {
      //   uri: fileToUpload[0].uri,
      //   type: fileToUpload[0].type,
      //   name: fileToUpload[0].name,
      // }
    );
    // Please change file upload URL
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };
    console.log(data);
    const res = await axios
      .post(`${base_url}/post/`, data, headers)
      .then(function (response) {
        console.log('response :', response);
        props.modalClose(false);
        setShowLoader(false);
        props.refresh();
      })
      .catch(function (error) {
        console.log('error from image :');
        setShowLoader(false);
      });
    console.log('res', res);
  };
  const UpdateCaption = e => {};
  return (
    <Modal animationType="slide" transparent={true} visible={props.open}>
      {showLoader && (
        <View style={styles.loader}>
          <ActivityIndicator size={70} color="#fff" />
        </View>
      )}
      <View style={styles.postBody}>
        <View style={styles.closeIcon}>
          <Pressable onPress={() => props.modalClose(false)}>
            <IconButton
              icon="close"
              color={Colors.white}
              size={35}
              // onPress={() => console.log("Pressed")}
            />
          </Pressable>
        </View>
        <View style={styles.post}>
          <View style={styles.textInput}>
            <TextInput
              style={{width: '100%'}}
              placeholder="Image Alt"
              onChange={text => {
                setImageAlt(text.nativeEvent.text);
              }}
              // keyboardType={'email-address'}
              value={imageAlt}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              style={{width: '100%'}}
              placeholder="Caption"
              onChange={text => setCaption(text.nativeEvent.text)}
              // keyboardType={'email-address'}
              value={caption}
            />
          </View>
          <TouchableOpacity onPress={e => selectFile(e)}>
            <View
              style={[
                styles.textInput,
                {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  height: (height * 40) / 100,
                  borderColor: 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              {/* <Text style={{color: '#fff', fontSize: 17}}>Select Image</Text> */}
              {fileToUpload && fileToUpload[0].uri ? (
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    marginLeft: -10,
                  }}
                  source={{
                    uri: `${fileToUpload[0].uri}`,
                    // uri: 'https://picsum.photos/700',
                  }}
                  resizeMode="contain"
                />
              ) : (
                <IconButton color="#fff" icon="image-plus" />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={e => uploadImage(e)}>
            <View
              style={[
                styles.textInput,
                {
                  backgroundColor: 'blue',
                  height: 50,
                  borderColor: 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{color: '#fff', fontSize: 17}}>Create Post</Text>
              <IconButton color="#fff" icon="image-plus" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  postBody: {
    height: height,
    width: width,
    // borderWidth: 1,
    // borderColor: 'yellow',
    position: 'absolute',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  closeIcon: {
    // alignSelf: 'flex-end',
    position: 'absolute',
    // elevation: 2,
    // zIndex: 2,
    right: 0,
    top: 0,
    // alignContent: "flex-start",
    // justifyContent: "flex-start",
    // backgroundColor: "red",
    // flex: 0.079,
    // marginLeft: 50,
  },
  post: {
    height: (height * 90) / 100,
    width: (width * 100) / 100,

    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'yellow',
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flexDirection: 'row',
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 0.7,
    // marginBottom: 25,
    width: (width * 85) / 100,
    borderRadius: 7,
    paddingLeft: 10,
  },
  loader: {
    position: 'absolute',
    zIndex: 2,
    height: height,
    width: width,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddPost;
