import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View,ScrollView,Image,Dimensions ,FlatList} from 'react-native';
let width= Dimensions.get("window").width
let heigth = width*0.6
const images = [
    "https://image.shutterstock.com/image-vector/happy-fathers-day-sale-banner-600w-1721666293.jpg",
    "https://image.shutterstock.com/image-vector/mobile-phone-represents-front-shop-600w-1789919669.jpg",
    require('./maksym-tymchyk-AxwKtUn27Go-unsplash.jpg'),
    
    
    
    
];

const App = () => {
    return(
        <View style={{width,heigth}}>
           <FlatList
      
      style={{zIndex:99}}
   
      horizontal={true}
        data={images }
        renderItem={(item)=>{return(
            <Image
            style={{width:width,height:heigth}}
            source={require('./maksym-tymchyk-AxwKtUn27Go-unsplash.jpg')}
          />
        )}}
    
       
      />

  
        </View>
)
 
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
});
