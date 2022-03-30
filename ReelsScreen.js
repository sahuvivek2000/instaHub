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
import FilterModal from './modal/FilterModal';
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
  const [openFilter, setOpenFilter] = useState(false);
  const [category, setCategory] = useState('dankmemes');
  const [error, setError] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
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
    try {
      const meme = await axios.get(
        `https://meme-api.herokuapp.com/gimme/${category}/5`,
      );
      console.log(meme.code);

      meme.data.memes.map(item => {
        // setImageUrl(item.preview[2]);
        // imageUrl.push(item.preview[2]);
        setImageUrl(i => [...i, item]);
        // console.log(item.preview[2]);
        // console.log(imageUrl.length);
      });
    } catch (e) {
      // console.log(e);
      // setError(true);
      setErrorModal(true);
    }
  };
  const updateMeme = () => {
    setImageUrl([]);
    getNewMeme();

    setOpenFilter(false);
  };
  // console.log('reel', imageUrl);
  // const changeVideo = () => {};
  return (
    <View style={styles.mainBody}>
      {/* <View style={{height: 90}}></View> */}
      <View
        style={[
          openFilter
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
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => setOpenFilter(true)}>
          <IconButton icon="filter" color="white" />
        </TouchableOpacity>
      </View>
      {/* <FilterModal open={openFilter} filterModalVisiblity={FilterModalState} /> */}

      {/* ---------------------------filterModal--------------------------------------- */}
      <Modal animationType="slide" transparent={true} visible={openFilter}>
        <View style={styles.filterHead}>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={() => setOpenFilter(false)}>
              <IconButton icon="close" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: (width * 90) / 100,
              // backgroundColor: 'red',
              top: 20,
              left: 20,
              flexDirection: 'row',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 15,
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{color: '#fff', left: 15, width: '70%'}}
              placeholder="Category"
              onChangeText={text => setCategory(text)}
            />
            <TouchableOpacity onPress={() => updateMeme()}>
              <IconButton icon="arrow-right-bold-outline" color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* ---------------------------filterModal--------------------------------------- */}
      {/* ---------------------------ErrorModal--------------------------------------- */}
      <Modal animationType="slide" transparent={true} visible={errorModal}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(245, 39, 39, 0.68)',
            width: '95%',
            top: (height * 45) / 100,
            height: (height * 15) / 100,
            left: 10,
            // borderColor: 'white',
            // borderWidth: 1,
            borderRadius: 15,
          }}>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={() => setErrorModal(false)}>
              <IconButton icon="close" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{color: '#fff', fontSize: 25, alignSelf: 'center'}}>
              No Content in this Category
            </Text>
          </View>
        </View>
      </Modal>
      {/* ---------------------------ErrorModal--------------------------------------- */}

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
            showsVerticalScrollIndicator={false}
            pagingEnabled={true}
            scrollEventThrottle={400}>
            <FlatList
              // onEndReachedThreshold={1}
              pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            data={imageUrl}
              keyExtractor={(item, index) => `id_${index}`}
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
  filterHead: {
    position: 'absolute',
    height: (height * 20) / 100,
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    backgroundColor: 'black',
  },
});
export default ReelsScreen;
