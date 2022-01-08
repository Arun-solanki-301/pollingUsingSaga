import React, { useEffect } from "react";
import {Text , View , ActivityIndicator, StyleSheet , SafeAreaView} from 'react-native'
import axios from "axios";

import { FlatList } from "react-native-gesture-handler"
import { useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { userListRequest } from "../Redux/Actions/actions";

const UserList = ({navigation})=>{
    // const [UserData , setUserData] = useState("");
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(data , "UserList")
    useEffect(()=>{
        dispatch(userListRequest())
    } , [])




    return(
      
        // <View style = {{height : "100%", overflow : "scroll"}}>
            <View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
            <View style = {styles.users}><Text style = {styles.headerText}>UserName</Text><Text style = {styles.headerText} >Role</Text></View>
           
        </View>
        
       
    )
}
const styles = StyleSheet.create({
    users :{
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around"
    },
    headerText : {
        fontSize : 25,
        fontWeight : "800",
        color : "#1a73e8",
        textAlign : "center",
        marginTop:15,
        marginBottom : 15,
        width : "50%"
        // textDecoration : "underline",
        // textDecorationColor : "#1a73e8"
    },
    ItemText : {
        fontSize :  16,
        textAlign : "center",
        marginTop:10,
        marginBottom : 10,  
        width : "50%"
    }
})

export default UserList