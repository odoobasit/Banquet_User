import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { Icon, Input, Button } from 'native-base';

const arr = [{
  img: require("./wedding.jpg"),
  t1: "Pearl Banquet",
  t2: "Capacity: 500 psn",
  t3: "See More"

},
{
  img: require("./wedding.jpg"),
  t1: "Pearl Banquet",
  t2: "Capacity: 500 psn",
  t3: "See More"

},
{
  img: require("./wedding.jpg"),
  t1: "Pearl Banquet",
  t2: "Capacity: 500 psn",
  t3: "See More"

}

]
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  Planet = () => {
    { this.props.navigation.navigate("Planet") }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ backgroundColor: "purple", height: 50, flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "white", paddingTop: 12, paddingLeft: 110,fontWeight:"bold",fontSize:15 }}>Home</Text>
          <Icon name="bell" type="EvilIcons" style={{ paddingTop: 12, paddingLeft: 20,color:"white" }} /></View>

        <View style={{ flexDirection: "row", height: 50, backgroundColor: "white" }}>
          <Input placeholder="search panel" style={{ paddingLeft: 25 }} />
          <Icon name="search" type="EvilIcons" style={{ paddingTop: 15, paddingRight: 10 }} />
        </View>

       

          <FlatList
            data={arr}

            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
              <View>
               <Image source={item.img} style={{ height: 200, width: "100%" }} />

                  <View style={{ backgroundColor: "white", height: 100, flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", paddingTop: 25, paddingLeft: 30 }}>
                      <Text style={{ fontWeight: "bold" }}>{item.t1}</Text>
                      <Text>{item.t2}</Text>
                    </View>

                    <Button title="" style={{ backgroundColor: "purple", width: 80, marginLeft: 70, marginTop: 20 }}
                    onPress={this.Planet}>
                      <Text style={{ paddingLeft: 8, paddingBottom: 6, color: "white" }}>{item.t3}</Text></Button>
                  </View>


                </View>)
            }} />  
             

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
