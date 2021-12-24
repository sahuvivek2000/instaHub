/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
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
  {title: "Why you're seeing this post"},
  {title: 'Hide'},
  {title: 'Unfollow'},
];

const FeedModal = props => {
  const [moreOption, setMore] = useState(false);
  useEffect(() => {
    setMore(props.feed);
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
          onPress={() => (setMore(false), props.feedOptionClose(false))}>
          <IconButton
            icon="close"
            color={Colors.white}
            size={35}
            // onPress={() => console.log("Pressed")}
          />
        </TouchableOpacity>
        <View style={styles.icon}>
          <View style={styles.iconCircle}>
            <IconButton icon="link" color="white" />
            <Text style={{marginTop: 6, color: 'white'}}>Link</Text>
          </View>
          <View style={styles.iconCircle}>
            <IconButton icon="share-variant" color="white" />
            <Text style={{marginTop: 6, color: 'white'}}>Share</Text>
          </View>
          <View style={[styles.iconCircle, {borderColor: 'red'}]}>
            <IconButton icon="comment-alert-outline" color="red" />
            <Text style={{marginTop: 6, color: 'red'}}>Report</Text>
          </View>
        </View>

        <View style={styles.list}>
          <FlatList
            data={mydata}
            renderItem={({item}) => (
              <View
                style={{
                  // flexDirection: 'row',
                  // alignItems: 'center',
                  // alignContent
                  padding: 8,
                  // justifyContent: 'flex-start',
                  // left: 0,
                  // borderBottomColor: '#303030',
                  // borderBottomWidth: 1,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    // display: 'flex',
                    marginTop: 9,
                  }}>
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
    height: (Dimensions.get('screen').height * 33) / 100,
    // alignSelf: "flex-end",
    // justifyContent: "flex-end",
    flexDirection: 'column',
    // marginTop: "167%",
    // borderColor: "red",
    // borderWidth: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    // borderBottomStartRadius: 0,
  },
  list: {
    width: '90%',
    // borderWidth: 1,
    // borderColor: "yellow",
    marginBottom: '5%',
    marginRight: '5%',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignContent: 'stretch',
    // alignItems:

    // elevation: ,
  },
  iconCircle: {
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    height: 50,

    width: 50,
    // marginBottom: 5,
    flexDirection: 'column',
    // alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: (Dimensions.get('screen').height * 10) / 100,
    width: (Dimensions.get('screen').width * 100) / 100,
    borderBottomColor: '#303030',
    borderBottomWidth: 1,
    flexDirection: 'row',
    // alignContent: 'center',
    // alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
  },
});
export default FeedModal;
