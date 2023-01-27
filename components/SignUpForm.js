import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";
import { View, Text, StyleSheet } from "react-native";
const  SignUpForm = props =>{
return (
    <>
    <Input
    label="First Name"
    icon="user-o"
    iconPack={FontAwesome}
    
  />
  <Input
    label="Last Name"
    icon="user-o"
    iconPack={FontAwesome}
    
  />
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
  title="Sign up"
  onPress={()=>console.log("button is pressed")}
  style={{marginTop:20}}
  
  />
  </>
);
};
export default SignUpForm;