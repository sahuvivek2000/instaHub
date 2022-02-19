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
  ActivityIndicator,
} from 'react-native';
import axios from 'react-native-axios';
import EncryptedStorage from 'react-native-encrypted-storage';

import {IconButton, Colors, List, Avatar, Badge} from 'react-native-paper';
import base_url from './app_constants';
import PostGrid from './PostGrid';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
var userData;
var userList;
var userDetail;
const ActivityScreen = () => {
  const [user, setUser] = useState();
  const [userDetailFull, setUserDetailFull] = useState();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        var data = await EncryptedStorage.getItem('user_session');
        // console.log('line 68 -', JSON.parse(data));
        data = JSON.parse(data);
        // data.state ? (isLogin = data.state) : null;
        // isLogin = data.state;
        // setIsLogin(isLogin);
        userData = data;
        console.log(userData, `${base_url}/users/`);
        await checkUser();
        await fetchUser();
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const fetchUser = async () => {
    setShowLoader(true);
    try {
      const users = await axios.get(`${base_url}/users/`);
      console.log('fetchUser', users.data);
      userList = users.data;
      userList = userList.filter(i => i._id !== userData.userId);
      setUser(userList);
    } catch (e) {
      console.log(e);
    }
    setShowLoader(false);
    // await checkUser();
  };
  const unfollowUser = async id => {
    setShowLoader(true);
    console.log('entered unfollow');
    const result = await axios.patch(
      `${base_url}/userDetail/${userData.userId}`,
      {
        following: id,
      },
    );
    console.log(result);
    setShowLoader(false);
    await checkUser();
  };

  const fetchUserDetail = async followingUserId => {
    setShowLoader(true);
    const userDetails = await axios.post(
      `${base_url}/userDetail/${userData.userId}`,
      {
        userId: userData.userId,
        following: [followingUserId],
        follower: [],
      },
    );
    // setFollowingId('');
    setShowLoader(false);
    await checkUser();
  };
  const checkUser = async () => {
    setShowLoader(true);
    console.log('first');
    const result = await axios.get(`${base_url}/userDetail/${userData.userId}`);
    console.log('checkUser', result.data);
    userDetail = result.data;
    setUserDetailFull(result.data);
    console.log(userDetail);
    setShowLoader(false);
  };
  const checkFollower = id => {
    // await checkUser();
    let result = userDetail[0].following ? userDetail[0].following : [];
    result = result.includes(id);
    // console.log(result);
    return result;
  };
  return (
    <View style={styles.mainContainer}>
      {showLoader && (
        <View style={styles.loader}>
          <ActivityIndicator size={70} color="#fff" />
        </View>
      )}
      <View
        style={{
          //   borderColor: 'yellow',
          //   borderWidth: 1,
          paddingLeft: 20,
          height: (height * 5) / 100,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 23, fontWeight: '600', color: 'white'}}>
          Activity
        </Text>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   borderColor: 'yellow',
          //   borderWidth: 1,
          height: (height * 10) / 100,
          justifyContent: 'flex-start',
          paddingLeft: 20,
        }}>
        <Avatar.Image size={53} source={require('./assests/avatar-icon.jpg')} />
        <Badge style={{position: 'absolute', top: 19, left: 56}}>3</Badge>
        <View style={{left: 10}}>
          <TouchableOpacity onPress={() => checkUser()}>
            <Text style={{fontSize: 15, color: 'white'}}>Follow request</Text>
            <Text style={{fontSize: 13, color: 'grey'}}>
              Approve or ignore request
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {user && (
        <View
          style={{
            // borderColor: 'yellow',
            // borderWidth: 1,
            // backgroundColor: 'yellow',
            height: (height * 83) / 100,
            // width: (width * 90) / 100,
            width: width,
          }}>
          <FlatList
            data={userList}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  //   borderColor: 'yellow',
                  //   borderWidth: 1,
                  height: (height * 6) / 100,
                  width: (width * 90) / 100,
                  justifyContent: 'flex-start',
                  paddingLeft: 20,
                }}>
                <Avatar.Image
                  size={45}
                  source={require('./assests/avatar-icon.jpg')}
                />
                {/* <Badge style={{position: 'absolute', top: 5, left: 46}}>
                  3
                </Badge> */}
                <View
                  style={{
                    left: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // width: '70%',
                    flex: 0.935,
                    // borderColor: 'yellow',
                    // borderWidth: 1,
                  }}>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    {item.username}
                  </Text>
                  {/* <Text style={{fontSize: 13, color: 'grey'}}>
                      Approve or ignore request
                    </Text> */}
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#609BEB',
                      height: 25,
                      width: 70,
                      borderRadius: 5,
                    }}
                    onPress={() =>
                      !checkFollower(item._id)
                        ? fetchUserDetail(item._id)
                        : unfollowUser(item._id)
                    }>
                    {userDetail && checkFollower(item._id) ? (
                      <Text style={{color: '#fff'}}>Unfollow</Text>
                    ) : (
                      <Text style={{color: '#fff'}}>follow</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  loader: {
    position: 'absolute',
    zIndex: 2,
    height: height,
    width: width,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivityScreen;
