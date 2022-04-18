import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {Alert,Modal,Pressable, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity,Image, View ,ScrollView} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ route,navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [correctname,setCorrectname]=useState(false)
  const [correctprice,setCorrectprice]=useState(false)
  const [correctdiscription,setCorrectdiscription]=useState(false)
const [modalVisible, setModalVisible] = useState(false);
  const [finish,setFinish]=useState(false)
  const [name, setName] = useState('')
  const [photos, setPhotos] = useState(null)
  const [price, setPrice] = useState('')
  const [discription, setDiscription] = useState('')

  const [value, setValue] = useState("");


  const handleSignUp = () => {

  }
const RenderImage = (item, i)=> {
    return (
      <Image
        style={{ height: "100%", width: "100%" }}
        source={{ uri: item.uri }}
        key={i}
      />
    )
  }
  const handelLogOut= async ()=>{

      const keys = ["name", 'password']
      try {
        await AsyncStorage.multiRemove(keys)
      } catch(e) {
        
      }

navigation.navigate('دخول', { screen:'2دخول'})
    }
var photo

    if(route.params==undefined)
    photo=null;
    else
      photo  = route.params.photos




useEffect(()=>{
  
  if(photo){
    setPhotos(route.params.photos)
    console.log(route);
  }
},[photo])
const handelSubmit=()=>{
if(name.length<3)
Alert.alert("length of name is soo small")
if(price<=0)
Alert.alert("its free !!")
navigation.setOptions({
  title: "الطلبات",
  headerLeft: () => null,
});

}

  return (

  <View Style={styles.container}>
        <ScrollView >


            <View style={styles.inputContainer}>

              <TextInput
                placeholder="اسم المنتوج"
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}


              />
            <View style={{flex: 1,flexWrap: 'nowrap',flexDirection: 'row'}}>
            


              <TextInput
                placeholder="السعر بالدينار الجزائري"
                value={price}
                onChangeText={text => setPrice(text)}
                style={styles.input2}
                keyboardType={"number-pad"}

              />
            </View>

              <TextInput
                  placeholder="وصف المنتوج"
                  value={discription}
                  onChangeText={text => setDiscription(text)}
                  style={styles.input}
                multiline={true}
                numberOfLines={3}

                />



            </View>
            <TouchableOpacity
              onPress={() => { navigation.navigate('الصور')}}


              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>اختيار صور</Text>
            </TouchableOpacity>



          <ScrollView contentContainerStyle={{flex: 1,flexWrap: 'wrap',flexDirection: 'row',justifyContent:'center',alignContent: 'center',marginTop: 5}}>


             {photos&&photos.map((item, i) =>
              <Image
              style={{ height: 100, width: 100 }}
              source={{ uri: item.uri }}
              key={i}
             />)}
           </ScrollView>






              <TouchableOpacity

                onPress={()=>{handelSubmit()}}
                style={[styles.button, styles.buttonOutline]}
              >
                <Text style={styles.buttonOutlineText}>نشر المنتوج</Text>
              </TouchableOpacity>
              <TouchableOpacity

                onPress={()=>{handelLogOut()}}
                style={[styles.button, styles.buttonOutline]}
              >
                <Text style={styles.buttonOutlineText}> Log Out</Text>
              </TouchableOpacity>


  </ScrollView>
</View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    marginLeft: "5%"
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,

  },
  input2: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,width: "70%"

  },
  input3: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,marginRight: "1%",
    marginTop: 5,width: "29%"

  },
  buttonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "20%"

  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: "20%"
  },
  buttonOutline: {
    backgroundColor: 'white',

    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },

})
