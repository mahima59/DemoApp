import { createStackNavigator } from 'react-navigation';
import LogIn from "../components/LoginScreens/LogIn";
import Register from "../components/LoginScreens/Register";
import Home from "../components/LoginScreens/Home";
import Splash from "../components/LoginScreens/Splash";
import React, { Component } from "react";
import {  Image } from "react-native";

export const Nav = createStackNavigator(
  {  
      Splash:{screen:Splash, navigationOptions : {header:null}},
      LogIn:{screen:LogIn},
      Register:{screen:Register},
      Home:{screen:Home}
},
{
    navigationOptions : {
      headerTitle: (
      <Image style={{width:'30%',height:30 ,resizeMode:'center'}} source={require('../Images/logo.png')}/>
      ),
       
        headerTitleStyle: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold"
        },
        headerTintColor: "white"
      }
}

)
