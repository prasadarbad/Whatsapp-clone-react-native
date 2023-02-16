import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import profile from '../assets/images/profile.jpg';
import colors from "../constants/colors";
import { FontAwesome } from '@expo/vector-icons';
const ProfileImage = props=>{
    return (
        <View>
           <Image 
           style={{...styles.image,...{width:props.size,height:props.size}}}
           source={profile}></Image>
           <View style={styles.editIconContainer}>
           <FontAwesome name="pencil" size={15} color="black" />
           </View>
        </View>
    )
};
const styles=StyleSheet.create({
    image:{
        borderRadius:50,
        borderColor:colors.grey,
        borderWidth:1,
       
    },
    editIconContainer:{
        position:'absolute',
        bottom:0,
        right:0,
        backgroundColor:colors.lightGrey,
        borderRadius:20,
        padding:8
    }
})
export default ProfileImage;
