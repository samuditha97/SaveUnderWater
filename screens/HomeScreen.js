import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const reset = () => {
    setUserName(null);
    setPassword(null);
  };

  useEffect(() => {
    const validate = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) navigation.navigate("Facts");
    };
    validate();
    reset();
  }, []);

  const handleLogin = async () => {
    if (!userName) {
      alert("Please, enter a valid username");
    } else if (!password) {
      alert("Please, enter a password");
    } else {
      await axios
        .post("https://uee.up.railway.app/api/user/login", {
          userName: userName,
          password: password,
        })
        .then(async (res) => {
          if (res?.status === 200 && res?.data?.data?.token) {
            await AsyncStorage.setItem("token", res.data.data.token);
            reset();
            if(res?.data?.data?.user?.role === "VOLUNTEER"){
              navigation.navigate("EventList");
            } else if(res?.data?.data?.user?.role === "DONER"){
              navigation.navigate("Donation");
            } else if(res?.data?.data?.user?.role === "MARINE_BIOLOGIST"){
              navigation.navigate("Event");
            }else{
              navigation.navigate("Event");
            }
            
          } else {
            alert("Invalid username or password.");
          }
        })
        .catch(() => {
          alert("Oops... Something went wrong!");
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <Image source={require("../assets/login.jpg")} style={styles.cover} />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.coverTextContainer}>
            <Text style={styles.h4}>Welcome to</Text>
            <Text style={styles.h3}>Protect Aqua Life Portal</Text>
          </View>
          <Text style={styles.label}>Log in</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType="text"
            underlineColorAndroid="transparent"
            onChangeText={(userName) => setUserName(userName)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableHighlight style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableHighlight>
          <View style={styles.row}>
            <Text>Don't have an account?</Text>
            <TouchableHighlight
              style={styles.transparentButton}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "80%",
    display: "flex",
  },
  cover: {
    display: "flex",
    height: "100%",
    maxHeight: "50%",
    resizeMode: "cover",
    width: "100%",
  },
  container: {
    display: "flex",
    height: "50%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 30,
  },
  innerContainer: {
    display: "flex",
    height: "100%",
  },
  coverTextContainer: {
    marginBottom: 30,
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
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    borderRadius: 8,
    marginVertical: 8,
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
});
