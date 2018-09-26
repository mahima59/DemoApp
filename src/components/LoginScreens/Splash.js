import React, { Component } from "react";
import {  View,  ImageBackground,ActivityIndicator } from "react-native";
import Constant from "../../constant/Constant";

export default class Splash extends Component{

state={
    configurationData:[],
    isLoading: true
}

   async componentWillMount(){
        const url = Constant.constant.BASE_URL +"conferenceConfiguration?"+"conference_id="+Constant.constant.conferenceId 
       console.warn(url);

       await fetch(url,{
        method:'GET',
       
       
    }).then((response) =>   response.json()
    .then((responseJson) => {
      this.setState({configurationData:responseJson,
        isLoading: false})
        this.props.navigation.navigate('LogIn')
      })
      
    )
       .catch((error) => {
           console.error(error);
         });
          
    }

    render(){
        if (this.state.isLoading){
     return(
           <View style={{flex:1}}>
              <ImageBackground style = {{flex:1}}
             source={require("../../Images/splash.png")}>
             <ActivityIndicator style={{flex:1,position:'absolute',bottom:30,margin:'50%'}}/>
             </ImageBackground>
           </View>
        )
     }
     else{
         return(
        <View style={{flex:1}}>
        <ImageBackground style = {{flex:1}}
       source={require("../../Images/splash.png")}>
       </ImageBackground>
     </View>
         )
     } 
    }
} 