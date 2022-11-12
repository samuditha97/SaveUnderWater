import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
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

const EventList = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const event = [
    {
      eventName:
        "Clean Hikkadu",
      eventLocation: "Hikkaduwa",
      image: require("../../assets/locations/location_1.jpg"),
      eventDate: "2022-11-12T03:41:12Z",
      totalFund: "20000.00"
    },
    {
      eventName:
        "Save Life in Panadura",
      eventLocation: "Panadura",
      image: require("../../assets/locations/location_2.jpg"),
      eventDate: "2022-11-12T03:41:12Z",
      totalFund: "305900.00"
    },
    {
      eventName:
        "Underwater travel with cleanup",
      eventLocation: "Trinco",
      image: require("../../assets/locations/location_3.jpg"),
      eventDate: "2022-11-12T03:41:12Z",
      totalFund: "106002.00"
    },
    {
      eventName:
        "Clean Jaffna Beach",
      eventLocation: "Jaffna",
      image: require("../../assets/locations/location_1.jpg"),
      eventDate: "2022-11-12T03:41:12Z",
      totalFund: "505000.00"
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <View style={styles.cover}>
        <ImageBackground source={require("../../assets/voluntEventList.jpg")}>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Text style={styles.topic}>Event List</Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        <ScrollView>
        {event.map((event, key) => (
            <View style={styles.container}>
              <Card style={styles.innerContainer}>
                <Text style={styles.paragraph}>{event.eventName}</Text>
                <View style={styles.articleBottom}>
                  <Image style={styles.userImage} source={event.image} />
                </View>
                <Text style={styles.paragraph2}>Location - {event.eventLocation}</Text>
                <Text style={styles.paragraph2}>Added Date - {moment(event.eventDate).calendar()}</Text>
                <Text style={styles.paragraph2}>Total Fund (Rs.) - {event.totalFund}</Text>
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

export default EventList;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#ecf0f1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  cover: {
    flex: 1,
    height: "110%",
    maxHeight: "40%",
    resizeMode: "cover",
    width: "100%",
  },
  container2: {
    display: "flex",
    height: "80%",
    flexDirection: "column",
    padding: 20,
  },
  innerContainer: {
    height: 280,
  },
  button: {
    backgroundColor: "#2B65EC",
    paddingHorizontal: 5,
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 8,
    marginTop: -5,
    width: 300,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  topic: {
    marginLeft: 100,
    marginTop: 40,
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
});
