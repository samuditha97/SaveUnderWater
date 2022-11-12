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
import { useNavigation } from "@react-navigation/native";
import { BackgroundImage } from "@rneui/base";

const NewPollutedLocation = ({ props }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <View style={styles.cover}>
        <ImageBackground source={require("../../assets/NewPollutedLocation.png")}>
          <Text style={styles.topic}>New Polluted Location</Text>
        </ImageBackground>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Location Name"
            keyboardType="text"
            underlineColorAndroid="transparent"
          //value={locationName}
          //onChangeText={(locationName) => setLocationName(locationName)}
          />

          <TextInput
            style={styles.input}
            placeholder="Location Address"
            keyboardType="text"
            underlineColorAndroid="transparent"
          //value={locationAddress}
          //onChangeText={(locationAddress) => setLocationAddress(locationAddress)}
          />

          <TextInput
            style={styles.input}
            placeholder="Checkedd Date"
            keyboardType="text"
            underlineColorAndroid="transparent"
          //value={checkedDate}
          //onChangeText={(checkedDate) => setCheckedDate(checkedDate)}
          />

          <TextInput
            style={styles.input}
            placeholder="Description"
            keyboardType="text"
            underlineColorAndroid="transparent"
          //value={description}
          //onChangeText={(description) => setDescription(description)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            keyboardType="text"
            multiline={true}
            numberOfLines={5}
            underlineColorAndroid="transparent"
            // value={description}
            // onChangeText={(description) => setDescription(description)}
          />
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Add Location</Text>
          </TouchableHighlight>
          <View style={styles.row}></View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewPollutedLocation;

const styles = StyleSheet.create({
  body: {
    height: "100%",
    display: "flex",
  },
  cover: {
    display: "flex",
    height: "100%",
    maxHeight: "26%",
    resizeMode: "cover",
    width: "100%",
  },
  container: {
    display: "flex",
    height: "74%",
    flexDirection: "column",
    padding: 30,
  },
  innerContainer: {
    display: "flex",
    height: "100%",
  },
  coverTextContainer: {
    marginBottom: 20,
  },
  h4: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  },
  h3: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  input: {
    borderColor: "#6698FF",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    borderRadius: 8,
    marginVertical: 6,
  },
  button: {
    backgroundColor: "#2B65EC",
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  transparentButton: {
    backgroundColor: "transparent",
  },
  signupText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 3,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
  },
  topic: {
    marginLeft: 30,
    marginTop: 130,
    fontFamily: "sans-serif",
    fontSize: 30,
    color: "#fff",
    backgroundColor: "#3BB9FF",
  },
});
