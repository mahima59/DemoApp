import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput,ScrollView } from "react-native";

import Constant from "../../constant/Constant";
import Styles from "../../style/Styles";
export default class Register extends Component {
 render(){
     return(
         <View style ={{flex:1}}> 
         <ScrollView style={[Styles.textView,{marginTop:50}]}>
             
             <Text>FirstName</Text>
             <TextInput
              style={Styles.inputText}
              underlineColorAndroid="transparent"
              placeholder="FirstName"
              autoCapitalize="none"
            />
            <Text>LastName</Text>
             <TextInput
              style={Styles.inputText}
              underlineColorAndroid="transparent"
              placeholder="LastName"
              autoCapitalize="none"
            />
            <Text>Email</Text>
             <TextInput
              style={Styles.inputText}
              underlineColorAndroid="transparent"
              placeholder="Email"
              autoCapitalize="none"
            />
            <Text>Mobile</Text>
             <TextInput
              style={Styles.inputText}
              underlineColorAndroid="transparent"
              placeholder="Mobile"
              autoCapitalize="none"
            />
          
         </ScrollView>
        
         <View style = {Styles.textView}>
          <TouchableOpacity style={[Styles.buttonStyle,{position:'absolute',bottom:0,margin:5}]}>
          <Text style={Styles.buttonTextStyle}>Register</Text>
        </TouchableOpacity>
        </View>  
        </View>  
     )
 }
}