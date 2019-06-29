import React, { Component } from "react";

import { View, Text, Button } from "reactxp";

export class Page4 extends Component {
  render() {
    return (
      <View>
        <View style={this.styles.titleLayout}>
          <Text style={this.styles.title}>Noom : 4</Text>
        </View>
        <View style={this.styles.contentsLayout} />

        <Button
          style={this.styles.button}
          onPress={() => this.props.bridge.nextPage(4)}
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
