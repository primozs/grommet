// (C) Copyright 2014-2015 Hewlett-Packard Development Company

'use strict';

var React = require('react');
var ReactIntl = require('react-intl');
var FormattedMessage = ReactIntl.FormattedMessage;

var CLASS_ROOT = "control-icon";

var Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string,
    colorIndex: React.PropTypes.string,
    large: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      a11yTitleId: 'checkbox-title'
    };
  },

  render: function render() {
    var classes = [CLASS_ROOT, CLASS_ROOT + '-checkbox'];
    if (this.props.large) {
      classes.push(CLASS_ROOT + "--large");
    }
    if (this.props.colorIndex) {
      classes.push("color-index-" + this.props.colorIndex);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    var titleLabel = typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "checkbox";
    var a11yTitle = React.createElement(FormattedMessage, { id: titleLabel, defaultMessage: titleLabel });

    return React.createElement(
      'svg',
      { version: '1.1', viewBox: '0 0 48 48', width: '48px', height: '48px', className: classes.join(' '), 'aria-labelledby': this.props.a11yTitleId },
      React.createElement(
        'title',
        { id: this.props.a11yTitleId },
        a11yTitle
      ),
      React.createElement(
        'g',
        { id: 'checkbox' },
        React.createElement('rect', { id: '_x2E_svg_38_', x: '0', y: '0', fill: 'none', width: '48', height: '48' }),
        React.createElement('rect', { x: '14', y: '14', fill: 'none', stroke: '#231F20', strokeWidth: '2', strokeMiterlimit: '10', width: '20', height: '20' })
      )
    );
  }

});

module.exports = Icon;