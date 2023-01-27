import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import PageContainer from "../components/PageContainer";
import SignInForm from "../components/SignInForm";


import SignUpForm from "../components/SignUpForm";
import colors from "../constants/colors";
import logo from '../assets/images/logo.png';
const AuthScreen = (props) => {
  const [isSignUp,setIsSignUp]=useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
          keyboardVerticalOffset={100}
          >
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} resizeMode='contain'/>
        </View>
    {
      isSignUp ?
      <SignUpForm/> :
      <SignInForm/>
     
    }
    
     <TouchableOpacity onPress={() => setIsSignUp(prevState=> !prevState)}
     style={styles.linkContainer}
     >
        <Text style={styles.link}>{ `Switch to ${isSignUp?"Sign in":"Sign up"} `}</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};
const styles =StyleSheet.create({
  linkContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:15,
  },
  link:{
    color:colors.blue,
    fontFamily:'medium',
    letterSpacing:0.3,
  },
  imageContainer:{
    justifyContent:'center',
    alignItems:"center",
    height:'30%'
  },
  image:{
    width:"50%",
   
  }
})
export default AuthScreen;
