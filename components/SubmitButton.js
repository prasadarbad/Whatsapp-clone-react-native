import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../constants/colors";


const SubmitButton = props =>{
    const enabledColor=props.color || colors.primary;
    const disabledColor = colors.lightGrey;
    const bgColor =props.disabled?disabledColor:enabledColor;
return <TouchableOpacity 
onPress={props.disabled?()=>{}:props.onPress}
style={{...styles.button,
    ...props.style,
...{backgroundColor:bgColor}}}>
    <Text style={{color:props.disabled?colors.grey:'white'}}>
        {props.title}
    </Text>
</TouchableOpacity>
}

const styles=StyleSheet.create({
button:{
backgroundColor:colors.primary,
paddingHorizontal:30,
paddingVertical:10,
borderRadius:30,
justifyContent:'center',
alignItems:'center'

}
});
export default SubmitButton;