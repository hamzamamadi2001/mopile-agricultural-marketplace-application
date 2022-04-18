import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native';
import Nav from "./navigator"
import AsyncStorage from '@react-native-async-storage/async-storage';







export default function App() {
  const [name, setName] = useState(null)
    const [pass, setPass] = useState(null)
      const [islogin, setLogin] = useState(false)

  const storeData = async (value,pass) => {

      await AsyncStorage.setItem('name',value)
        await AsyncStorage.setItem('password', pass)

  }

const getData = async () => {

    const value = await AsyncStorage.multiGet(['name',"password"])
    if(value[0][1]!=null&&value[1][1]!=null)
    {
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

    getData()




  }, [islogin]);




  return (<Nav login={islogin} ></Nav>)

}
