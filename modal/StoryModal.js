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

const StoryModal = props => {
  const [modalVis, setModalVis] = useState(false);
  useEffect(() => {
    setModalVis(props.modal);
  });
  return (
    <Modal animationType="slide" transparent={true} visible={modalVis}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
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
              source={{uri: 'https://picsum.photos/700'}}></Image>
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
