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
const Feed = props => {
  const [likestate, setLikeState] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [moreOption, setMoreOption] = useState(false);
  const [scroll, setScroll] = useState();
  const [userFeed, setUserFeed] = useState();
  // const [modalVis, setModalVis] = useState(false);
  const [Option, setMore] = useState(false);
  const [feedOption, setFeedOption] = useState(false);
  const [posts, setPost] = useState([
    {username: 'Bheem', image: 'https://picsum.photos/700', likes: 4},
    {username: 'Raju', image: 'https://picsum.photos/700', likes: 4},
    {username: 'Kalu', image: 'https://picsum.photos/700', likes: 4},
    {username: 'Chutki', image: 'https://picsum.photos/700', likes: 4},
    {username: 'Jhonny', image: 'https://picsum.photos/700', likes: 4},
    {username: 'Jordi', image: 'https://picsum.photos/700', likes: 4},
    {username: 'Luke', image: 'https://picsum.photos/700', likes: 4},
    {username: 'Rock', image: 'https://picsum.photos/700', likes: 4},
  ]);

  // const [backCount, setBackCount] = useState(0);
  // const [backTimer, setBackTimer] = useState(0);
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
        fetchFeed();
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const fetchFeed = async () => {
    const feed = await axios.get(
      `http://localhost:3002/post/${userData.userId}`,
    );
    // console.log(feed.data);
    feedData = feed.data;
    setUserFeed(feedData);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20, marginBottom: 10}}>
          <StoryTab
            parentCallback={callbackFunction}
            modal={modalVisible}
            other={Option}
          />
        </View>

        {feedData && (
          <View style={style.post}>
            <FlatList
              data={feedData}
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
                        {item.title}
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
                            height:
                              (Dimensions.get('screen').height * 33) / 100,
                          }}
                          source={{
                            uri: `http://localhost:3002/uploads/${item.image}`,
                            // uri: 'https://picsum.photos/700',
                          }}
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
                            onPress={() => setLikeState(!likestate)}
                            color={likestate ? 'red' : '#fff'}
                            icon={likestate ? 'heart' : 'heart-outline'}
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
                    </View>
                  </View>
                  {/* <Icon name={item.icon} color="white" size={30} /> */}
                </View>
              )}
              // keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </ScrollView>
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
    height: 350,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  icons: {
    // height: "50%",
    flexDirection: 'row',
    // color: "#fff",
  },
});
export default Feed;
