import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import { Icon as RNEIcon } from 'react-native-elements';



function Product({ product }) {
  return (
    <View
      style={{
        marginRight:5,
        direction:"rtl",
        backgroundColor: '#fff',
        marginTop: 10,
        borderBottomColor: '#dfe4ea',
        borderBottomWidth: 1,
        paddingVertical: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        {/* Product Image View */}
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'center' }}
            source={product.img}
          />
        </View>
        {/* Product Details View */}
        <View style={{ flex: 3 }}>
          {/* -- Ratings View */}
          <View>
            <Text >{product.name}</Text>

          </View>
          {/* -- Price View */}
          <View style={{ marginTop: 4 }}>
            <Text style={{ fontSize: 16 }}>
              {`${product.price}دج  `}
              <Text
                style={{
                  color: '#57606f',
                  textDecorationLine: 'line-through',
                }}
              >
                {product.actualPrice !== '' ? `${product.actualPrice}دج` : null}
              </Text>
              <Text style={{ color: 'green' }}>{`  ${product.discount}`}</Text>
            </Text>
          </View>
        </View>

      </View>
      {/* Offer View */}
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <RNEIcon name='tag' type='font-awesome' size={16} />
        <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 16, }}>
          {product.offer}
        </Text>
      </View>
      {/* Specifications Wrap */}
      <View
        style={{
          marginTop: 4,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff200',
                  alignItems: 'center',
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 4,
                  marginTop: 4,
                }}
              >
                <Text
                  style={{
                    color: '#111',
                    marginRight: 8,

                    fontSize: 16,
                  }}
                >
                  {product.rating}
                </Text>
                <RNEIcon
                  name='star'
                  type='font-awesome'
                  size={12}
                  color={'#111'}
                />
              </View>
              <Text style={{ marginLeft: 6, }}>
                ({product.ratingCount})
              </Text>
            </View>
        {product.specifications.map((spec) => (
          <Text
            style={{
              marginTop: 4,
              marginBottom: 4,
              marginLeft: 4,
              marginRight: 4,
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#f2f2f2',
              alignSelf: 'baseline',
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 4,
            }}
          >
            {spec}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default function ProductListScreen1({ navigation }) {


  const [products] = useState([


    {
      name:
      'خظر و فواكه ',
    img: require("./vege1.jpg"),
    rating: '4.5',
    ratingCount: '214',
    price: '41,990',
    actualPrice: '44,908',
    discount: '6% تخفيظ',
    offer: 'مجموعة خظروات صحراوية من منطقة واد سوف جاهزة للبيع باسعار مغرية و نوعية رفيعة',
    specifications: [
      'الوادي',
      'سوق الجملة',
      'فواكه',
      'خظر',
    ],
    },
    {
      name:
        'خظر و فواكه في الوادي',
      img: require("./vege8.jpg"),
      rating: '4.5',
      ratingCount: '214',
      price: '41,990',
      actualPrice: '44,908',
      discount: '6% تخفيظ',
      offer: 'مجموعة خظروات صحراوية من منطقة واد سوف جاهزة للبيع باسعار مغرية و نوعية رفيعة',
      specifications: [
        'الوادي',
        'سوق الجملة',
        'فواكه',
        'خظر',
      ],
    },
    {
      name:
      'خظر و فواكه',
    img: require("./vege7.jpg"),
    rating: '4.5',
    ratingCount: '214',
    price: '41,990',
    actualPrice: '44,908',
    discount: '6% تخفيظ',
    offer: 'مجموعة خظروات صحراوية من منطقة واد سوف جاهزة للبيع باسعار مغرية و نوعية رفيعة',
    specifications: [
      'الوادي',
      'سوق الجملة',
      'فواكه',
      'خظر',
    ],
    },
    {
      name:
        'خظر و فواكه في الوادي',
      img: require("./vege6.jpg"),
      rating: '4.5',
      ratingCount: '214',
      price: '41,990',
      actualPrice: '44,908',
      discount: '6% تخفيظ',
      offer: 'مجموعة خظروات صحراوية من منطقة واد سوف جاهزة للبيع باسعار مغرية و نوعية رفيعة',
      specifications: [
        'الوادي',
        'سوق الجملة',
        'فواكه',
        'خظر',
      ],
    },
    {
      name:
      'خظر و فواكه',
    img: require("./vege5.jpg"),
    rating: '4.5',
    ratingCount: '214',
    price: '41,990',
    actualPrice: '44,908',
    discount: '6% تخفيظ',
    offer: 'مجموعة خظروات صحراوية من منطقة واد سوف جاهزة للبيع باسعار مغرية و نوعية رفيعة',
    specifications: [
      'الوادي',
      'سوق الجملة',
      'فواكه',
      'خظر',
    ],
    }
  ]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);



  return (
    <>
      <View style={styles.arrangeProductsBar}>
        <TouchableOpacity
          style={[
            styles.arrangeProductsBarItemOpacity,
            { borderRightColor: '#dfe4ea', borderRightWidth: 1 },
          ]}
        >
          <RNEIcon name='sort-amount-down' type='font-awesome-5' size={20} />
          <Text style={styles.arrangeProductsBarItemLabel}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrangeProductsBarItemOpacity}>
          <View>
            <RNEIcon name='filter' type='font-awesome-5' size={20} />
            <View style={styles.iconCountView}>
              <Text style={styles.iconCountText}>2</Text>
            </View>
          </View>
          <Text style={styles.arrangeProductsBarItemLabel}>Filter</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {Array(5)
          .fill(1)
          .map((el) =>
            products.map((product) => (
              <TouchableOpacity onPress={()=>{navigation.navigate("Details")}}>
                <Product product={product} />
              </TouchableOpacity>
            ))
          )}
      </ScrollView>
      <View style={{ height: 20 }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  arrangeProductsBar: {
    flexDirection: 'row',
    paddingVertical: 14,
    backgroundColor: '#fafafa',
    borderBottomColor: '#dfe4ea',
    borderBottomWidth: 1,
  },
  arrangeProductsBarItemOpacity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrangeProductsBarItemLabel: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  iconCountView: {
    position: 'absolute',
    zIndex: 2,
    right: -4,
    top: -4,
    paddingHorizontal: 4,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  iconCountText: { color: '#fff', fontWeight: 'bold',  },
});
