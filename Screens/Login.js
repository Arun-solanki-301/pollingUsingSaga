import React, { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../Redux/Actions/actions";

const Login = ({navigation}) => {   
    const [userName , setUserName] = useState("");
    const [userPassword , setUserPassword] = useState("")
    const data = useSelector((state)=>state);
    console.log(data , "login page")
    const dispatch = useDispatch();

const getLogin = ()=>{
    if (userName !== "" && userPassword !== "") {
        dispatch(loginRequest({
            name : userName,
            password : userPassword,
          })
        );
        if(data.LoginData.isSuccess){

            navigation.navigate("userList")
        }
      }
      
}

  return (
    <View style={styles.FormBody }>
      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#1a73e8",
            textAlign: "center",
            marginBottom: 25,
            marginTop : 50
          }}
          >
          Polling App
        </Text>
          <Text style={{textAlign :"center" , fontSize : 18 , color :"red"}}></Text>
      </View>
      <TextInput
        placeholder="Username"
        style={styles.formInputs}
        value = {userName}
        onChangeText = {(e)=>setUserName(e)}
      />

      <TextInput
        placeholder="Password"
        style={styles.formInputs}
        secureTextEntry={true}
        value = {userPassword}
        onChangeText = {(e)=>setUserPassword(e)}
      />

      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.submitForm}
          onPress={getLogin}
        >
          <Text style={styles.submitText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpOnLogin}
          onPress={()=>navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpOnLoginText}>
            new user? sign up instead
          </Text>
        </TouchableOpacity>
      </View>

      {data.LoginData.isLoading && <ActivityIndicator size = "large" />}
    </View>
  );    
}

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
  formInputsFalse: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
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
  formTextError: {
    color: "red",
  },
});

export default Login;