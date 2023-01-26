import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage  from '../assets/images/background.jpg';
import { Feather } from '@expo/vector-icons';
import colors from "../constants/colors";

const ChatScreen = (props) => {
  return  (
    <SafeAreaView
    edges={[
        'right','left','bottom'
    ]}
    style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        </ImageBackground>
      <View style={styles.Inputcontainer}>
<TouchableOpacity onPress={()=>console.log("Pressed!")}>
    <Feather name="plus" size={24} color={colors.blue}/>
</TouchableOpacity>
       
        <TextInput/>
        <TouchableOpacity onPress={()=>console.log("Pressed!")}>
        <Feather name="camera" size={24} color={colors.blue}/>
</TouchableOpacity>
       
      </View>
    </SafeAreaView>

  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection:"column"
  },
  backgroundImage:{
flex:1
  },
  Inputcontainer:{
flexDirection:"row",
paddingVertical:8,
paddingHorizontal:10,
height:50,
  },
  label: {
    color: "black",
  },
});
export default ChatScreen;
