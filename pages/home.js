import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity ,Pressable,ScrollView,Image,TextInput, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Product from "./products"

import ImageSlider from 'react-native-image-slider';



const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "بذلة",
    sora : require('./vege1.jpg'),
    price:"10دج"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "مشينة ",
    sora : require('./vege2.jpg'),    price:"10"


  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: " روبو اصفر",
    sora : require('./vege3.jpg'),    price:"10دج"


  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
    title: " روبو اخظر",
    sora : require('./vege4.jpg'),    price:"10دج"


  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "كسارين تركية",
    sora : require('./vege5.jpg'),    price:"10دج"


  }
  ,
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f649",
    title: "كسارين حمراء",
    sora : require('./vege6.jpg'),    price:"10دج"


  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6a5",
    title: " كسارين",
    sora : require('./vege7.jpg'),    price:"10دج"


  }
  ,

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6s5",
    title: " ملاعق",
    sora : require('./vege8.jpg'),    price:"10دج"


  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65d",
    title: " ادوات منزل",

    sora : require('./vege1.jpg'),    price:"10دج"


  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "كسارين تركية",
    sora : require('./vege5.jpg'),    price:"10دج"


  }
  ,
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f649",
    title: "كسارين حمراء",
    sora : require('./vege6.jpg'),    price:"10دج"


  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6a5",
    title: " كسارين",
    sora : require('./vege7.jpg'),    price:"10دج"


  }
  ,

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6s5",
    title: " ملاعق",
    sora : require('./vege8.jpg'),    price:"10دج"


  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65d",
    title: " ادوات منزل",

    sora : require('./vege1.jpg'),    price:"10دج"


  }
];


const DATA2 = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "ملابس اطفال",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "ملابس رجال",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "ادوات منزلية",
  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
    title: "ادوات مطبخ",
  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "هواتف ذكية",
  }
  ,
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f649",
    title: "اجهزة حاسوب",
  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6a5",
    title: "ادوات مدرسية",
  }
  ,

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6s5",
    title: "ادوات تجميل",
  },

  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65d",
    title: "ماكولات",
  }
];
const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Image
        style={{width:"100%",height:"100%"}}
        source={item.sora}
      />
      <View style={{flex:0.1,alignItems:"center"}} >
        <Text style={{fontSize:25,fontWeight:"bold"}}> {item.title} </Text>
      </View>
      <View style={{flex:0.1,alignContent:"center",alignItems:"center"}} >
        <Text>{item.price}</Text>
      </View>
  </TouchableOpacity>
);


const App = ({ navigation }) => {

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("Details")}
      />
    );
  };


  const images = [


        require('./vege6.jpg')
     ,
  require('./vege5.jpg'),
  require('./vege4.jpg'),
      require('./vege3.jpg'),require('./vege2.jpg'),require('./vege1.jpg'),require('./vege6.jpg'),require('./vege8.jpg'),

  ];

  return (
    <SafeAreaView style={styles.container}>
<View style={styles.searchSection}>
    <TextInput
        style={styles.input}
        placeholder="ابحث عن اسم المنتوج او الشركة المصنعة له"
        underlineColorAndroid="transparent"
        textAlign="right"
    />
<Ionicons style={styles.searchIcon} name="ios-search" size={30} color="#48ff00"/>
</View>



 <ScrollView style={{width:"100%",height:"100%"}}>
<View style={{width:"100%",alignContent:"flex-start",height:"auto",backgroundColor:"white"}}>

  <View style={{width:"100%",height:"auto"}}>
    <ImageSlider style={{width:"100%",height:300}}
loop
onPress={()=>{navigation.navigate("Details")}}
        loopBothSides={true}
        autoPlayWithInterval={1000}
        images={images}
      />
      </View>
      <View style={{width:"100%",height:"100%",flexDirection:"row",flexWrap:"wrap",marginTop:"10%"}}>
      <Product navigation={navigation}/>





        </View>
</View>
</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",height:"100%",
  },
  searchSection: {
    height:"6%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex:1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    height:50
},
  item: {width:"100%",
    height:"100%",
    padding: 0,


  }





});


export default App;
