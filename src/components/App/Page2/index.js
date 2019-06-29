import React, { Component } from "react";

import { View, Text, Button } from "reactxp";

export class Page2 extends Component {
  render() {
    return (
      <View>
        <View style={this.styles.titleLayout}>
          <Text style={this.styles.title}>Noom : 2</Text>
        </View>
        <View style={this.styles.contentsLayout}>
          <Button
            style={this.styles.menu}
            onPress={() => this.props.bridge.selectMenu(1)}
          >
            1번 식단 : 계란 , 견과류, 후라이드치킨
          </Button>

          <Button
            style={this.styles.menu}
            onPress={() => this.props.bridge.selectMenu(2)}
          >
            2번 식단 : 우유 , 소고기 , 흰밥
          </Button>

          <Button
            style={this.styles.menu}
            onPress={() => this.props.bridge.selectMenu(3)}
          >
            3번 식단 : 식빵 , 아보카도 , 돼지고기
          </Button>
        </View>
        <Button
          style={this.styles.button}
          onPress={() => this.props.bridge.nextPage(2)}
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
    menu: {
      flexDirection: "row",
      flex: 1,
      width: "100%",
      height: 100,
      alignSelf: "flex-start",
      color: "black"
    },
    menuSelected: {
      flexDirection: "row",
      flex: 1,
      width: "100%",
      height: 100,
      alignSelf: "flex-start",
      color: "red"
    },
    contentsLayout: {
      width: "100%",
      height: 300,
      backgroundColor: "pink"
    },
    button: {
      flexDirection: "row",
      flex: 1,
      width: 50,
      height: 50,
      alignSelf: "flex-end",
      backgroundColor: "black",
      color: "white"
    }
  };
}
