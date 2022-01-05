import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequest } from "../Redux/Actions/actions";

const SignUp = ({navigation}) => {
    const [signUpPassword , setSignUpPassword] = useState("")
    const [signUpConfirmPassword , setSignUpConfirmPassword] = useState("")
    const [signUpUserName , setSignUpUserName] = useState("")
    

    const data = useSelector((state)=>state);
    console.log(data , "Signup page")
    const dispatch = useDispatch();


   const getSignUp = () => {
       if(signUpUserName !== "" && signUpPassword !== "" && signUpConfirmPassword !== ""){
           if(signUpPassword === signUpConfirmPassword){
            dispatch(signUpRequest({
                name : signUpUserName,
                password : signUpPassword
            }))
           }
       }
   }




  return (
    <View style={styles.FormBody}>
      <View style={{  marginTop : 50}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#1a73e8",
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          Register With Polling App
        </Text>
      </View>
      <TextInput
        placeholder="Username"
        style={styles.formInputs}
        value = {signUpUserName}
        onChangeText = {(e)=>setSignUpUserName(e)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.formInputs}
        value = {signUpPassword}
        onChangeText = {(e)=>setSignUpPassword(e)}
      />

      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={styles.formInputs}
        value = {signUpConfirmPassword}
        onChangeText = {(e)=>setSignUpConfirmPassword(e)}
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.submitForm}
          onPress = {()=>getSignUp()}
        >
          <Text style={styles.submitText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpOnLogin}
          onPress={()=>navigation.navigate("Home")}
        >
          <Text style={styles.signUpOnLoginText}>
            already a user? login instead
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FormBody: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    height: "100%",
  
  },
  formInputs: {
    borderColor: "#cccccc",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
    height : 42
  },
  submitForm: {
    backgroundColor: "#1a73e8",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    width: 120,
    textAlign: "center",
  },
  submitText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
  },
  signUpOnLogin: {
    marginTop: 15,
  },
  signUpOnLoginText: {
    fontSize: 15,
    color: "#1a73e8",
  },
});

export default SignUp;