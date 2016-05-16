'use strict';

var React = require('react-native');
var PropTypes = React.PropTypes;

var {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} = React;

var CheckBox = React.createClass({
  propTypes: {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  },

  getDefaultProps() {
    return {
      checked: false,
    };
  },

  onChange() {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  },

  render() {
    var source = require('./img/ic_action_toggle_check_box_outline_blank.png');

    if (this.props.checked) {
      source = require('./img/ic_action_toggle_check_box.png');
    }

    var container = (
      <View style={styles.container}>
        <Image
          style={styles.checkbox}
          source={source}/>
      </View>
    );

    return (
      <TouchableHighlight onPress={this.onChange} underlayColor='white'>
        {container}
      </TouchableHighlight>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  checkbox: {
    width: 28,
    height: 28,
  },
});

module.exports = CheckBox;
