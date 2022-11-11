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
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
//firstName, lastName, email, userName, password, role

export const Signup = ({ navigation }) => {
  const data = [
    { label: "Volunteer", value: "VOLUNTEER" },
    { label: "Doner", value: "DONER" },
    { label: "Marine_Biologist", value: "MARINE_BIOLOGIST" },
    { label: "Other", value: "MANAGER" },
  ];

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [department, setDepartment] = useState(null);
  const [password, setPassword] = useState(null);

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const reset = () => {
    setFirstName(null);
    setLastName(null);
    setEmail(null);
    setUserName(null);
    setDepartment(null);
    setPassword(null);
  };

  const handleRegister = async () => {
    let role;
    if (!firstName) alert("Please, enter a name");
    else if (!lastName) alert("Please, enter the NIC");
    else if (!String(email).match(emailRegEx)) {
      alert("Please, enter a valid email");
    } else if (!userName) alert("Please, enter a mobile number");
    else if (!department) alert("Please, select a department");
    else if (!password && password.length() > 6)
      alert("Please, enter a valid password");
    else {
      switch (department) {
        case "VOLUNTEER":
          role = "VOLUNTEER";
          break;
        case "DONER":
          role = "DONER";
          break;
        case "MARINE_BIOLOGIST":
          role = "MARINE_BIOLOGIST";
          break;
        case "OTHER":
          role = "MANAGER";
          break;
        default:
          role = null;
      }
      await axios
        .post("https://uee.up.railway.app/api/user/", {
          firstName, lastName, email, userName, department, password, role 
        })
        .then(async (res) => {
          if (res?.status === 200) {
            reset();
            alert("Registration success!");
          } else {
            alert("Oops... Something went wrong!");
          }
        })
        .catch(() => {
          alert("Oops... Something went wrong!");
        });
    }
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <Image source={require("../assets/login.jpg")} style={styles.cover} />
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.coverTextContainer}>
            <Text style={styles.h4}>Welcome to</Text>
            <Text style={styles.h3}>Protect Aqua Life Portal</Text>
          </View>
          <Text style={styles.label}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="FirstName"
            keyboardType="text"
            underlineColorAndroid="transparent"
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
          />

          <TextInput
            style={styles.input}
            placeholder="LastName"
            keyboardType="text"
            underlineColorAndroid="transparent"
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
          />
       
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.input}
            placeholder="UserName"
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
          />
          <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Type"
            value={department}
            onChange={(item) => {
              setDepartment(item.value);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableHighlight style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
          <View style={styles.row}>
            <Text>Already have an account?</Text>
            <TouchableHighlight
              style={styles.transparentButton}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={styles.signupText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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
    borderColor: "rgba(0, 0, 0, 0.1)",
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
  dropdown: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
});