import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
} from 'react-native';
import {Appbar, Avatar, Modal} from 'react-native-paper';

const StoryTab = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [otherOption, setOther] = useState(false);
  const [data, setData] = useState({modal: false, other: false});
  useEffect(() => {
    console.log('storytab', props.modal, props.other);
    // setModalVisible(props.modal);
    // setOther(props.other);
    // setData({modal:modalVisible,other:otherOption})
    // props.parentCallback(data);
  });

  return (
    <View style={style.head}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9].map(() => (
          <View style={style.story}>
            <TouchableOpacity
              onPress={() => (
                // setModalVisible(true),
                // setModalVisible(props.modal),
                // setData({ modal: true, other: false }),
                props.parentCallback({modal: true, other: false}),
                ToastAndroid.show('onPress called', ToastAndroid.SHORT)
              )}
              onLongPress={() => (
                setOther(true),
                // setOther(props.other),
                // setData({ other: true, modal: false }),
                props.parentCallback({other: true, modal: false}),
                ToastAndroid.show('onLongPress called', ToastAndroid.SHORT)
              )}>
              <Avatar.Text
                size={60}
                label="I"
                backgroundColor="black"
                style={{borderColor: '#f56729', borderWidth: 1.7}}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  head: {
    backgroundColor: 'transparent',
    // height: 90,
    // marginTop: 50,
    alignContent: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    // borderColor: "green",
    // borderWidth: 1,
    marginBottom: 13,
    // right: 30,
    // paddingLeft: 20,
  },
  story: {
    // width: "auto",
    alignContent: 'center',
    justifyContent: 'space-evenly',
    // padding: 10,
    marginRight: 20,
    // paddingLeft: 10,
    left: 15,
    // borderColor: "pink",
    // borderWidth: 1,
  },
});

export default StoryTab;
