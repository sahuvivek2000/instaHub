import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {BottomNavigation, IconButton, Text} from 'react-native-paper';
// import { View } from "react-native-web";

// import {Icon} from 'react-native-vector-icons';
const BottomNav = () => {
  return (
    <View style={style.main}>
      <View
        style={{
          flexDirection: 'row',
          width: (Dimensions.get('screen').width * 100) / 100,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <IconButton icon="home-outline" color="#fff" />
        <IconButton icon="magnify" color="#fff" />
        {/* <FontAwesome icon={RegularIcons.search} style={{ color: "white" }} /> */}
        <IconButton icon="plus-circle-outline" color="#fff" />
        <IconButton icon="heart-outline" color="#fff" />
        <IconButton icon="account-circle-outline" color="#fff" />
      </View>
    </View>
  );
};
export default BottomNav;

const style = StyleSheet.create({
  main: {
    // height: 60,
    // borderColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
    // zIndex: 1,
    // elevation: 2,
    // backgroundColor: "black",
  },
});
