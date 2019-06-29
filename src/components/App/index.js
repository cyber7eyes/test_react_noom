import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { nextPage, selectMenu } from "../../store/tutorial/actions";

import { View, Button } from "reactxp";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";

class App extends Component {
  props = {
    nextPage: PropTypes.func.isRequired,
    selectMenu: PropTypes.func.isRequired,
    currentPage: PropTypes.number,
    selectedMenu: PropTypes.number,
    menus: PropTypes.any
  };

  render() {
    if (this.props.currentPage === 1) {
      return <Page1 bridge={this.props} />;
    } else if (this.props.currentPage === 2) {
      return <Page2 bridge={this.props} />;
    } else if (this.props.currentPage === 3) {
      return <Page3 bridge={this.props} />;
    } else if (this.props.currentPage === 4) {
      return <Page4 bridge={this.props} />;
    } else {
      return (
        <View>
          <Button
            style={this.styles.container}
            onPress={() => this.props.nextPage(0)}
          >
            Go to Purchase
          </Button>
        </View>
      );
    }
  }

  styles = {
    container: {
      width: "100%",
      height: 61,
      alignItems: "center",
      backgroundColor: "black",
      color: "white"
    }
  };
}

const mapStateToProps = state => ({
  currentPage: state.tutorial.currentPage,
  selectedMenu: state.tutorial.selectedMenu,
  menus: state.tutorial.menus
});

export default connect(
  mapStateToProps,
  { nextPage, selectMenu }
)(App);
