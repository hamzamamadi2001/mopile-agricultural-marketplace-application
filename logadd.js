import React, { useEffect, useState } from 'react'
import {Alert,Modal,Pressable, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity,Image, View ,ScrollView} from 'react-native'
import Product from"./Add-product";
import Login from './login';
const add = ({ login,navigation }) => {

console.log(login);
useEffect(()=>{

},[login])
const handelSubmit=()=>{

}

if(login)  return (

<Product></Product>

  )
  else
  return (

  <Login></Login>

    )

}

export default add
