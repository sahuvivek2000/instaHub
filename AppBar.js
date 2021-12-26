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

// export default function AppBar() {
//   return (
const AppBar = props => {
  const [openMsg, setOpenMsg] = useState(false);
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
        {/* <TouchableOpacity onPress={() => console.log('object')}> */}
        <IconButton
          onPress={() => props.msgShow(true)}
          icon="facebook-messenger"
          color="#fff"
        />
        {/* </TouchableOpacity> */}
      </View>

      {/* <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon="dots-vertical" onPress={() => {}} /> */}
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
