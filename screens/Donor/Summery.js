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
  BackgroundImage,
} from "react-native";
import { Icon } from "react-native-elements";
import { Card, Searchbar } from "react-native-paper";
import moment from "moment/moment";

const Summery = ({ navigation }) => {
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
          <Text style={styles.topic}>My Donation Summery</Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        <ScrollView horizontal={true}>
          <View style={styles.container}>
            <Card style={styles.innerContainer}>
              <Text style={styles.paragraph}>
                Hikkaduwa Coral Reefs Project
              </Text>
              <Text style={styles.paragraph2}>Date: 23-10-2022</Text>
              <Text style={styles.paragraph2}>Bank AC: 189292829993</Text>
              <Text style={styles.paragraph2}>Donation: Rs:3400</Text>
              <Text style={styles.paragraph2}>Donor: Samuditha</Text>
            </Card>
          </View>
          <View style={styles.container}>
            <Card style={styles.innerContainer}>
              <Text style={styles.paragraph}>Unawatuna Beach Cleaning</Text>
              <Text style={styles.paragraph2}>Date: 23-10-2022</Text>
              <Text style={styles.paragraph2}>Bank AC: 189292829993</Text>
              <Text style={styles.paragraph2}>Donation: Rs:3400</Text>
              <Text style={styles.paragraph2}>Donor: Samuditha</Text>
            </Card>
          </View>

          <View style={styles.container}>
            <Card style={styles.innerContainer}>
              <Text style={styles.paragraph}>Madu Oya Project</Text>
              <Text style={styles.paragraph2}>Date: 23-10-2022</Text>
              <Text style={styles.paragraph2}>Bank AC: 189292829993</Text>
              <Text style={styles.paragraph2}>Donation: Rs:300</Text>
              <Text style={styles.paragraph2}>Donor: Samuditha</Text>
            </Card>
          </View>

          <View style={styles.container}>
            <Card style={styles.innerContainer}>
              <Text style={styles.paragraph}>
                Hikkaduwa Coral Reefs Project
              </Text>
              <Text style={styles.paragraph2}>Date: 19-02-2022</Text>
              <Text style={styles.paragraph2}>Bank AC: 189292829993</Text>
              <Text style={styles.paragraph2}>Donation: Rs:1000</Text>
              <Text style={styles.paragraph2}>Donor: Samuditha</Text>
            </Card>
          </View>

          <View style={styles.container}>
            <Card style={styles.innerContainer}>
              <Text style={styles.paragraph}>
                Hikkaduwa Coral Reefs Project
              </Text>
              <Text style={styles.paragraph2}>Date: 23-10-2022</Text>
              <Text style={styles.paragraph2}>Bank AC: 189292829993</Text>
              <Text style={styles.paragraph2}>Donation: Rs:3400</Text>
              <Text style={styles.paragraph2}>Donor: Samuditha</Text>
            </Card>
          </View>
        </ScrollView>
        <TouchableHighlight
          style={styles.button2}
          onPress={() => navigation.navigate("Event")}
        >
          <Text style={styles.buttonText2}>Events</Text>
        </TouchableHighlight>
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

export default Summery;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#ecf0f1",
    marginTop: -80,
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
    padding: 40,
  },
  innerContainer: {
    height: 470,
    borderColor: "#2B65EC",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#87AFC7",
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
    backgroundColor: "#2B65EC",
    marginTop: -10,
    marginLeft: 100,
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
    color: "#fff",
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
  sumcard: {
    height: 470,
    borderRadius: 20,
  },
});
