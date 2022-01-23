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
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'react-native-axios';
import {
  IconButton,
  Colors,
  List,
  Avatar,
  Badge,
  Divider,
} from 'react-native-paper';
import PostGrid from './PostGrid';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const LoginPage = props => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [UserName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  const [userVerifyPassword, setUserVerifyPassword] = useState('');
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

  const [isLogin, setIsLogin] = useState(false);
  const [loginComp, setLogin] = useState(true);
  const [signInComp, setSignInComp] = useState(false);

  const login = async () => {
    // console.log('login', userEmail);
    const result = await axios.post('http://localhost:3002/login/', {
      email: userEmail,
      password: userPassword,
    });
    // const result = await axios.get('http://localhost:3002/users/');
    if (result.data.message === 'Login sucess!') {
      props.callbackFunction({
        userEmail: userEmail,
        userName: UserName,
        userId: result.data.userId,
        state: true,
      });
      setUserId(result.data.userId);
    }
    // props.callbackFunction(isLogin);
    // console.log(result);
  };
  const register = async () => {
    if (
      userEmail &&
      userPassword &&
      UserName &&
      userPassword === userVerifyPassword
    ) {
      const result = await axios.post('http://localhost:3002/reg/', {
        email: userEmail,
        password: userPassword,
        username: UserName,
      });
      result.data.state && setLogin(true);
    }
  };
  const clearValues = () => {
    setUserEmail('');
    setUserName('');
    setUserPassword('');
    setUserVerifyPassword('');
    setHidePass1(true);
  };

  return (
    <View style={styles.body}>
      <KeyboardAvoidingView behavior="padding">
        <View
          style={[
            styles.formBody,
            loginComp
              ? {height: (height * 55) / 100}
              : {height: (height * 65) / 100},
          ]}>
          {loginComp ? (
            <>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 40,
                    display: 'flex',
                    color: 'white',
                    textAlignVertical: 'center',
                    marginLeft: 15,
                  }}>
                  Insta
                </Text>

                <Text
                  style={{
                    marginLeft: 3,
                    fontSize: 40,
                    height: 45,
                    // lineHeight: 50,
                    marginTop: 7,
                    // padding: 15,
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 10,
                    backgroundColor: '#f56729',
                    textAlignVertical: 'center',
                    // display: "flex",
                    color: 'white',
                    // padding: 20,
                  }}>
                  Hub
                </Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{width: '100%'}}
                  placeholder="Email"
                  keyboardType={'email-address'}
                  value={userEmail}
                  onChangeText={text => setUserEmail(text)}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{width: '85%'}}
                  placeholder="Password"
                  secureTextEntry={hidePass1}
                  value={userPassword}
                  onChangeText={text => setUserPassword(text)}
                />
                <IconButton
                  icon="eye-outline"
                  color="#fff"
                  onPress={() => setHidePass1(!hidePass1)}
                />
              </View>
              <View style={{width: '100%', alignItems: 'flex-end', right: 10}}>
                <Text style={{color: '#609BEB'}}>Forget password?</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: '94%',
                  backgroundColor: '#0088F8',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}
                onPress={login}>
                <Text style={{fontSize: 20, color: '#fff'}}>Log In</Text>
              </TouchableOpacity>
              <Divider
                style={{
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  width: '100%',
                }}
              />
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff'}}>Don't have an account ?</Text>
                <TouchableOpacity
                  onPress={() => {
                    setLogin(false);
                    clearValues();
                  }}>
                  <Text style={{color: '#609BEB'}}>Sign Up.</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 40,
                    display: 'flex',
                    color: 'white',
                    textAlignVertical: 'center',
                    marginLeft: 15,
                  }}>
                  Insta
                </Text>

                <Text
                  style={{
                    marginLeft: 3,
                    fontSize: 40,
                    height: 45,
                    // lineHeight: 50,
                    marginTop: 7,
                    // padding: 15,
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 10,
                    backgroundColor: '#f56729',
                    textAlignVertical: 'center',
                    // display: "flex",
                    color: 'white',
                    // padding: 20,
                  }}>
                  Hub
                </Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{width: '100%'}}
                  placeholder="Email"
                  value={userEmail}
                  keyboardType={'email-address'}
                  onChangeText={text => setUserEmail(text)}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{width: '100%'}}
                  placeholder="UserName"
                  value={UserName}
                  onChangeText={text => setUserName(text)}
                />
              </View>

              <View
                style={[
                  styles.textInput,
                  userPassword === userVerifyPassword
                    ? ''
                    : {borderColor: 'red'},
                ]}>
                <TextInput
                  style={{width: '85%'}}
                  placeholder="Password"
                  secureTextEntry={hidePass1}
                  value={userPassword}
                  onChangeText={text => setUserPassword(text)}
                />
                <IconButton
                  icon="eye-outline"
                  color="#fff"
                  onPress={() => setHidePass1(!hidePass1)}
                />
              </View>
              {userPassword ? (
                <View
                  style={[
                    styles.textInput,
                    userPassword === userVerifyPassword
                      ? ''
                      : {borderColor: 'red'},
                  ]}>
                  <TextInput
                    style={{width: '85%'}}
                    placeholder="Verify Password"
                    secureTextEntry={hidePass2}
                    value={userVerifyPassword}
                    onChangeText={text => setUserVerifyPassword(text)}
                  />
                  <IconButton
                    icon="eye-outline"
                    color="#fff"
                    onPress={() => setHidePass2(!hidePass2)}
                  />
                </View>
              ) : null}

              {/* <View style={{width: '100%', alignItems: 'flex-end', right: 10}}>
              <Text style={{color: '#609BEB'}}>Forget password?</Text>
            </View> */}
              <TouchableOpacity
                style={{
                  width: '94%',
                  backgroundColor: '#0088F8',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}
                onPress={register}>
                <Text style={{fontSize: 20, color: '#fff'}}>Sign In</Text>
              </TouchableOpacity>
              <Divider
                style={{
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  width: '100%',
                }}
              />
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff'}}>Already have an Account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    setLogin(true);
                    clearValues();
                  }}>
                  <Text style={{color: '#609BEB'}}>Log In.</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: height,
    width: width,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  formBody: {
    width: (width * 90) / 100,
    alignItems: 'center',
    // borderColor: 'yellow',
    // borderWidth: 1,
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flexDirection: 'row',
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 0.7,
    // marginBottom: 25,
    width: (width * 85) / 100,
    borderRadius: 7,
    paddingLeft: 10,
  },
});

export default LoginPage;
