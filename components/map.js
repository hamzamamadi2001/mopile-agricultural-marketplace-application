import * as React from 'react';
import MapView ,{ Marker }from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,Image} from 'react-native';
let mapview;
const map = ()=>{
let reg1={
  latitude:33.44444,
  longitude: 6.800997,
}
let reg2={
  latitude:35.473289,
      longitude: 7.800997,

}
mapview.setMapBoundaries(reg1,reg2);

}

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      ref={(ref)=>mapview=ref}
      provider="google"
      initialRegion={{
      latitude:33.473289,
      longitude: 6.800997,
      latitudeDelta: 0.030,
      longitudeDelta: 0.060,
    }}
    mapType="satellite"
    loadingEnabled={true}
    loadingIndicatorColor={"red"}
    showsUserLocation={true}
    tintColor={"red"}
    onPress={(e)=>map()}

    style={styles.map} >

    <Marker
      coordinate={{latitude:33.44444,
      longitude: 6.800997}}
    >
   <Image source={require('./home.png')} style={{height: 35, width:35 }} />
   </Marker>


    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
