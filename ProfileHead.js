/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
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
} from 'react-native';
import {IconButton, Colors, List} from 'react-native-paper';

const ProfileHead = props => {
  const [moreOption, setMoreOption] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.head}>
      <Text style={{fontSize: 22, color: 'white', left: 20}}>
        {props.userName}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <IconButton icon="plus-circle-outline" color="#fff" size={27} />
        <IconButton
          icon="menu"
          color="#fff"
          onPress={() => setMoreOption(true)}
          size={27}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={moreOption}
        style={{
          backgroundColor: 'rgba(0,0,0,0.4)',
          flex: 1,
          position: 'absolute',
          zIndex: 2,
        }}>
        <View style={styles.onLongPress}>
          <TouchableOpacity onPress={() => setMoreOption(false)}>
            <IconButton
              icon="close"
              color={Colors.white}
              size={35}
              // onPress={() => console.log("Pressed")}
            />
          </TouchableOpacity>

          <View style={styles.list}>
            <TouchableOpacity onPress={() => props.childFunction(false)}>
              <IconButton icon="logout" color="#fff" />
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    width: '100%',
    // backgroundColor: 'pink',
    // borderColor: 'yellow',
    // borderWidth: 2,
    height: (Dimensions.get('screen').height * 6) / 100,
    justifyContent: 'space-between',
    // alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    width: '90%',
    // borderWidth: 1,
    // borderColor: "yellow",
    marginBottom: '5%',
    marginRight: '5%',
  },
  onLongPress: {
    // height: "20%",
    width: '100%',
    backgroundColor: '#202020',
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
});
export default ProfileHead;
