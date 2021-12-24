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
} from 'react-native';
import {IconButton, Colors, List, Avatar} from 'react-native-paper';
import PostModal from './modal/PostModal';

const posts = [
  {username: 'Bheem', image: 'https://picsum.photos/700'},
  {username: 'Raju', image: 'https://picsum.photos/700'},
  {username: 'Kalu', image: 'https://picsum.photos/700'},
  {username: 'Chutki', image: 'https://picsum.photos/700'},
  {username: 'Jhonny', image: 'https://picsum.photos/700'},
  {username: 'Jordi', image: 'https://picsum.photos/700'},
  {username: 'Luke', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},

  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
  {username: 'Rock', image: 'https://picsum.photos/700'},
];

const PostGrid = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.postGridContainer}>
      <View
        style={[
          showModal
            ? {
                height: (Dimensions.get('screen').height * 100) / 100,
                backgroundColor: 'rgba(0,0,0,0.8)',
                width: (Dimensions.get('screen').width * 100) / 100,
                position: 'absolute',
                zIndex: 1,
              }
            : '',
        ]}
      />
      <FlatList
        data={posts}
        numColumns={3}
        key={3}
        renderItem={({item}) => (
          <TouchableOpacity
            onLongPress={() => setShowModal(true)}
            onPressOut={() => setShowModal(false)}>
            <View style={{padding: 3}}>
              <Image
                style={{
                  width: 130,
                  height: 130,
                }}
                source={{uri: item.image}}
              />
            </View>
          </TouchableOpacity>
        )}></FlatList>
      <PostModal open={showModal} />
    </View>
  );
};
const styles = StyleSheet.create({
  postGridContainer: {
    flex: 1,
    width: '100%',
    padding: 1,
    // backgroundColor: 'red',
    // borderColor: 'yellow',
    // borderWidth: 2,
  },
});
export default PostGrid;
