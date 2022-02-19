/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'react-native-axios';
import EncryptedStorage from 'react-native-encrypted-storage';

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from 'react-native-paper';

import StoryModal from './modal/StoryModal';
import StoryTab from './StoryTab';
import MoreOptions from './modal/MoreOptions';
import FeedModal from './modal/FeedModal';
import base_url from './app_constants';
// import { TouchableOpacity } from "react-";
// var posts = [
//   {username: 'Bheem', image: 'https://picsum.photos/700', likes: 4},
//   {username: 'Raju', image: 'https://picsum.photos/700', likes: 4},
//   {username: 'Kalu', image: 'https://picsum.photos/700', likes: 4},
//   {username: 'Chutki', image: 'https://picsum.photos/700', likes: 4},
//   {username: 'Jhonny', image: 'https://picsum.photos/700', likes: 4},
//   {username: 'Jordi', image: 'https://picsum.photos/700', likes: 4},
//   {username: 'Luke', image: 'https://picsum.photos/700', likes: 4},
//   {username: 'Rock', image: 'https://picsum.photos/700', likes: 4},
// ];
var backTimer;
var backCount = 0;
var userData;
var feedData;
var userList;
var userDetail;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Feed = props => {
  const [likestate, setLikeState] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [moreOption, setMoreOption] = useState(false);
  const [user, setUser] = useState();
  const [userFeed, setUserFeed] = useState();
  // const [modalVis, setModalVis] = useState(false);
  const [Option, setMore] = useState(false);
  const [feedOption, setFeedOption] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // const [posts, setPost] = useState([
  //   {username: 'Bheem', image: 'https://picsum.photos/700', likes: 4},
  //   {username: 'Raju', image: 'https://picsum.photos/700', likes: 4},
  //   {username: 'Kalu', image: 'https://picsum.photos/700', likes: 4},
  //   {username: 'Chutki', image: 'https://picsum.photos/700', likes: 4},
  //   {username: 'Jhonny', image: 'https://picsum.photos/700', likes: 4},
  //   {username: 'Jordi', image: 'https://picsum.photos/700', likes: 4},
  //   {username: 'Luke', image: 'https://picsum.photos/700', likes: 4},
  //   {username: 'Rock', image: 'https://picsum.photos/700', likes: 4},
  // ]);

  // const [backCount, setBackCount] = useState(0);
  // const [backTimer, setBackTimer] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        // setShowLoader(true);

        var data = await EncryptedStorage.getItem('user_session');
        // console.log('line 68 -', JSON.parse(data));
        data = JSON.parse(data);
        // data.state ? (isLogin = data.state) : null;
        // isLogin = data.state;
        // setIsLogin(isLogin);
        userData = data;
        console.log(userData);
        await fetchFeed();
        await fetchUser();
        // await checkUser();
        if (props.refresh) {
          await fetchFeed();

          console.log('refresh');
          props.refreshStat(false);
        }
        // setShowLoader(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [props]);

  const fetchUser = async () => {
    try {
      const users = await axios.get(`${base_url}/users/`);
      // console.log(users.data);
      userList = users.data;
      setUser(userList);
    } catch (e) {
      console.log(e);
    }
    // await checkUser();
  };
  const getUserName = id => {
    const result = userList.filter(i => i._id === id);
    // console.log(result[0].username);
    return result[0].username;
  };
  // const checkUser = async () => {
  //   console.log('first');
  //   const result = await axios.get(
  //     `http://localhost:3002/userDetail/${userData.userId}`,
  //   );
  //   console.log('userDetail', result.data);
  //   userDetail = result.data;
  //   // setUserDetailFull(result.data);
  //   // console.log(userDetailFull);
  // };
  const fetchFeed = async () => {
    // const uId = [...userData.userId, ...userDetail[0].following];
    // console.log(uId);
    setShowLoader(true);
    const feed = await axios.get(`${base_url}/post/${userData.userId}`);
    // console.log(feed.data);
    feedData = feed.data.length > 1 && feed.data.reverse();
    setUserFeed(feedData);
    setShowLoader(false);
  };

  const callbackFunction = data => {
    setModalVisible(data.modal);
    console.log('entered callbackFunction', data);
    setMore(data.other);

    // console.log("object", data);
  };
  const modalClose = data => {
    setModalVisible(data);
  };
  const optionClose = data => {
    setMore(data);
  };
  const feedClose = data => {
    setMoreOption(data);
  };
  // useEffect(() => {
  //   props.modalCallback({
  //     story: modalVisible,
  //     feedOption: moreOption,
  //     option: Option,
  //   });
  // });
  const checkLike = async value => {
    const res = value.like.includes(userData.userId);
    if (res) {
      setLikeState(!likestate);
      const result = await axios.patch(`${base_url}/post/unlike/${value._id}`, {
        like: userData.userId,
      });
      console.log(result);
    } else {
      setLikeState(!likestate);
      const result = await axios.patch(`${base_url}/post/like/${value._id}`, {
        like: userData.userId,
      });
      console.log(result);
    }
    await fetchFeed();
  };
  // const checkLikeState = value => {
  //   const res = value.like.includes(userData.userId);
  //   return res;
  // };

  return (
    <View style={style.feedBody}>
      <View
        style={[
          Option || moreOption
            ? {
                height: (Dimensions.get('screen').height * 100) / 100,
                backgroundColor: 'rgba(0,0,0,0.6)',
                width: (Dimensions.get('screen').width * 100) / 100,
                position: 'absolute',
                zIndex: 1,
              }
            : '',
        ]}
      />
      <StoryModal modal={modalVisible} modalClose={modalClose} />

      <FeedModal feed={moreOption} feedOptionClose={feedClose} />
      <MoreOptions other={Option} moreOptionClose={optionClose} />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* <View style={{marginTop: 20, marginBottom: 10}}>
        <StoryTab
          parentCallback={callbackFunction}
          modal={modalVisible}
          other={Option}
        />
      </View> */}
      {showLoader && (
        <View style={style.loader}>
          <ActivityIndicator size={70} color="#fff" />
        </View>
      )}
      {!feedData && (
        <View>
          <Text>no posts</Text>
        </View>
      )}

      {feedData && userList && (
        <View style={style.post}>
          <FlatList
            data={userFeed}
            initialNumToRender={3}
            renderItem={({item}) => (
              <View
                style={
                  {
                    //   flexDirection: "row",
                    //   alignItems: "center",
                    //   padding: 8,
                    //   backgroundColor: "red",
                  }
                }>
                <View style={style.postHead}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={
                        () => setModalVisible(!modalVisible)
                        // props.modalCallback({story: true, feedOption: false})
                      }>
                      <Avatar.Icon
                        icon="account"
                        color="white"
                        size={40}
                        style={{
                          borderColor: '#f56729',
                          borderWidth: 2,
                          marginTop: '5%',
                          marginLeft: '19%',
                        }}
                        backgroundColor="black"
                      />
                    </TouchableOpacity>

                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                        marginLeft: 1,
                        textAlignVertical: 'center',
                      }}>
                      {getUserName(item.userId)}
                      {/* {item.title} */}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={
                      () => setMoreOption(true)
                      // props.modalCallback({feedOption: true, story: false})
                    }>
                    <IconButton icon="dots-vertical" color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={style.postBody}>
                  <View
                  // style={{
                  //   backgroundColor: "red",
                  //   //   height: 200,
                  //   width: "100%",
                  // }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        // console.log('single tap');
                        backCount++;
                        if (backCount === 2) {
                          clearTimeout(backTimer);
                          // console.log('double tap!');
                          setLikeState(!likestate);
                        } else {
                          backTimer = setTimeout(() => {
                            backCount = 0;
                          }, 300);
                        }
                      }}>
                      <Image
                        style={{
                          width: (Dimensions.get('screen').width * 100) / 100,
                          height: (Dimensions.get('screen').height * 33) / 100,
                        }}
                        source={{
                          uri: `${base_url}/uploads/${item.image}`,
                          // uri: 'https://picsum.photos/700',
                        }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={style.icons}>
                        <IconButton
                          onPress={() => checkLike(item)}
                          color={
                            item.like.includes(userData.userId) ? 'red' : '#fff'
                          }
                          icon={
                            item.like.includes(userData.userId)
                              ? 'heart'
                              : 'heart-outline'
                          }
                        />
                        <IconButton color="#fff" icon="comment-outline" />
                        <IconButton color="#fff" icon="share-outline" />
                      </View>
                      <IconButton
                        color="#fff"
                        icon={saved ? 'bookmark' : 'bookmark-outline'}
                        onPress={() => (
                          setSaved(!saved),
                          console.log(item.likes),
                          ToastAndroid.show('Post saved', ToastAndroid.SHORT)
                        )}
                      />
                    </View>
                    <View style={{left: 15}}>
                      <Text style={{color: '#fff'}}>
                        {item.like.length} likes
                      </Text>
                    </View>
                    <View style={{left: 15, top: 5}}>
                      <Text style={{color: '#fff'}}>{item.description}</Text>
                    </View>
                  </View>
                </View>
                {/* <Icon name={item.icon} color="white" size={30} /> */}
              </View>
            )}
            // keyExtractor={(item) => item.id}
          />
        </View>
      )}
      {/* </ScrollView> */}
    </View>
  );
};
const style = StyleSheet.create({
  feedBody: {
    height: (Dimensions.get('screen').height * 83.6) / 100,
    width: '100%',
    // backgroundColor: "red",
  },
  post: {
    padding: 0,
    // flexDirection: "column",
  },
  postHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  postBody: {
    // backgroundColor: "grey",
    // borderWidth: 1,
    // borderColor: "yellow",
    height: 400,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  icons: {
    // height: "50%",
    flexDirection: 'row',
    // color: "#fff",
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
export default Feed;
