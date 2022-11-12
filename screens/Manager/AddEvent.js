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
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DeleteEvent from "./DeleteEvent";
import UpdateEvent from "./UpdateEvent";

//title,description,date,startTime,endTime,tag,venue,image,status,

export const AddEvent = ({ navigation }) => {
 

  const [title, settitle] = useState(null);
  const [description, setdescription] = useState(null);
  const [date, setdate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setendTime] = useState(null);
  const [tag, settag] = useState(null);
  const [venue, setVenue] = useState(null);
  const [image, setimage] = useState("test");
  const [status, setstatus] = useState("Approved");

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const reset = () => {
    settitle(null);
    setdescription(null);
    setdate(null);
    setStartTime(null);
    setendTime(null);
    settag(null);
    setVenue(null);
  };

  const handleRegister = async () => {
      await axios
        .post("https://uee.up.railway.app/api/events", {
            title,description,date,startTime,endTime,tag,venue,image,status,
        })
        .then((res) => {
          
           // reset();
            alert("Event Added success!");
         // } else {
         //   alert("Oops... Something went wrong!");
         // }
        })
        .catch(() => {
          alert("Oops... Something went wrong!");
        });
    
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
        
   

        
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
       <UpdateEvent/>
          <Text style={styles.label}>Create Event</Text>
          <TextInput
            style={styles.input}
            placeholder="title"
            keyboardType="text"
            underlineColorAndroid="transparent"
            value={title}
            onChangeText={(title) => settitle(title)}
          />

          <TextInput
            style={styles.input}
            placeholder="description"
            keyboardType="text"
            underlineColorAndroid="transparent"
            value={description}
            onChangeText={(description) => setdescription(description)}
          />

          <TextInput
            style={styles.input}
            placeholder="date"
            keyboardType="text"
            underlineColorAndroid="transparent"
            value={date}
            onChangeText={(date) => setdate(date)}
          />
          <TextInput
            style={styles.input}
            placeholder="startTime"
            keyboardType="text"
            underlineColorAndroid="transparent"
            value={startTime}
            onChangeText={(startTime) => setStartTime(startTime)}
          />
          <TextInput
            style={styles.input}
            placeholder="endTime"
            keyboardType="text"
            secureTextEntry={endTime}
            underlineColorAndroid="transparent"
            value={endTime}
            onChangeText={(endTime) => setendTime(endTime)}
          />
            <TextInput
            style={styles.input}
            placeholder="tag"
            keyboardType="text"
            secureTextEntry={tag}
            underlineColorAndroid="transparent"
            value={tag}
            onChangeText={(tag) => settag(tag)}
          />
            <TextInput
            style={styles.input}
            placeholder="venue"
            keyboardType="text"
            secureTextEntry={venue}
            underlineColorAndroid="transparent"
            value={venue}
            onChangeText={(venue) => setVenue(venue)}
          />
          <TouchableHighlight style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
          <View style={styles.row}>
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