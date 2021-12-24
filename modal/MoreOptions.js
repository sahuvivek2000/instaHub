/* eslint-disable react-hooks/exhaustive-deps */
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButton, Colors, List} from 'react-native-paper';

const mydata = [
  {title: 'View Profile', icon: 'account-circle'},
  {title: 'Mute', icon: 'microphone-off'},
];
const MoreOptions = props => {
  const [moreOption, setMore] = useState(false);
  useEffect(() => {
    setMore(props.other);
  });

  return (
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
        <TouchableOpacity
          onPress={() => (setMore(false), props.moreOptionClose(false))}>
          <IconButton
            icon="close"
            color={Colors.white}
            size={35}
            // onPress={() => console.log("Pressed")}
          />
        </TouchableOpacity>

        <View style={styles.list}>
          <FlatList
            data={mydata}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                }}>
                <Icon name={item.icon} color="white" size={30} />
                <Text style={{color: '#fff', fontSize: 18, marginLeft: 30}}>
                  {item.title}
                </Text>
              </View>
            )}
            // keyExtractor={(item) => item.id}
          />
          {/* <List.Item
                title="View Profile"
                left={(props) => <List.Icon {...props} icon="account" />}
              />
              <List.Item
                title="Mute"
                left={(props) => <List.Icon {...props} icon="microphone-off" />}
              /> */}
          {/* <Text style={{ color: "#fff", fontSize: 22 }}>View Profile</Text>

              <Text style={{ color: "#fff", fontSize: 22 }}>Mute</Text> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  list: {
    width: '90%',
    // borderWidth: 1,
    // borderColor: "yellow",
    marginBottom: '5%',
    marginRight: '5%',

    // elevation: ,
  },
});

export default MoreOptions;
