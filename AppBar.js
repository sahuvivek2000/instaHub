/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  DrawerLayoutAndroid,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Appbar, Avatar, IconButton} from 'react-native-paper';
import AddPost from './modal/AddPost';

// export default function AppBar() {
//   return (
const AppBar = props => {
  const [openMsg, setOpenMsg] = useState(false);
  const [post, setPost] = useState(false);

  const postCallback = value => {
    console.log('first');
    setPost(value);
  };
  const refreshState = () => {
    props.postRefresh(true);
  };

  const drawer = useRef(null);
  return (
    <View style={styles.head}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          flexDirection: 'row',
          // borderColor: "red",
          // borderWidth: 1,
          width: (Dimensions.get('screen').width * 100) / 100,
          // width: 400,
          justifyContent: 'space-between',
          // borderWidth: 1,
          // textAlignVertical: "center",
          // borderColor: 'red',
          // width: 400,
        }}>
        <TouchableOpacity onPress={() => props.postRefresh(true)}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 28,
                display: 'flex',
                color: 'white',
                textAlignVertical: 'center',
                marginLeft: 15,
              }}>
              Insta
            </Text>

            <Text
              style={{
                marginLeft: 3,
                fontSize: 28,
                height: 36,
                // lineHeight: 50,
                marginTop: 7,
                // padding: 15,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 10,
                backgroundColor: '#f56729',
                textAlignVertical: 'center',
                // display: "flex",
                color: 'white',
                // padding: 20,
              }}>
              Hub
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => console.log('object')}> */}
        <View style={{flexDirection: 'row'}}>
          <IconButton
            icon="plus-box-multiple-outline"
            color="#fff"
            onPress={() => setPost(true)}
          />
          <IconButton
            onPress={() => props.msgShow(true)}
            icon="facebook-messenger"
            color="#fff"
          />
        </View>
        {/* </TouchableOpacity> */}
      </View>

      {/* <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon="dots-vertical" onPress={() => {}} /> */}
      <AddPost open={post} modalClose={postCallback} refresh={refreshState} />
    </View>
  );
};
// );
// }

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'black',
    // width: "100%",
    height: 50,
    // borderColor: 'red',
    // borderWidth: 1,

    // marginTop: 20,
  },
});
export default AppBar;
