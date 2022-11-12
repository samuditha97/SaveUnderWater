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
import DocumentPicker, { types } from "react-native-document-picker";

const Donation = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <BackgroundImage
        source={require("../../assets/donation.jpg")}
        style={styles.cover}
      >
        <Text style={styles.topic}>Donation Form </Text>
      </BackgroundImage>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Event Name"
            keyboardType="text"
            underlineColorAndroid="transparent"
            //value={firstName}
            //onChangeText={(firstName) => setFirstName(firstName)}
          />

          <TextInput
            style={styles.input}
            placeholder="Donor Name"
            keyboardType="text"
            underlineColorAndroid="transparent"
            //value={lastName}
            //onChangeText={(lastName) => setLastName(lastName)}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone No."
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
            //value={email}
            //onChangeText={(email) => setEmail(email)}
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            keyboardType="text"
            underlineColorAndroid="transparent"
            //value={password}
            //onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount Rs:"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            //value={password}
            //onChangeText={(password) => setPassword(password)}
          />

          <Button title="Slip" />

          <TextInput
            style={styles.input}
            placeholder="Message"
            keyboardType="text"
            multiline={true}
            numberOfLines={5}
            underlineColorAndroid="transparent"
            //onChangeText={(text) => setDescription(text)}
          />
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button2}
            onPress={() => navigation.navigate("Summery")}
          >
            <Text style={styles.buttonText2}>Summery</Text>
          </TouchableHighlight>
          <View style={styles.row}></View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Donation;

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
    padding: 20,
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
    paddingHorizontal: 6,
    paddingVertical: 7,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 10,
    width: 110,
    height: 40,
    marginLeft: 250,
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
    marginLeft: 250,
    marginTop: 190,
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#3BB9FF",
  },
  button2: {
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 7,
    fontSize: 16,
    borderRadius: 8,
    marginTop: -40,
    width: 100,
    marginLeft: 10,
    borderColor: "#2B65EC",
    borderWidth: 1,
    height: 40,
  },
  buttonText2: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
