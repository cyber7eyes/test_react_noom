import React, { Component } from "react";

import { View, Text, Button } from "reactxp";

export class Page1 extends Component {
  render() {
    return (
      <View>
        <View style={this.styles.titleLayout}>
          <Text style={this.styles.title}>Noom : 1</Text>
        </View>
        <View style={this.styles.contentsLayout}>
          <Text style={this.styles.contents}>
            성공적인 다이어트를 위한 필수 요소는 정확한 정보
          </Text>
        </View>
        <Button
          style={this.styles.button}
          onPress={() => this.props.bridge.nextPage(1)}
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
    contents: {
      flexDirection: "row",
      flex: 1,
      height: 61,
      color: "black",
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
