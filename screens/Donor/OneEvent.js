import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Button,
} from "react-native";
import { Icon } from "react-native-elements";
import { Card, Searchbar } from "react-native-paper";
import moment from "moment/moment";

const OneEvent = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const menu = [
    {
      icon: require("../../assets/icons/events.png"),
    },
    {
      icon: require("../../assets/icons/home.png"),
    },
    {
      icon: require("../../assets/icons/home.png"),
    },
    {
      icon: require("../../assets/icons/events.png"),
    },
    {
      icon: require("../../assets/icons/home.png"),
    },
  ];

  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <View style={styles.cover}>
        <ImageBackground source={require("../../assets/donorEvent.jpg")}>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Text style={styles.topic}>Hikkaduwa Coral Reefs Project</Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.container}>
            <Card style={styles.innerContainer}>
              <ScrollView>
                <Text style={styles.paragraph}>Date: 26-10-2022</Text>
                <Text style={styles.paragraph}>Venue: Hikkaduwa Beach</Text>
                <Text style={styles.paragraph}>About</Text>
                <Text style={styles.paragraph2}>
                  The island of Sri Lanka is situated between the latitudes of
                  5º 54` and 9º 52 N longitudes 79º 39` and 81º 53 E, at the
                  southern point of Indian subcontinent. Sri Lanka`s surface
                  includes nearly 65,525 Sq. K.M of landmass. The island is
                  situated within the Tropical zone-hot wet and humid for most
                  parts of the year. It is characterized and greatly influenced
                  by periods of regular monsoonal rain. The coastline, which is
                  about 1585 km in length, supports highly productive marine
                  ecosystems such as fringing coral reefs and shallow beds of
                  coastal and estuarine seagrasses. Coral Reefs Coral reefs are
                  among the most biologically valuable ecosystems in the globe.
                  Coral reefs rank among the most biologically productive and
                  diverse of all-natural ecosystems. A single reef can be home
                  to 3,000 different species, while one third of the world`s
                  fish species depend on them. They calm the energy of the
                  waves, providing vital protection to shores. (Our Planet Vol.
                  10 No. 03 1999) Coral reefs are biological wonders, among the
                  largest and oldest living communities of plants and animals on
                  earth, having evolved between 200 and 450 million years ago.
                  Today, most established coral reefs are between 5,000 and
                  10,000 years old; many of them forming thin veneers over
                  older, much thicker reef structures. Most of the reef colony
                  is actually dead. Only the upper layer is covered by thin
                  changeable `skin` of living coral. The tiny, transparent
                  polyps of stony corals are the master builders of the sea,
                  erecting their architectural masterpieces upon their remains
                  of their predecessors. Polyps secrete calcium carbonate
                </Text>
                <Text style={styles.paragraph}>Bank Details</Text>
                <Text style={styles.paragraph2}>Account No: 1283932239288</Text>
                <Text style={styles.paragraph2}>Bank: BOC</Text>
                <Text style={styles.paragraph2}>Name: MarignSaver</Text>
                <Text style={styles.paragraph2}>Branch: Galle</Text>
                <Text style={styles.paragraph}>No Of Volunteers</Text>
                <Text style={styles.paragraph2}>250</Text>
                <Text style={styles.paragraph}>No Of Donors</Text>
                <Text style={styles.paragraph2}>100</Text>
              </ScrollView>
            </Card>
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate("Donation")}
          >
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button2}
            onPress={() => navigation.navigate("Progress")}
          >
            <Text style={styles.buttonText2}>Progress</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.innerBottomBar}>
          {menu.map((icon, key) => (
            <Image key={key} source={icon.icon} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default OneEvent;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  cover: {
    flex: 1,
    height: "100%",
    maxHeight: "20%",
    resizeMode: "cover",
    width: "100%",
  },
  container2: {
    display: "flex",
    height: "74%",
    flexDirection: "column",
    padding: 30,
  },
  innerContainer: {
    height: 470,
    borderColor: "#2B65EC",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#2B65EC",
    paddingHorizontal: 6,
    paddingVertical: 7,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 18,
    width: 110,
    height: 40,
    marginLeft: 230,
  },
  button2: {
    backgroundColor: "#fff",
    marginTop: -40,
    marginLeft: 10,
    borderColor: "#2B65EC",
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 7,
    fontSize: 16,
    borderRadius: 8,
    width: 110,
    height: 40,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  buttonText2: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  topic: {
    marginLeft: 48,
    marginTop: 100,
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#3BB9FF",
  },
  search: {
    width: 250,
    height: 40,
    marginLeft: 80,
    marginTop: 40,
    borderColor: "#3BB9FF",
    borderRadius: 20,
    opacity: 0.9,
  },
  paragraph2: {
    marginLeft: 40,
    fontSize: 15,
    padding: 3,
  },
  body: {
    height: "110%",
    display: "flex",
    position: "relative",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f1f3f9",
    width: "100%",
    height: 90,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopWidth: 1,
  },
  innerBottomBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});
