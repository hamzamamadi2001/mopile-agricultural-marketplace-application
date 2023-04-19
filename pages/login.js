
import React, { useEffect, useState } from 'react'
  import PhoneInput from "react-native-phone-number-input";
  import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    Keyboard,ActivityIndicator,
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';


  // You can use your custom background image
  import BackgroundImage from './background.jpg';

  // expo install expo-font


  // npm install react-native-elements
  import { Icon } from 'react-native-elements';

  // npm install react-native-animatable
  import * as Animatable from 'react-native-animatable';


  export default function LoginScreen4({ navigation }) {

    const [name, setName] = useState(null)
      const [pass, setPass] = useState(null)
        const [islogin, setLogin] = useState(false)

    const storeData = async (value,pass) => {

        await AsyncStorage.setItem('name',value)
          await AsyncStorage.setItem('password', pass)

    }

    const getData = async () => {

      const value = await AsyncStorage.multiGet(['name',"password"])
      if(value[0][1]!=null&&value[1][1]!=null) {
    setLogin(true)
      }


    }
    const removeFew = async () => {
    const keys = ["name", 'password']
    try {
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
      // remove error
    }


    }


    useEffect(() => {



    }, []);
    const handelSubmit=()=>{
storeData(name,pass)
navigation.navigate('اضافة منتوج', { screen: 'اضافة منتوج' })

    }
    if ( !BackgroundImage) {
      return <ActivityIndicator size="large" color="#00ff00" />;
    }

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Image
              style={{ height:"100%" , width: "100%", marginTop: 0 }}
              source={BackgroundImage}
            />
          </View>
          <Animatable.Text
            style={styles.titleText}
            animation='fadeInUp'
            delay={1200}
          >
            المتجر الفلاحي
          </Animatable.Text>
          <View style={styles.bottomView}>
            <Text style={styles.loginText}>{name}الدخول للمتجر{pass}</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.inputIcon}
                name='person'
                type='ionicons'
                color='#5352ed'
              />

              <TextInput
                style={styles.input}
                placeholder='اسم المستخدم'
                autoCapitalize='none'
                keyboardType='email-address'

                direction="ltr"
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.inputView}>
              <Icon
                style={styles.inputIcon}
                name='lock'
                type='ionicons'
                color='#5352ed'
              />
              <TextInput
                style={styles.input}
                placeholder='كلمة المرور'
                secureTextEntry={true}
                autoCapitalize='none'
                onChangeText={text => setPass(text)}
              />
            </View>
            <Text style={styles.fpText}>هل نسيت كلمة المرور</Text>
            <TouchableOpacity     onPress={() =>handelSubmit() }style={styles.loginButton}>
              <Text style={styles.loginButtonText}> الدخول للمتجر</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}>
              ليس لديك حساب؟
              <Text style={{ color: '#5352ed', }}>
                {' سجل الان'}
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleText: {
      position: 'absolute',
      top: Dimensions.get('screen').height * 0.1,
      alignSelf: 'center',
      color: '#fff',

      fontSize: 60,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    },
    bottomView: {
      backgroundColor: '#fff',
      opacity: 0.95,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 20,
    },
    loginText: {

      fontSize: 24,
      marginTop: 12,
      marginBottom: 4,
    },
    inputView: {
      height: 40,
      borderRadius: 10,
      backgroundColor: '#f1f3f6',
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputIcon: {
      paddingHorizontal: 8,
    },
    input: {
      height: 40,
      flex: 1,
      fontSize: 16,
      color: '#333',
      textAlign: 'right'
    },
    loginButton: {
      backgroundColor: '#5352ed',
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 10,
    },
    loginButtonText: {
      color: '#fff',
      alignSelf: 'center',
      fontSize: 18,
    },
    registerText: {
      alignSelf: 'center',
      marginTop: 12,
      fontSize: 16,
    },
    fpText: {
      marginTop: 10,
      alignSelf: 'flex-end',
      fontSize: 16,
      color: '#5352ed',
    },
  });
