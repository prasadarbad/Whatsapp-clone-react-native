import React, { useCallback, useReducer } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";


import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
const initialState = {
    inputValidities: {
      
      email: false,
      password: false,
    },
    formIsValid: false,
  };
const SignInForm = (props) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const inputChangedHandler =useCallback ((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result });
      },[dispatchFormState]);
  return (
    <>
      <Input
        id="emailId"
        label="Email"
        icon="mail"
        iconPack={Feather}
        autoCapitalize="none"
        keyboardType="email-address"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="passwordId"
        label="Password"
        icon="lock"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["password"]}
      />
      <SubmitButton
        title="Sign in"
        onPress={() => console.log("button is pressed")}
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};
export default SignInForm;
