import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

import ImageSlider from 'react-native-image-slider';


import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';
<AirbnbRating />


const Raating = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
     <Rating
  type='star'
  ratingColor='blue'
  ratingBackgroundColor='blue'
  ratingCount={5}
  fullStarColor={'red'}
  imageSize={30}
  onFinishRating={(rating) => setRating(rating)}

/>
    </View>
  );
};

export default function ProductScreen1({ navigation }) {


  const [isFavourite, setFavourite] = useState(false);

const images = [
  require('./vege7.jpg'),
  require('./vege1.jpg'),
  require('./vege6.jpg'),
  require('./vege5.jpg'),
  require('./vege4.jpg'),
  require('./vege3.jpg'),
  require('./vege2.jpg'),
  require('./vege8.jpg'),
];

  const [productDescription] = useState(
    `هنا نضع وصف للمنتوج مع مكان تواجده مع بعض المعلومات الاخرى لمزيد من التفاصيل
    هنا نضع وصف للمنتوج مع مكان تواجده مع بعض المعلومات الاخرى لمزيد من التفاصيل
    هنا نضع وصف للمنتوج مع مكان تواجده مع بعض المعلومات الاخرى لمزيد من التفاصيل`


  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);

  const [moreProducts] = useState([
    {
      productName: 'الت',
      productPrice: 19.49,
      productImage: require('./vege1.jpg'),

    },
    {
      productName: 'Black Printed Top (Women)',
      productPrice: 19.49,
      productImage:
      require('./vege2.jpg'),    },
    {
      productName: 'White Solid Tshirt',
      productPrice: 34.99,
      productImage:
      require('./vege3.jpg'),    },
    {
      productName: 'Black Solid Tshirt',
      productPrice: 34.99,
      productImage:
      require('./vege4.jpg'),    },
    {
      productName: 'Red Top (Women)',
      productPrice: 44.85,
      productImage:
      require('./vege5.jpg'),    },
  ]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }, []);



  return (
    <View style={{ flex: 1 }}>



      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <ImageSlider style={{width:"100%",height:300}}

        images={images}
      />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.productTitleView}>
            <Text style={styles.productTitle}>خظروات الوادي الصيفية</Text>
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
              <FAIcon name={isFavourite ? 'heart' : 'heart-o'} size={22} />
            </TouchableOpacity>
          </View>
          <View style={styles.productPriceView}>
            <Text style={styles.discountedPriceText}>$29.99</Text>
            <Text style={styles.actualPriceText}>$40.00</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Raating rating={4} maxRating={5} />
          </View>
          <View style={{ marginTop: 20 }}>


          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
          <TouchableOpacity style={styles.buyNowButton} onPress={() => navigation.navigate("الدخول")}>
            <Text style={styles.buttonText}>شراء الان</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}  onPress={() => navigation.navigate("الدخول")}>
            <Text style={[styles.buttonText, { color: '#111' }]}>
              اتصال
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
          <TouchableOpacity
            style={styles.productDescriptionHeader}
            onPress={() => setSeeFullDescription((prev) => !prev)}
          >
            <Text style={{  fontSize: 18 }}>
              وصف المنتوج
            </Text>
            <TouchableOpacity
              onPress={() => setSeeFullDescription((prev) => !prev)}
            >
              {seeFullDescription ? (
                <Icon name='chevron-up' size={26} />
              ) : (
                <Icon name='chevron-down' size={26} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <Text >
              {seeFullDescription
                ? `${productDescription}`
                : `${productDescription.split('\n')[0]}`}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 10,
            }}
          >
المزيد من المنتوجات          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
              {moreProducts.map((item) => (
                <TouchableOpacity >
                <View style={{ width: 180, marginHorizontal: 10 }}>
                  <View style={styles.moreProductImageView}>
                    <Image
                      style={{ width:"100%",height:"100%" }}
                      source={
                        item.productImage
                      }
                    />
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <Text numberOfLines={1} style={styles.moreProductName}>
                      {item.productName}
                    </Text>
                    <View style={styles.moreProductPriceView}>
                      <Text style={styles.moreProductPrice}>
                        ${item.productPrice}
                      </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Icon
                          style={styles.moreProductIcon}
                          name='heart'
                          size={18}
                        />
                        <Icon
                          style={styles.moreProductIcon}
                          name='shopping-bag'
                          size={18}
                        />
                        <Icon
                          style={styles.moreProductIcon}
                          name='share'
                          size={18}
                        />
                      </View>
                    </View>
                  </View>



                </View></TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 40 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop:17,

    height: 50,
    backgroundColor: '#fff',

    paddingHorizontal: 10,
    borderBottomColor: '#dfe4fe',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  productTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,

  },
  productPriceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPriceText: {  fontSize: 20 },
  actualPriceText: {
    color: '#222',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 18,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    color: '#333',
  },
  tagSelected: {
    backgroundColor: '#333',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    color: '#FFF',
  },
  productDescriptionHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4fe',
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
  },
  moreProductName: {
    fontSize: 16,

  },
  moreProductPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: '#111',
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreProductBuyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
