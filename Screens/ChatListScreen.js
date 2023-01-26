import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ChatScreen from "./ChatScreen";
const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text  >Chat List</Text>
      <Button title="Go to chat screen" onPress={()=>props.navigation.navigate("ChatScreen")}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  flex:1,
   justifyContent:"center",
   alignItems:"center",
  
  },
  label:{
    color:"black"
  }
});
export default ChatListScreen;
