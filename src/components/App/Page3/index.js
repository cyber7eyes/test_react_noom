import React, { Component } from "react";

import { View, Text, Button } from "reactxp";

import _ from "lodash";
export class Page3 extends Component {
  componentDidMount() {
    console.log(
      "page " +
        _.find(this.props.bridge.menus, function(o) {
          return o.position === this.props.bridge.selectedMenu;
        }).name
    );
    console.log(this.props.bridge.menus);
  }

  render() {
    return (
      <View>
        <View style={this.styles.titleLayout}>
          <Text style={this.styles.title}>Noom : 3</Text>
        </View>

        <View style={this.styles.contentsLayout}>
          <Text>선택한 메뉴 : {this.props.bridge.selectedMenu}</Text>
          <Text>정답 : 3</Text>

          <Text>설명 : {}</Text>
        </View>

        <Button
          style={this.styles.button}
          onPress={() => this.props.bridge.nextPage(3)}
        >
          ->
        </Button>
      </View>
    );
  }

  styles = {
    titleLayout: {
      width: "100%",
      height: 61,
      backgroundColor: "#369bde",
      alignContent: "center"
    },
    title: {
      flexDirection: "row",
      flex: 1,
      height: 61,
      color: "white",
      alignSelf: "center",
      marginTop: 20
    },
    contentsLayout: {
      width: "100%",
      height: 300,
      backgroundColor: "pink"
    },
    button: {
      flexDirection: "row",
      flex: 1,
      width: 100,
      alignSelf: "flex-end",
      backgroundColor: "black",
      color: "white"
    }
  };
}
