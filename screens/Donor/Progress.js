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
import { Card, Searchbar } from "react-native-paper";

const Progress = ({ props }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <BackgroundImage
        source={require("../../assets/progress.jpg")}
        style={styles.cover}
      >
        <Text style={styles.topic}>Progress </Text>
      </BackgroundImage>
      <View style={styles.container3}>
        <View style={styles.innerContainer}>
          <Text style={styles.volunteers}>Volunteers</Text>
          <Text style={styles.volunteers2}>250</Text>
          <Image
            source={require("../../assets/volunteers.jpg")}
            style={styles.volImage}
          />
        </View>
        <View style={styles.container3}>
          <Card style={styles.innerContainer2}>
            <Text style={styles.paragraph}>Funds</Text>
            <Image
              source={require("../../assets/fund.jpg")}
              style={styles.fundImage}
            />
            <Text style={styles.paragraph2}>Rs:72,000</Text>
          </Card>
          <Card style={styles.innerContainer3}>
            <Text style={styles.paragraph}>Remaining</Text>
            <Image
              source={require("../../assets/remain.jpg")}
              style={styles.fundImage}
            />
            <Text style={styles.paragraph2}>27% </Text>
          </Card>
          <Card style={styles.innerContainer4}>
            <Text style={styles.paragraph}>Spent</Text>
            <Image
              source={require("../../assets/snaps.jpg")}
              style={styles.fundImage}
            />
            <Text style={styles.paragraph2}>Rs:20,000</Text>
          </Card>
          <Card style={styles.innerContainer5}>
            <Text style={styles.paragraph}>Snaps</Text>
            <Image
              source={require("../../assets/snaps.jpg")}
              style={styles.fundImage}
            />
          </Card>
          <TouchableHighlight style={styles.button2}>
            <Text style={styles.buttonText2}>Comment</Text>
          </TouchableHighlight>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Progress;

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

  topic: {
    marginLeft: 250,
    marginTop: 190,
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#3BB9FF",
  },
  volunteers: {
    marginLeft: 90,
    marginTop: -40,
    fontSize: 30,
    color: "#3BB9FF",
    fontWeight: "bold",
  },
  volunteers2: {
    marginLeft: 160,
    marginTop: 10,
    fontSize: 30,
    color: "#5E7D7E",
    fontWeight: "bold",
  },
  volImage: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginTop: -50,
  },
  container2: {
    flex: 3,
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#ecf0f1",
  },
  innerContainer: {
    height: 160,
    marginTop: 40,
  },
  container3: {
    display: "flex",
    height: "74%",
    flexDirection: "column",
    padding: 30,
  },
  innerContainer2: {
    marginLeft: -20,
    height: 150,
    width: 150,
    marginTop: -90,
    backgroundColor: "#ADDFFF",
    borderColor: "#0909ff",
    borderWidth: 1,
  },
  innerContainer3: {
    marginLeft: 160,
    height: 150,
    width: 150,
    marginTop: -150,
    backgroundColor: "#ADDFFF",
    borderColor: "#0909ff",
    borderWidth: 1,
  },
  innerContainer4: {
    marginLeft: 160,
    height: 150,
    width: 150,
    marginTop: 50,
    backgroundColor: "#ADDFFF",
    borderColor: "#0909ff",
    borderWidth: 1,
  },
  innerContainer5: {
    marginLeft: -20,
    height: 150,
    width: 150,
    marginTop: -150,
    backgroundColor: "#ADDFFF",
    borderColor: "#0909ff",
    borderWidth: 1,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 20,
    marginTop: 30,
    backgroundColor: "#2B65EC",
  },
  fundImage: {
    width: 50,
    height: 50,
    marginLeft: 50,
    marginTop: 10,
  },
  paragraph2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2B65EC",
    marginLeft: 30,
    marginTop: 5,
  },
  button2: {
    backgroundColor: "#2B65EC",
    paddingHorizontal: 6,
    paddingVertical: 7,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 40,
    width: 100,
    marginLeft: 200,
    borderColor: "#fff",
    borderWidth: 1,
    height: 40,
  },
  buttonText2: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
