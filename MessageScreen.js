// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable no-unused-vars */
// import React, {useState, useEffect} from 'react';

// import {
//   StyleSheet,
//   Text,
//   Pressable,
//   Modal,
//   Button,
//   View,
//   Alert,
//   Dimensions,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   TextInput,
//   Animated,
//   Easing,
//   DrawerLayoutAndroid,
// } from 'react-native';

// import {IconButton, Colors, List} from 'react-native-paper';
// import Home from './Home';
// import ReelsScreen from './ReelsScreen';
// import ActivityScreen from './ActivityScreen';
// import Chats from './Chats';
// const height = Dimensions.get('screen').height;
// const width = Dimensions.get('screen').width;

// const MessageScreen = () => {
//   const [chat, setChat] = useState(true);
//   const [calls, setCalls] = useState(false);

//   return (
//     <View style={styles.mainScreen}>
//       <View style={styles.messageHead}>
//         <IconButton icon="arrow-left" color="white" size={30} />
//         <View style={{left: 15, flexDirection: 'row', alignItems: 'center'}}>
//           <Text style={{fontSize: 25, color: 'white'}}>User_name</Text>
//           <IconButton icon="chevron-down" color="white" />
//         </View>
//         <View style={{position: 'absolute', right: 0, flexDirection: 'row'}}>
//           <IconButton icon="video-outline" color="white" size={30} />
//           <IconButton icon="square-edit-outline" color="white" size={30} />
//         </View>
//       </View>
//       <View style={styles.topNav}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             borderBottomColor: '#202020',
//             borderBottomWidth: 1,
//             height: '100%',
//             paddingBottom: 0,
//           }}>
//           <TouchableOpacity
//             style={[
//               chat
//                 ? {
//                     borderBottomColor: 'white',
//                     borderBottomWidth: 1,
//                     width: '50%',
//                     alignItems: 'center',
//                   }
//                 : {width: '50%', alignItems: 'center'},
//             ]}
//             onPress={() => (setChat(true), setCalls(false))}>
//             <Text
//               style={{
//                 color: '#fff',
//                 fontSize: 17,
//                 position: 'absolute',
//                 bottom: 10,
//               }}>
//               Chats
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               calls
//                 ? {
//                     borderBottomColor: 'white',
//                     borderBottomWidth: 1,
//                     width: '50%',
//                     alignItems: 'center',
//                     // borderColor: 'yellow',
//                     // borderWidth: 1,
//                     // justifyContent: 'flex-end',
//                   }
//                 : {width: '50%', alignItems: 'center'},
//             ]}
//             onPress={() => (setChat(false), setCalls(true))}>
//             <Text
//               style={{
//                 color: 'white',
//                 fontSize: 17,
//                 position: 'absolute',
//                 bottom: 10,
//               }}>
//               Calls
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View>
//         <Chats />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainScreen: {
//     backgroundColor: 'black',
//     // borderColor: 'yellow',
//     // borderWidth: 1,
//     height: (height * 90) / 100,
//     width: '100%',
//     // zIndex: 3,
//   },
//   messageHead: {
//     // borderColor: 'yellow',
//     // borderWidth: 1,
//     height: (height * 6) / 100,
//     width: width,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   topNav: {
//     // borderColor: 'yellow',
//     // borderWidth: 1,
//     // height: '93%',
//     height: (height * 6) / 100,
//   },
// });

// export default MessageScreen;
