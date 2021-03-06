// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var OptionUtils = require("../utils/OptionUtils.bs.js");
var WindowUtils = require("../utils/WindowUtils.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function ctrlKey(prim) {
  return prim.ctrlKey;
}

function metaKey(prim) {
  return prim.metaKey;
}

function onConfirm(href, onClick, $$event) {
  $$event.preventDefault();
  ReasonReactRouter.push(href);
  return OptionUtils.mapWithDefault((function (onClick) {
                return Curry._1(onClick, $$event);
              }), /* () */0, onClick);
}

function onCancel($$event) {
  $$event.preventDefault();
  return /* () */0;
}

function handleOnClick(href, confirm, onClick, $$event) {
  var modifierPressed = $$event.ctrlKey || $$event.metaKey;
  if (modifierPressed) {
    return /* () */0;
  } else if (confirm !== undefined) {
    return WindowUtils.confirm((function (param) {
                  $$event.preventDefault();
                  return /* () */0;
                }), confirm, (function (param) {
                  return onConfirm(href, onClick, $$event);
                }));
  } else {
    return onConfirm(href, onClick, $$event);
  }
}

function Link(Props) {
  var href = Props.href;
  var ariaLabel = Props.ariaLabel;
  var className = Props.className;
  var confirm = Props.confirm;
  var id = Props.id;
  var onClick = Props.onClick;
  var title = Props.title;
  var children = Props.children;
  var tmp = {
    href: href,
    onClick: (function (param) {
        return handleOnClick(href, confirm, onClick, param);
      })
  };
  if (ariaLabel !== undefined) {
    tmp["aria-label"] = Caml_option.valFromOption(ariaLabel);
  }
  if (className !== undefined) {
    tmp.className = Caml_option.valFromOption(className);
  }
  if (id !== undefined) {
    tmp.id = Caml_option.valFromOption(id);
  }
  if (title !== undefined) {
    tmp.title = Caml_option.valFromOption(title);
  }
  return React.createElement("a", tmp, children);
}

var make = Link;

exports.ctrlKey = ctrlKey;
exports.metaKey = metaKey;
exports.onConfirm = onConfirm;
exports.onCancel = onCancel;
exports.handleOnClick = handleOnClick;
exports.make = make;
/* react Not a pure module */
