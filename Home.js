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
  Animated,
  Easing,
  DrawerLayoutAndroid,
} from 'react-native';
import {IconButton, Colors, List} from 'react-native-paper';
// import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
// import Icon from "react-native-vector-icons/dist/FontAwesome";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {mdiAccountCircle} from '@mdi/js';
import AppBar from './AppBar';
import BottomNav from './BottomNav';
import StoryTab from './StoryTab';
import Feed from './Feed';
import StoryModal from './modal/StoryModal';
import MoreOptions from './modal/MoreOptions';
import FeedModal from './modal/FeedModal';
const {height} = Dimensions.get('window');
const mydata = [
  {title: 'View Profile', icon: 'account-circle'},
  {title: 'Mute', icon: 'microphone-off'},
];
const Home = () => {
  // const [a, setA] = React.useState('black');
  // // const [i, setI] = React.useState(0);
  // const [modalVis, setModalVis] = useState(false);
  // const [moreOption, setMore] = useState(false);
  // const [data, setData] = useState({modal: false, other: false});
  // const [feedOption, setFeedOption] = useState(false);

  // const [scroll, setScroll] = React.useState(window.scrollY);
  // const callbackFunction = data => {
  //   setModalVis(data.modal);
  //   console.log('entered callbackFunction', data);
  //   setMore(data.other);

  //   // console.log("object", data);
  // };
  // const storyVisible = data => {
  //   setModalVis(data.story);
  //   setFeedOption(data.feedOption);
  //   // setScroll(data.scroll);
  //   // console.log(scroll);
  // };
  // const modalClose = data => {
  //   setModalVis(data);
  // };
  // const optionClose = data => {
  //   setMore(data);
  // };
  // const feedClose = data => {
  //   setFeedOption(data);
  // };

  return (
    <View style={[styles.container]}>
      <View style={[styles.appbar]}>
        <AppBar />
      </View>

      <View
        style={{
          // flex: 1,
          // borderWidth: 1,
          // borderColor: 'grey',
          // position: 'absolute',
          // backgroundColor: "red",
          // zIndex: 5,
          // bottom: "7%",
          // top: '18%',
          // left: 0,sssssssss
          height: (Dimensions.get('screen').height * 73.5) / 100,
          width: '100%',
        }}>
        {/* <StoryModal modal={modalVis} modalClose={modalClose} /> */}

        <Feed />
      </View>
      {/* <View
        style={[
          feedOption || moreOption
            ? {
                height: (Dimensions.get('screen').height * 100) / 100,
                backgroundColor: 'rgba(0,0,0,0.6)',
                width: (Dimensions.get('screen').width * 100) / 100,
                position: 'absolute',
                zIndex: 1,
              }
            : '',
        ]}
      /> */}
      {/* <FeedModal feed={feedOption} feedOptionClose={feedClose} />
      <MoreOptions other={moreOption} moreOptionClose={optionClose} /> */}
      {/* <View
        style={{
          justifyContent: 'flex-end',

          flex: 1,
        }}>
        <BottomNav />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    // alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
  },
  appbar: {
    width: '100%',

    // shadowRadius: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    // borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',

    padding: 35,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // padding: 0,
  },
  button: {
    elevation: 2,
  },

  closeIcon: {
    alignSelf: 'flex-end',
    // position: "absolute",
    elevation: 2,
    zIndex: 4,
    // alignContent: "flex-start",
    // justifyContent: "flex-start",
    // backgroundColor: "red",
    // flex: 0.079,
    // marginLeft: 50,
  },
  body: {
    height: '100%',
    backgroundColor: 'grey',
    width: '100%',
    borderRadius: 10,
    // zIndex: 1,
    // elevation: 1,
    left: 0,
    top: 0,
    position: 'absolute',
    // flex: 9,
  },
  footer: {
    // position: "absolute",
    elevation: 5,
    zIndex: 5,
    // backgroundColor: "red",
    // height: "50%",
    width: '90%',
    // flex: 10,
    marginBottom: 10,
    color: 'white',

    // justifyContent: "flex-end",
  },
  onLongPress: {
    // height: "20%",
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'flex-end',
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: (Dimensions.get('screen').height * 20) / 100,
    // alignSelf: "flex-end",
    // justifyContent: "flex-end",
    flexDirection: 'column',
    // marginTop: "167%",
    // borderColor: "red",
    // borderWidth: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  list: {
    width: '90%',
    // borderWidth: 1,
    // borderColor: "yellow",
    marginBottom: '5%',
    marginRight: '5%',

    // elevation: ,
  },
});

export default Home;
