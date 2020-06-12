// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var DatePicker = require("./DatePicker");

var make = DatePicker.default;

var JsComponent = {
  make: make
};

function DatePicker$1(Props) {
  var onChange = Props.onChange;
  var selected = Props.selected;
  var id = Props.id;
  var tmp = {
    onChange: (function (date) {
        return Curry._1(onChange, (date == null) ? undefined : Caml_option.some(date));
      })
  };
  if (id !== undefined) {
    tmp.id = Caml_option.valFromOption(id);
  }
  if (selected !== undefined) {
    tmp.selected = Caml_option.valFromOption(selected);
  }
  return React.createElement(make, tmp);
}

var make$1 = DatePicker$1;

exports.JsComponent = JsComponent;
exports.make = make$1;
/* make Not a pure module */
