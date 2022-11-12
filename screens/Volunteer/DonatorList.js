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

const DonatorList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const donator = [
    {
      donatorName:
        "Chamara Kanakarathne",
      image: require("../../assets/donator/donator_1.jpg"),
      totalFund: "20000.00"
    },
    {
      donatorName:
        "Sumidu Malshan",
      image: require("../../assets/donator/donator_2.jpg"),
      totalFund: "20000.00"
    },
    {
      donatorName:
        "Fazna Jazim",
      image: require("../../assets/donator/donator_3.jpg"),
      totalFund: "20000.00"
    },
    {
      donatorName:
        "Kamal Rathnayake",
      image: require("../../assets/donator/donator_4.jpg"),
      totalFund: "20000.00"
    },
    {
      donatorName:
        "Isuru Herath",
      image: require("../../assets/donator/donator_5.jpg"),
      totalFund: "20000.00"
    },
  ];

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
          <Text style={styles.topic}>Donator List</Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        <ScrollView>
        {donator.map((donator, key) => (
            <View style={styles.container}>
              <Card style={styles.innerContainer}>
                <Text style={styles.paragraph}>{donator.donatorName}</Text>
                <View style={styles.articleBottom}>
                  <Image style={styles.userImage} source={donator.image} />
                </View>
                <Text style={styles.paragraph2}>Total Donation (Rs.) - {donator.totalFund}</Text>
                <TouchableHighlight style={styles.buttonVote}>
                  <Text style={styles.buttonText}>Add a vote to Donator</Text>
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

export default DonatorList;

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
    marginTop: 60
  },
  innerContainer: {
    height: 280,
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
  articleBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
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
