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

import ActivityScreen from './ActivityScreen';
import Chats from './Chats';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const mydata = [
  {title: 'View Profile', icon: 'account-circle'},
  {title: 'Mute', icon: 'microphone-off'},
];
const Home = () => {
  const drawer = React.useRef(null);
  // const [a, setA] = React.useState('black');
  const [chat, setChat] = useState(true);
  const [calls, setCalls] = useState(false);
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
  const openMsgDrawer = data => {
    if (data) {
      drawer.current.openDrawer();
    }
  };
  // useEffect(() => {

  // }, [])
  const MessageScreen = () => {
    // const [chat, setChat] = useState(true);
    // const [calls, setCalls] = useState(false);

    return (
      <View style={styles.mainScreen}>
        <View style={styles.messageHead}>
          <IconButton
            icon="arrow-left"
            color="white"
            size={30}
            onPress={() => drawer.current.closeDrawer()}
          />
          <View style={{left: 15, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 25, color: 'white'}}>User_name</Text>
            <IconButton icon="chevron-down" color="white" />
          </View>
          <View style={{position: 'absolute', right: 0, flexDirection: 'row'}}>
            <IconButton icon="video-outline" color="white" size={30} />
            <IconButton icon="square-edit-outline" color="white" size={30} />
          </View>
        </View>
        <View style={styles.topNav}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderBottomColor: '#202020',
              borderBottomWidth: 1,
              height: '100%',
              paddingBottom: 0,
            }}>
            <TouchableOpacity
              style={[
                chat
                  ? {
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                      width: '50%',
                      alignItems: 'center',
                    }
                  : {width: '50%', alignItems: 'center'},
              ]}
              onPress={() => (setChat(true), setCalls(false))}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  position: 'absolute',
                  bottom: 10,
                }}>
                Chats
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                calls
                  ? {
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                      width: '50%',
                      alignItems: 'center',
                      // borderColor: 'yellow',
                      // borderWidth: 1,
                      // justifyContent: 'flex-end',
                    }
                  : {width: '50%', alignItems: 'center'},
              ]}
              onPress={() => (setChat(false), setCalls(true))}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  position: 'absolute',
                  bottom: 10,
                }}>
                Calls
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Chats />
        </View>
      </View>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={Dimensions.get('screen').width}
      drawerPosition={'right'}
      drawerBackgroundColor={'black'}
      renderNavigationView={() => MessageScreen()}>
      {/* <IconButton icon="home" onPress={() => drawer.current.openDrawer()} /> */}
      <View style={[styles.container]}>
        <View style={[styles.appbar]}>
          <AppBar msgShow={openMsgDrawer} />
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
    </DrawerLayoutAndroid>
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
  mainScreen: {
    backgroundColor: 'black',
    // borderColor: 'yellow',
    // borderWidth: 1,
    height: (height * 90) / 100,
    width: '100%',
    // zIndex: 3,
  },
  messageHead: {
    // borderColor: 'yellow',
    // borderWidth: 1,
    height: (height * 6) / 100,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topNav: {
    // borderColor: 'yellow',
    // borderWidth: 1,
    // height: '93%',
    height: (height * 6) / 100,
  },
});

export default Home;
