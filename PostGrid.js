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
import axios from 'react-native-axios';
import {IconButton, Colors, List, Avatar} from 'react-native-paper';
import PostModal from './modal/PostModal';
import EncryptedStorage from 'react-native-encrypted-storage';
import base_url from './app_constants';

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
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
];
var feedData;
var userData;
var userList;
var modalData;

const PostGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalData, setShowModalData] = useState();
  const [user, setUser] = useState();
  const [userName, setUserName] = useState('');

  const [userFeed, setUserFeed] = useState();

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
        await fetchFeed();
        await fetchUser();
        // await checkUser();
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const fetchFeed = async () => {
    // const uId = [...userData.userId, ...userDetail[0].following];
    // console.log(uId);
    const feed = await axios.get(`${base_url}/post/${userData.userId}`);
    // console.log(feed.data);
    feedData = feed.data.reverse();
    setUserFeed(feedData);
  };
  const fetchUser = async () => {
    try {
      const users = await axios.get(`${base_url}/users`);
      // console.log(users.data);
      userList = users.data;
      // setUserList(user.data);
      setUser(userList);
    } catch (e) {
      console.log(e);
    }
    // await checkUser();
  };
  const getUserName = id => {
    if (userList) {
      const result = userList.filter(i => i._id === id);
      // console.log(result[0].username);
      setUserName(result[0].username);
      // return result[0].username;
    }
  };

  const openModal = data => {
    setShowModal(true);
    setShowModalData(data);
    modalData = data;
    getUserName(data.userId);
  };
  return (
    <View style={styles.postGridContainer}>
      <View
        style={[
          showModal
            ? {
                height: (Dimensions.get('screen').height * 100) / 100,
                backgroundColor: 'rgba(0,0,0,0.8)',
                width: (Dimensions.get('screen').width * 100) / 100,
                position: 'absolute',
                zIndex: 1,
              }
            : '',
        ]}
      />
      <FlatList
        data={userFeed}
        numColumns={3}
        key={3}
        renderItem={({item}) => (
          <TouchableOpacity
            onLongPress={() => openModal(item)}
            onPressOut={() => setShowModal(false)}>
            <View style={{padding: 3}}>
              <Image
                style={{
                  width: 130,
                  height: 130,
                }}
                source={{uri: `http://localhost:3002/uploads/${item.image}`}}
              />
            </View>
          </TouchableOpacity>
        )}></FlatList>
      <PostModal open={showModal} userName={userName} data={showModalData} />
    </View>
  );
};
const styles = StyleSheet.create({
  postGridContainer: {
    flex: 1,
    width: '100%',
    padding: 1,
    // backgroundColor: 'red',
    // borderColor: 'yellow',
    // borderWidth: 2,
  },
});
export default PostGrid;
