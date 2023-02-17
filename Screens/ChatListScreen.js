import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons ,Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ChatScreen from "./ChatScreen";
const ChatListScreen = (props) => {
  useEffect(()=>{
props.navigation.setOptions({
  headerRight:()=>{
    return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
      title="New Chat"
      iconName="create-outline"
      onPress={()=>props.navigation.navigate("NewChat")}
      />
    </HeaderButtons>
  }
})
  },[]);
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
