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
import {IconButton, Colors, List, Avatar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ProfileHead from './ProfileHead';
import StoryTab from './StoryTab';
import PostGrid from './PostGrid';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Tab = createMaterialTopTabNavigator();
const Profile = props => {
  const [expanded, setExpanded] = useState(true);
  const [storyHighlight, setStoryHighlight] = useState(false);
  const [postGrid, setPostGrid] = useState(true);
  const [tagPostGrid, setTagPostGrid] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  const parentFunction = data => {
    setIsLogin(data);
    props.childFunction(data);
    console.log('profile', data);
  };
  return (
    <View style={styles.profile}>
      <ProfileHead childFunction={parentFunction} />
      <View style={styles.profileUser}>
        <View style={{justifyContent: 'center'}}>
          <Avatar.Image
            size={85}
            // icon="account-circle"
            color="white"
            source={require('./assests/avatar-icon.jpg')}
            style={{backgroundColor: 'blue'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            // alignContent: 'center',
            alignItems: 'center',
            // borderColor: 'yellow',
            // borderWidth: 2,
            width: (Dimensions.get('screen').width * 70) / 100,
            justifyContent: 'space-around',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>0</Text>
            <Text style={{color: 'white', fontSize: 15}}>Posts</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>0</Text>
            <Text style={{color: 'white', fontSize: 15}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>0</Text>
            <Text style={{color: 'white', fontSize: 15}}>Following</Text>
          </View>
        </View>
      </View>
      <View style={{left: 17}}>
        <Text style={{color: 'white', fontSize: 15}}>User Name</Text>
        <Text style={{color: 'white', fontSize: 15}}>Bio</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          // left: 16,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#505050',
            borderWidth: 1.3,
            borderRadius: 5,
            width: (width * 84) / 100,
            height: (height * 4) / 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#505050',
            borderWidth: 1.3,
            borderRadius: 5,
            width: (width * 9) / 100,
            height: (height * 4) / 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton icon="chevron-down" color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.storyHighlight}>
        {/* <List.Section>
          <List.Accordion
            title={
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                }}>
                Story Highlights
              </Text>
            }
            style={{
              backgroundColor: 'red',
              height: (height * 4.5) / 100,
              padding: 0,
              // paddingTop: 0,
            }}
            expanded={expanded}
            onPress={handlePress}
            right={props => (
              <IconButton {...props} icon="chevron-down" color="white" />
            )}>
            <List.Item
              style={{backgroundColor: 'black', top: 0}}
              title={
                <Text style={{color: 'white', fontSize: 13}}>
                  Keep your favourite stories on your profile
                </Text>
              }
            />
            <List.Item
              style={{backgroundColor: 'black'}}
              title={
                <Text style={{color: 'white', fontSize: 15}}>First item</Text>
              }
            />
          </List.Accordion>
        </List.Section> */}
        <View style={{width: '100%', top: 10}}>
          <TouchableOpacity
            onPress={() => setStoryHighlight(!storyHighlight)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: (height * 3) / 100,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                // display: 'flex',
                alignSelf: 'center',
                left: 15,
              }}>
              Story Highlights
            </Text>
            <IconButton icon="chevron-up" color="white" size={20} />
          </TouchableOpacity>
          {storyHighlight ? (
            <View style={{height: 80}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  left: 15,
                  top: 0,
                  marginBottom: 10,
                }}>
                Keep your favourite stories on your profile
              </Text>
              <StoryTab />
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.postGrid}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderBottomColor: '#202020',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity
            style={[
              postGrid
                ? {
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    width: '50%',
                    alignItems: 'center',
                  }
                : {width: '50%', alignItems: 'center'},
            ]}
            onPress={() => (setPostGrid(true), setTagPostGrid(false))}>
            <IconButton icon="grid" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tagPostGrid
                ? {
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    width: '50%',
                    alignItems: 'center',
                  }
                : {width: '50%', alignItems: 'center'},
            ]}
            onPress={() => (setPostGrid(false), setTagPostGrid(true))}>
            <IconButton icon="account-box-outline" color="white" />
          </TouchableOpacity>
        </View>
        <PostGrid />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: '100%',
    height: (Dimensions.get('screen').height * 90) / 100,
    backgroundColor: 'black',
    // borderColor: 'yellow',
    // borderWidth: 2,
  },
  profileUser: {
    // borderColor: 'yellow',
    // borderWidth: 2,
    height: (Dimensions.get('screen').height * 13) / 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  storyHighlight: {
    // height: (height * 90) / 100,
    // backgroundColor: 'red',
  },
  postGrid: {
    // backgroundColor: 'red',
    height: '60%',
    top: 30,
    // borderColor: 'yellow',
    // borderWidth: 1,
    flex: 0.89,
  },
});

export default Profile;
