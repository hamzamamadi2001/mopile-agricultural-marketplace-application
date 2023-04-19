import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';

import Axios from 'axios';
import AlphabetFlatList from '@yoonzm/react-native-alphabet-flat-list';
import { Feather as Icon } from '@expo/vector-icons';



export default function AlphabetScrollScreen({ navigation }) {
  StatusBar.setBarStyle('dark-content');

  


function UserCard({ item }) {
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("Details",{userID:"id"})}>

    <View
      style={{
        margin: 4,
        backgroundColor: '#fff',
        marginRight: 40,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
      }}
    >
      <View>
        <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={{ uri: item.picture.thumbnail }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text
          style={{ fontSize: 16 }}
        >{`${item.name.first} ${item.name.last}`}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>



          <Text>waiting</Text>


      </View>
    </View>
    </TouchableOpacity>
  );
}




  const [users, setUsers] = useState(null);

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=50').then(({ data }) => {
      const alphabeticUsers = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        l: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: [],
      };
      data.results.map((user) => {
        let fchar = user.name.first[0];
        if (fchar in alphabeticUsers) {
          alphabeticUsers[fchar] = [...alphabeticUsers[fchar], user];
        }
      });
      setUsers(alphabeticUsers);
    });
  }, []);

  if (users === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <AlphabetFlatList data={users} itemHeight={60} renderItem={UserCard} />
    </View>
  );
}
