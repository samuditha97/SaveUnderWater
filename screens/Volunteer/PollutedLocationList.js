import React, { useState, useEffect } from "react";
import moment from "moment/moment";
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
import NewPollutedLocation from "./NewPollutedLocaiton";

const PollutedLocationList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const location = [
    {
      locationName:
        "Hikkaduwa",
      locationAddress: "Hikkaduwa",
      image: require("../../assets/locations/location_1.jpg"),
      checkedDate: "2022-11-12T03:41:12Z",
    },
    {
      locationName:
        "Kaluthara",
      locationAddress: "Kaluthara",
      image: require("../../assets/locations/location_2.jpg"),
      checkedDate: "2022-11-15T04:15:12Z",
    },
    {
      locationName:
        "Marbel Beach",
      locationAddress: "Trinco",
      image: require("../../assets/locations/location_3.jpg"),
      checkedDate: "2022-02-12T03:22:12Z",
    },
  ];

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <View style={styles.cover}>
        <ImageBackground source={require("../../assets/pollutedLocationList.jpg")}>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Text style={styles.topic}>Polluted Location List</Text>
        </ImageBackground>
        <TouchableHighlight style={styles.buttonNewLocation} onPress={() => navigation.navigate("NewPollutedLocation")}>
          <Text style={styles.buttonText}>Add New Polluted Location</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.container2}>
        <ScrollView>
          {location.map((location, key) => (
            <View style={styles.container}>
              <Card style={styles.innerContainer}>
                <Text style={styles.paragraph}>{location.locationName}</Text>
                <View style={styles.articleBottom}>
                  <Image style={styles.userImage} source={location.image} />
                </View>
                <Text style={styles.paragraph2}>Location Address - {location.locationAddress}</Text>
                <Text style={styles.paragraph2}>Added Date - {moment(location.checkedDate).calendar()}</Text>
                <TouchableHighlight style={styles.buttonVote}>
                  <Text style={styles.buttonText}>Vote to clean</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                  <Text style={styles.buttonText}>View</Text>
                </TouchableHighlight>
              </Card>
            </View>
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PollutedLocationList;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#ecf0f1",
  },
  articleBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 60,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 2,
  },
  username: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.4)",
    marginHorizontal: 10,
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
    marginTop: 60
  },
  innerContainer: {
    height: 300,
  },
  buttonVote: {
    backgroundColor: "#2B65EC",
    paddingHorizontal: 5,
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 9,
    width: 300,
    marginLeft: 20,
  },
  buttonNewLocation: {
    backgroundColor: "#42a1f5",
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontSize: 25,
    borderRadius: 8,
    marginTop: 15,
    width: 350,
    marginLeft: 30,
  },
  button: {
    backgroundColor: "#2B65EC",
    paddingHorizontal: 5,
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 5,
    width: 300,
    marginLeft: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  topic: {
    marginLeft: 40,
    marginTop: 50,
    fontFamily: "sans-serif",
    fontSize: 30,
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
    marginTop: 10
  },
  body: {
    height: "110%",
    display: "flex",
  },
});
