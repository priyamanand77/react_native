import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Hello from "./Hello";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToastManager,{Toast} from 'toastify-react-native'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const nextpage=()=>
  {
    // navigation.navigate('Hello')
    navigation.navigate('Hello')
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    image: {
      marginBottom: 40,
    },

    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,

      alignItems: "center",
    },

    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },

    forgot_button: {
      height: 30,
      marginBottom: 30,
    },

    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      // backgroundColor: "#FF1493",
      backgroundColor: isChecked ? "#AA336A" : "gray",
    },
    section: {
      flexDirection: "row",
      alignItems: "center",
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
    loginText: {
      color: "white",
    },
  });
  const validation = () => {
    if (email === "priyam" && password === "priyam") {
   
    //  Alert.alert();
     
      nextpage();
    
    } else {
      // Alert.alert("Error");
      Toast.error('ERROR','top')
     
    }
  };

  return (
    <View style={styles.container}>
         <ToastManager />
      {/* <Image style={styles.image} source={require("../assets/logo.png")} /> */}

      <StatusBar style="auto" />
      <View>
        <Text style={{ fontSize: 15 }}>UserName</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View>
        <Text style={{ fontSize: 15 }}>Pasword</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={() => {
            setChecked(!isChecked);
          }}
          color={isChecked ? "#AA336A" : undefined}
        />
        <Text style={styles.paragraph}>Accept all Tems and Conditions</Text>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        disabled={!isChecked}
        onPress={validation}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
