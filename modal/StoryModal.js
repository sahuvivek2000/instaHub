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
import {IconButton, Colors, List, ProgressBar} from 'react-native-paper';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Story = [
  `https://picsum.photos/id/0/${Math.round(width)}/${Math.round(height)}`,
  `https://picsum.photos/id/1015/${Math.round(width)}/${Math.round(height)}`,
  `https://picsum.photos/id/1016/${Math.round(width)}/${Math.round(height)}`,
  `https://picsum.photos/id/10/${Math.round(width)}/${Math.round(height)}`,
  `https://picsum.photos/id/1011/${Math.round(width)}/${Math.round(height)}`,
  `https://picsum.photos/id/1018/${Math.round(width)}/${Math.round(height)}`,
  `https://picsum.photos/id/1025/${Math.round(width)}/${Math.round(height)}`,
  `https://picsum.photos/id/1022/${Math.round(width)}/${Math.round(height)}`,
];
const StoryModal = props => {
  const [modalVis, setModalVis] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // index === Story.length && setIndex(0);
    setModalVis(props.modal);
    // console.log(width, height);
    if (index + 1 !== Story.length) {
      setTimeout(() => {
        showStory(1);
        // index + 1 === Story.length && setModalVis(false);
      }, 2000);
    }
    if (index + 1 === Story.length) {
      setTimeout(() => {
        setModalVis(false);
        props.modalClose(false);
        setIndex(0);
      }, 2000);
    }
  });
  const showStory = data => {
    index < Story.length && data && setIndex(index + 1);
    index > 0 && !data && setIndex(index - 1);
    // index + 1 === Story.length && setModalVis(false) && props.modalClose(false);
    // else setIndex(0);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVis}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              position: 'absolute',
              zIndex: 3,
              // backgroundColor: 'red',
              // height: (height * 10) / 100,
              width: width,
              // alignItems: 'center',
              // paddingTop: 5,
              // top: 10,
            }}>
            <ProgressBar
              progress={(index + 1) / Story.length}
              color="#fff"
              style={{}}
            />
          </View>
          <View style={styles.closeIcon}>
            <Pressable
              onPress={() => (setModalVis(false), props.modalClose(false))}>
              <IconButton
                icon="close"
                color={Colors.white}
                size={35}
                // onPress={() => console.log("Pressed")}
              />
            </Pressable>
          </View>
          <View style={styles.body}>
            <Image
              style={{
                width: (Dimensions.get('screen').width * 100) / 100,
                height: (Dimensions.get('screen').height * 100) / 100,
                flexWrap: 'wrap',
              }}
              source={{uri: Story[index]}}
            />
          </View>
          {
            index + 1 !== Story.length && (
              <View
                style={{
                  position: 'absolute',
                  // backgroundColor: 'red',
                  right: 0,
                  top: (height * 40) / 100,
                }}>
                <IconButton
                  icon="chevron-right"
                  color="#fff"
                  size={30}
                  onPress={() => showStory(1)}
                />
              </View>
            )
            // index && (
            // ))
          }
          <View
            style={{
              position: 'absolute',
              // backgroundColor: 'red',
              left: 0,
              top: (height * 40) / 100,
            }}>
            {index ? (
              <IconButton
                icon="chevron-left"
                color="#fff"
                size={30}
                onPress={() => showStory(0)}
              />
            ) : null}
          </View>

          <View style={styles.footer}>
            {/* <TextInput
          mode="outlined"
          // underlineColor="black"
          // activeUnderlineColor="black"
          placeholder="text"
          selectionColor="white"
          outlineColor="black"
          activeOutlineColor="black"
          // TextColor="green"
          placeholderTextColor="white"
          right={<TextInput.Icon name="send" color="white" />}
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            // borderColor: "black",
            // borderWidth: 2,
            // color: "red",
          }}

          // value={text}
          // onChangeText={}
         /> */}
            <View
              style={{
                padding: 0,
                marginBottom: '5%',
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 15,
                flexDirection: 'row',
              }}>
              <TextInput
                style={{
                  color: 'red',
                  width: '85%',
                }}
              />
              <IconButton color="white" icon="send" size={25} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

    padding: 15,
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
    // elevation: 2,
    zIndex: 2,
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
});

export default StoryModal;
