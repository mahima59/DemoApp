import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import Constant from "../../constant/Constant";
import Styles from "../../style/Styles";
export default class LogIn extends Component {
  registerButtonAction(){
    const{navigate} = this.props.navigation;
    navigate('Register')
  }
  constructor(props) {
    super(props);
  this.state={
    email:""
  }
}

  submitButtonAction(){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(reg.test(this.state.email) === false){
      console.warn(this.state.email)
      alert("Enter valid email address")
    }
    else{
      this.props.navigation.navigate('Home')
    }
       
  }
  
  handleEmail =(text) =>{
    this.setState({email:text})
   
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={[Styles.textView,{marginTop:70}]}>
          <Text style={Styles.textStyle}>{Constant.constant.first}</Text>
          <Text style={Styles.textStyle}>
            {Constant.constant.henkelRegisterText}
          </Text>
          <TouchableOpacity style={Styles.buttonStyle}
           onPress ={()=>this.registerButtonAction()}>
            <Text style={Styles.buttonTextStyle}>Please Register Here</Text>
          </TouchableOpacity>
          <View style={Styles.textView}>
            <Text style={Styles.textStyle}>{Constant.constant.logInText}</Text>
            <TextInput
              style={Styles.inputText}
              underlineColorAndroid="transparent"
              placeholder="Please Enter your Email"
              autoCapitalize="none"
              value={this.state.email}
              onChangeText = {this.handleEmail}
            />
            <TouchableOpacity style={Styles.buttonStyle}
            onPress ={()=>this.submitButtonAction()}>
              <Text style={Styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}     
