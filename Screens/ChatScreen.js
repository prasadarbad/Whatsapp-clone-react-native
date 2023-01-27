import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "../assets/images/background.jpg";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";

const ChatScreen = (props) => {
    const [messageText,setMessageText]=useState("");
    const sendMessage =useCallback(()=>{
        setMessageText("");
    },[messageText]);
    console.log(messageText);
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
        
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      ></ImageBackground>
      <View style={styles.Inputcontainer}>
        <TouchableOpacity
          style={styles.mediaButton}
          onPress={() => console.log("Pressed!")}
        >
          <Feather name="plus" size={24} color={colors.blue} />
        </TouchableOpacity>

        <TextInput style={styles.textbox}
        value={messageText}
        onChangeText={text=>setMessageText(text)}
        onSubmitEditing={sendMessage}
        />

       {messageText ==="" && <TouchableOpacity
          style={styles.mediaButton}
          onPress={() => console.log("Pressed!")}
        >
          <Feather name="camera" size={24} color={colors.blue} />
        </TouchableOpacity>}
       {messageText !=="" && <TouchableOpacity
          style={{...styles.mediaButton,...styles.sendButton}}
          onPress={sendMessage}
        >
         <Feather name="send" size={20} color="white" />
        </TouchableOpacity>}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  Inputcontainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton:{
    backgroundColor:colors.blue,
    borderRadius:50,
    padding:8,
    width:35

  }
});
export default ChatScreen;
