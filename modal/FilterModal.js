/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ToastAndroid,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from 'react-native-paper';

const FilterModal = props => {
  const [openFilter, setOpenFilter] = useState(props.open);

  return (
    <Modal animationType="slide" transparent={true} visible={openFilter}>
      <View style={styles.filterHead}>
        <View>
          <TouchableOpacity
            onPress={
              (() => setOpenFilter(false), props.filterModalVisiblity(false))
            }>
            <IconButton icon="close" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  filterHead: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
});

export default FilterModal;
