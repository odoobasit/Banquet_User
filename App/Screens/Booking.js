import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Item, Label, Input, Textarea, CheckBox, Body, Button, DatePicker } from 'native-base'

export default class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "", select: false, select1: false
        };
    }


    render() {
        
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "purple", height: 50, flexDirection: "row", justifyContent: "space-around" }}>
                    <Text style={{ color: "white", paddingTop: 12, paddingLeft: 110, fontWeight: "bold", fontSize: 15 }}>Booking Panel</Text>
                    <Icon name="bell" type="EvilIcons" style={{ paddingTop: 12, paddingLeft: 20, color: "white" }} /></View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "purple", paddingLeft: 30, paddingTop: 13, fontWeight: "bold", textDecorationLine: 'underline', fontSize: 16 }}>
                        All Fields are Required</Text>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ color: "purple", paddingLeft: 110, paddingTop: 3 }}>Price</Text>
                        <Text style={{ color: "purple", paddingLeft: 110 }}>$0.00</Text>
                    </View>

                </View>

                <View style={{ flexDirection: "column", paddingLeft: 20, paddingRight: 20 }}>
                    <Item floatingLabel style={{ borderColor: "purple" }}>
                        <Label>Your Name</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{ borderColor: "purple" }}>
                        <Label>Number Of Persons</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{ borderColor: "purple" }}>
                        <Label>Event Theme</Label>
                        <Input />
                    </Item>

                    <DatePicker
                        minimumDate={new Date(2020, 1, 1)}
                        maximumDate={new Date(2020, 12, 31)}

                        placeHolderText="Select date"
                        onDateChange={(date) => this.setState({ date })} />
                     </View>


                    <View style={{ flexDirection: "row", paddingTop: 30, justifyContent: "space-evenly" }}>
                    <CheckBox color="purple"
                        checked={this.state.select}
                        onPress={() => {
                            
                            this.setState({ select: !this.state.select })
                        }} />
                    <Body>
                        <Text>Sound</Text>
                    </Body>

                    <CheckBox color="purple"
                        checked={this.state.select1}
                        onPress={() => {
                        this.setState({ select1: !this.state.select1})
                        }} />
                    <Body>
                        <Text>Focus Lights</Text>
                    </Body>
                    </View>

                <View style={{ paddingTop: 15, paddingLeft: 10, paddingRight: 10 }}>
                    <Textarea rowSpan={5} bordered placeholder="Other Requirements" borderColor="purple" /></View>
                <View>

                    <Text style={{ color: "purple", textDecorationLine: "underline", fontWeight: "bold", fontSize: 20, alignSelf: "center", paddingTop: 20 }}>Submit</Text>
                </View>

                <View style={{ backgroundColor: "purple", height: 50, flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
                    <Icon name="logout" type="SimpleLineIcons" style={{ color: "white", paddingTop: 10 }} />
                    <Icon name="home" type="AntDesign" style={{ color: "white", paddingTop: 10 }} />
                    <Icon name="comments" type="FontAwesome" style={{ color: "white", paddingTop: 10 }} />
                    <Icon name="logout" type="AntDesign" style={{ color: "white", paddingTop: 10 }} />
                </View>

            </View>
        );
    }
}
