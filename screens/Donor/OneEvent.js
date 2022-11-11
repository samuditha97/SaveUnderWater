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

const OneEvent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <KeyboardAvoidingView
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
          <Text style={styles.topic}>Event List</Text>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
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
    height: 170,
  },
  button: {
    backgroundColor: "#2B65EC",
    paddingHorizontal: 5,
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 8,
    marginTop: -5,
    width: 60,
    marginLeft: 240,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  topic: {
    marginLeft: 250,
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
  },
  body: {
    height: "110%",
    display: "flex",
  },
});
