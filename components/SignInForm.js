import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";
import { View, Text, StyleSheet } from "react-native";
const  SignInForm = props =>{

return (
    <>
    
  <Input
    label="Email"
    icon="mail"
    iconPack={Feather}
    
  />
  <Input
    label="Password"
    icon="lock"
    iconPack={Feather}
    
  />
  <SubmitButton
  title="Sign in"
  onPress={()=>console.log("button is pressed")}
  style={{marginTop:20}}
  
  />
  </>
);
};
export default SignInForm;
