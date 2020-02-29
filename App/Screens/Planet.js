import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon,Input} from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        images:[  
    
    require('./Images/2.jpg'),
    require('./Images/1.jpg'),
    require('./Images/3.jpg'),
    require('./Images/4.jpg'),
    require('./Images/5.jpg'),

]
    };
  }
  Booking=()=>{
    {this.props.navigation.navigate("Booking")}
  }

  render() {
    return (
        <View style={{flex:1}}>
        <View style={{ backgroundColor: "purple", height: 50, flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "white", paddingTop: 12, paddingLeft: 110 ,fontSize:15,fontWeight:"bold"}}>Planet Detail</Text>
          <Icon name="bell" type="EvilIcons" style={{ paddingTop: 12, paddingLeft: 20 ,color:"white"}} /></View>

          <SliderBox
          images={this.state.images} 
          dotColor="purple"
          sliderBoxHeight={170}/>
          <Text style={{fontWeight:"bold",fontSize:30,paddingLeft:80,paddingTop:10,color:"purple"
          ,borderColor:"purple",borderWidth:4,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>Pearl Banquet</Text>

          <View style={{flexDirection:"row"}}>
          <Text style={{fontWeight:"bold",paddingLeft:15,fontSize:18,paddingTop:15}}>Location:</Text>
          <Input placeholder="" style={{paddingTop:20}}/>
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={{fontWeight:"bold",paddingLeft:15,fontSize:18,paddingTop:8}}>Capacity:</Text>
          <Input placeholder="" style={{paddingTop:0}}/>
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={{fontWeight:"bold",paddingLeft:15,fontSize:18,paddingTop:3}}>Waiter:</Text>
          <Input placeholder="" style={{paddingBottom:22}}/>
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={{fontWeight:"bold",paddingLeft:15,fontSize:18}}>Price:</Text>
          <Input placeholder="" style={{paddingBottom:0}}/>
          </View>

          <View style={{flexDirection:"row"}}>
          <Text style={{fontWeight:"bold",paddingLeft:15,fontSize:18}}>Available In:</Text>
          <Input placeholder="" style={{paddingBottom:20}}/>
          </View>
           <View style={{backgroundColor:"red",height:20,marginBottom:3}}><Text style={{alignSelf:"center",color:"white"}}>Parking Available</Text></View>
          
           <View style={{backgroundColor:"purple" ,flexDirection:"row",justifyContent:"space-between",paddingLeft:10,paddingRight:10,marginBottom:3}}>
            <Text style={{color:"white"}}>Message</Text>
            <TouchableOpacity>
            <Text style={{color:"white"}} onPress={this.Booking}>Book Now</Text></TouchableOpacity>
           </View>

           <View style={{ backgroundColor: "purple", height: 50, flexDirection: "row",justifyContent:"space-between" }}>
          <Icon name="logout" type="SimpleLineIcons" style={{ color: "white",paddingTop:10 }} />
          <Icon name="home" type="AntDesign" style={{ color: "white",paddingTop:10 }} />
          <Icon name="comments" type="FontAwesome" style={{ color: "white",paddingTop:10 }} />
          <Icon name="logout" type="AntDesign" style={{ color: "white" ,paddingTop:10}} />


        </View>
          </View>
    );
  }
}
