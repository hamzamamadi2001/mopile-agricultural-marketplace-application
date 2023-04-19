import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from "./chatscreen";
import ListOfRequests from './listofrequests';
import Home from './home';
import Details from './details';
import Product from"./Add-product";
import Contacts from "./Contacts";
import Login from './login';
import Register from './register';
import Map from './map';
import Hello from './ImageBrowserScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';

fetch('http://10.42.0.1:3000/').then((response) => response.json()).then((json) => {
    console.log(json);
}).catch((error) => {
    console.error(error);
});
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen name="الرئيسية"   component={Home}
         options={{ headerTitle:"المتجر الفلاحي",headerRight:(props) => <LogoTitle {...props} />

          ,headerShown:true,
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {

          fontWeight: 'bold',
        }, }}  />
      <HomeStack.Screen  name="Details" component={Details} />
      <HomeStack.Screen  name="chat" options={{headerShown:true}} component={Chat} />

        
     

    </HomeStack.Navigator>
  );
}
const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>


      <SettingsStack.Screen name="Settings" component={Contacts} />
      <SettingsStack.Screen name="chatscreen" component={Chat} />

      </SettingsStack.Navigator>
  );
}
const CreateProduct = createNativeStackNavigator();
function CreateProductScreen() {

  return (

    <CreateProduct.Navigator >

        

      <CreateProduct.Screen   name="اضافة منتوج" component={Product}/>
      
  



  </CreateProduct.Navigator>
  );
}
const CreateLogin = createNativeStackNavigator();
function CreateLoginScreen() {

  return (

    <CreateLogin.Navigator >



    
{Login&&<CreateLogin.Screen  name="2دخول"options={{headerShown:false}}  component={Login} />} 
   <CreateLogin.Screen   name="اضافة منتوج" component={Product}/>
    <CreateLogin.Screen  name="الصور"  component={Hello} />
    
    


  </CreateLogin.Navigator>
  );
}
const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <View style={{justifyContent:"flex-start",flexDirection:"row"}}>

    <Image
      style={{ width: 50, height: 50 }}
      source={require('./logo2.png')}
    /></View>
  );
}
export default function App({login}) {
  console.log(login);

  return (
<SafeAreaView style={{flex:1}} >
<NavigationContainer>
<Tab.Navigator backBehavior={"history"}  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;

            if (route.name === 'رئيسية') {
              iconName = focused
                ? require("./home.png")
                : require('./home1outline.png')
            }
            else if (route.name === 'الطلبات') {
              iconName = focused ?require('./bag.png')  :require('./bag1outline.png') ;
            }
            else if (route.name === 'جهات اتصال') {
              iconName = focused ?require('./contact.png')  :require('./contact1outilne.png') ;
            }else if (route.name === 'اضافة منتوج'|| route.name==="دخول") {
              iconName = focused ?require('./per.png')  :require('./peroutline.png') ;
            }




            return   <Image

                style={{ width:"35%", height: "100%",tintColor: color}}
              source={iconName}
              />
          },
          rActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}    initialRouteName="Home">
              <Tab.Screen  name="رئيسية"options={{headerShown:false}}  component={HomeStackScreen} />
               <Tab.Screen  name="دخول"options={{headerShown:false}}  component={CreateLoginScreen} />
               <Tab.Screen   name="الطلبات" component={ListOfRequests} />
               <Tab.Screen options={{headerShown:false}} name="جهات اتصال"  component={SettingsStackScreen} />

</Tab.Navigator>
</NavigationContainer  >
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
