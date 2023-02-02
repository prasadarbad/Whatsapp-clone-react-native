import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";

import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { signIn } from "../utils/actions/authActions";
import colors from "../constants/colors";
const isTestMode= true;
const initialState = {
  inputValues: {
    emailId: isTestMode? "prasadarbad9@gmail.com":"",
    passwordId: isTestMode? "123456":"",
  },
  inputValidities: {
    emailId: isTestMode,
    passwordId: isTestMode,
  },
  formIsValid: isTestMode,
};

const SignInForm = (props) => {
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      console.log(result);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const authHandler = useCallback(async () => {
    try {
      setIsLoading(true);

      const action = signIn(
        formState.inputValues.emailId,
        formState.inputValues.passwordId
      );
      setError(null);
      await dispatch(action);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, [dispatch, formState]);

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
        value={formState.inputValues.emailId}
        
        errorText={formState.inputValidities["emailId"]}
      />

      <Input
        id="passwordId"
        label="Password"
        icon="lock"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangedHandler}
        value={formState.inputValues.passwordId}
        errorText={formState.inputValidities["passwordId"]}
      />

      {isLoading ? (
        <ActivityIndicator
          size={"small"}
          color={colors.primary}
          style={{ marginTop: 10 }}
        />
      ) : (
        <SubmitButton
          title="Sign in"
          onPress={authHandler}
          style={{ marginTop: 20 }}
          disabled={!formState.formIsValid}
        />
      )}
    </>
  );
};

export default SignInForm;
