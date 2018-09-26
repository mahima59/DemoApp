import React, { Component } from "react";
import { Text, View, FlatList, ImageBackground } from "react-native";
import Styles from "../../style/Styles";
import HomeData from "../../constant/HomeData";

export default class Home extends Component {
  render() {
    return (
      <View style={Styles.textView}>
        <FlatList
        
        numColumns= {2}
          style={{ flex: 1,flexWrap: 'wrap'}}
          data={HomeData.data}
          renderItem={({ item }) => (
            <View style={{height:200,width:'50%',backgroundColor:item.iconImage }}>
              <Text style= {{}}>{item.iconName}</Text>
             
            </View>
          )}
        />
      </View>
    );
  }
}
