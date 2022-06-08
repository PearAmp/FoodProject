import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../assets/colors/colors';



export default function Details( {route, navigation} ) {

  const { item } = route.params;
  console.log(item);

  return (
    <View style={styles.container}>
     
     {/* Header */}
     <SafeAreaView>
       <View style={styles.headerwrap}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
       <View style={styles.headerLeft}>
       <Feather name='chevron-left' size={12} />
       </View>
       </TouchableOpacity>

       <View style={styles.headerRight}>
       <Feather name='star' size={12} color={colors.white} />
       </View>
       </View>
     </SafeAreaView>

     {/* Titles */}
     <View style={styles.titlewrap}>
     <Text style={styles.titleText}>{item.title}</Text>

     </View>

     {/* price */}
     <View style={styles.pricewrap}>
     <Text style={styles.priceText}>${item.price}</Text>
     </View>

     {/* pizza Info */}
     <View style={styles.infowrap}>
     <View style={styles.infoLeft}>
        <View style={styles.infoitem}>
        <Text style={styles.infoTitle}>Size</Text>
        <Text style={styles.infoText}>{item.sizeName} {item.sizeNumber}</Text>

        </View>
        <View style={styles.infoitem}>
        <Text style={styles.infoTitle}>Size</Text>
        <Text style={styles.infoText}>{item.sizeName} {item.sizeNumber}</Text>

        </View>
        <View style={styles.infoitem}>
        <Text style={styles.infoTitle}>Size</Text>
        <Text style={styles.infoText}>{item.sizeName} {item.sizeNumber}</Text>

        </View>
     </View>


     <View style={styles.infoRight}>
        
     </View>
     

     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerwrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,

  },
  titlewrap: {
    paddingHorizontal: 20,
    marginTop: 30,

  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    width: '50%',
  },
  pricewrap: {
    marginTop: 20,
    paddingHorizontal: 20,

  },
  priceText: {
    color: colors.price,
    fontSize: 32,
    fontWeight: 'bold',
  },


});
