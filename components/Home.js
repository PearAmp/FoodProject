import React from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import categoriesData from "../assets/data/categoriesData";
import colors from "../assets/colors/colors";
import popularData from "../assets/data/popularData";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { FlatList } from "react-native";

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default function Home({ navigation }) {
  const rendercategoriesItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoriesitem,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoriesimage} />
        <Text style={styles.catgtextitem}>{item.title}</Text>
        <View
          style={[
            styles.categoriesIcons,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categoriesFeather}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileimage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* title */}
        <View style={styles.title}>
          <Text style={styles.titletext1}>Food</Text>
          <Text style={styles.titletext2}>Delivery</Text>
        </View>

        {/* search */}
        <View style={styles.search}>
          <Feather name="search" size={16} />
          <View style={styles.searchtitle}>
            <Text style={styles.searchtext}>Search</Text>
          </View>
        </View>

        {/* categories */}
        <View style={styles.categories}>
          <Text style={styles.categoriestext}>Categories</Text>
          <View style={styles.categorieslist}>
            <FlatList
              data={categoriesData}
              renderItem={rendercategoriesItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularhead}>
          <Text style={styles.populartitle}>Popular0000</Text>
          {popularData.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Details', {
              item: item,
            })} >
              <View
                
                style={[
                  styles.popularcard,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}
              >
                <View>
                  <View>
                    <View style={styles.populartop}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.populartext}>top of the week</Text>
                    </View>
                    <View style={styles.populartitle2}>
                      <Text style={styles.populartitleItem}>{item.title}</Text>
                      <Text style={styles.popularweight}>
                        Weight {item.weight}{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularbottom}>
                    <View style={styles.addpizza}>
                      <Feather name="plus" size={10} />
                    </View>
                    <View style={styles.ratingwrap}>
                      <MaterialCommunityIcons name="star" size={10} />
                      <Text style={styles.ratingtext}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={styles.popularRigth}>
                    <Image source={item.image} style={styles.popularImge} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileimage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titletext1: {
    fontSize: 16,
  },
  titletext2: {
    fontWeight: "bold",
    fontSize: 32,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  searchtitle: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: "#8f9596",
    borderBottomWidth: 2,
  },
  searchtext: {
    fontSize: 14,
    marginBottom: 5,
    color: "#c7cfd1",
  },
  categories: {
    marginTop: 30,
  },
  categoriestext: {
    fontSize: 16,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  categorieslist: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoriesimage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoriesitem: {
    backgroundColor: "#F5CA4B",
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      weight: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  catgtextitem: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
    fontWeight: "500",
  },
  categoriesIcons: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categoriesFeather: {
    alignSelf: "center",
  },
  popularhead: {
    paddingHorizontal: 20,
  },
  populartitle: {
    fontSize: 16,
  },
  popularcard: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      weight: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  populartop: {
    flexDirection: "row",
    alignItems: "center",
  },
  populartext: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  populartitle2: {
    marginTop: 20,
  },
  populartitleItem: {
    fontSize: 14,
  },
  popularweight: {
    fontSize: 12,
    color: "#6b6961",
    marginTop: 5,
  },
  popularbottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  addpizza: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 24,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingwrap: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  ratingtext: {
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularRigth: {
    marginLeft: 40,
  },
  popularImge: {
    width: 185,
    height: 125,
    resizeMode: "contain",
  },
});
