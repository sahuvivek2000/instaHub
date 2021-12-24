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
  ScrollView,
} from 'react-native';
import {IconButton, Colors, List, Avatar, Badge} from 'react-native-paper';
import axios from 'react-native-axios';
import WebView from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import PostGrid from './PostGrid';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
// var videoId = '2CNl_CCtE-I';
// let imageUrl = [];
const imageUrl_1 = [
  'https://picsum.photos/700',
  'https://picsum.photos/700',
  'https://picsum.photos/700',
  'https://picsum.photos/700',
  'https://picsum.photos/700',
  'https://picsum.photos/700',
  'https://picsum.photos/700',
];
// const getMeme = async () => {
//   const meme = await axios.get('https://meme-api.herokuapp.com/gimme/20');
//   // console.log(meme.data.memes);
//   meme.data.memes.map(item => {
//     // setImageUrl(item.preview[2]);
//     imageUrl.push(item.preview[2]);
//     // console.log(item.preview[2]);
//     // console.log(imageUrl.length);
//   });

//   // setImage(imageUrl)
//   // console.log(imageUrl);
//   // setImageUrl(meme.data.preview[2]);
// };
// getMeme();
// console.log('outside', imageUrl);

const ReelsScreen = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [change, setChange] = useState(0);
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 1;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  // const [videoId, setVideoId] = useState('2CNl_CCtE-I');
  useEffect(() => {
    const getMeme = async () => {
      const meme = await axios.get('https://meme-api.herokuapp.com/gimme/5');
      // console.log(meme.data.memes);
      meme.data.memes.map(item => {
        // setImageUrl(item.preview[2]);
        // imageUrl.push(item.preview[2]);
        setImageUrl(i => [...i, item]);
        // console.log(item.preview[2]);
        // console.log(imageUrl.length);
      });

      // setImage(imageUrl)
      // console.log(imageUrl);
      // setImageUrl(meme.data.preview[2]);
    };
    getMeme();
    // console.log(imageUrl);
  }, []);
  // const [image, setImage] = useState([]);
  const getNewMeme = async () => {
    const meme = await axios.get('https://meme-api.herokuapp.com/gimme/5');
    // console.log(meme.data.memes);
    meme.data.memes.map(item => {
      // setImageUrl(item.preview[2]);
      // imageUrl.push(item.preview[2]);
      setImageUrl(i => [...i, item]);
      // console.log(item.preview[2]);
      // console.log(imageUrl.length);
    });
  };
  // console.log('reel', imageUrl);
  // const changeVideo = () => {};
  return (
    <View style={styles.mainBody}>
      {/* <View style={{height: 90}}></View> */}

      {imageUrl && (
        <View
          style={{
            // backgroundColor: 'red',
            height: (height * 90) / 100,
            width: '100%',
            // zIndex: 3,
          }}>
          <ScrollView
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                console.log('end');
                getNewMeme();
              }
            }}
            scrollEventThrottle={400}>
            <FlatList
              // onEndReachedThreshold={1}
              data={imageUrl}
              renderItem={({item}) => (
                <View
                  style={
                    {
                      // borderColor: 'red',
                      //  borderWidth: 1
                    }
                  }>
                  <Image
                    style={{
                      width: '100%',
                      height: (height * 90) / 100,
                      // height: '50%',
                      // flex: 1,
                    }}
                    source={{
                      uri: item.preview[2] || 'https://picsum.photos/700',
                    }}
                    resizeMode="contain"
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 700,
                      right: 10,
                      // borderColor: 'red',
                      // borderWidth: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <IconButton icon="arrow-up-bold-outline" color="white" />
                    <Text style={{color: 'white'}}>{item.ups}</Text>
                  </View>
                </View>
                // <Text style={{color: 'white'}}>{item}</Text>
              )}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: 'black',
    // borderColor: 'yellow',
    // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
export default ReelsScreen;
