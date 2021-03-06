// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function onWindowClick(showDropdown, setShowDropdown, _event) {
  if (showDropdown) {
    return Curry._1(setShowDropdown, (function (param) {
                  return false;
                }));
  } else {
    return /* () */0;
  }
}

function toggleDropdown(setShowDropdown, $$event) {
  $$event.stopPropagation();
  return Curry._1(setShowDropdown, (function (showDropdown) {
                return !showDropdown;
              }));
}

function containerClasses(className) {
  return "dropdown inline-block relative text-sm " + className;
}

function Dropdown(Props) {
  var selected = Props.selected;
  var contents = Props.contents;
  var rightOpt = Props.right;
  var classNameOpt = Props.className;
  var right = rightOpt !== undefined ? rightOpt : false;
  var className = classNameOpt !== undefined ? classNameOpt : "w-full md:w-auto";
  var match = React.useState((function () {
          return false;
        }));
  var setShowDropdown = match[1];
  var showDropdown = match[0];
  React.useEffect((function () {
          var curriedFunction = function (param) {
            return onWindowClick(showDropdown, setShowDropdown, param);
          };
          var removeEventListener = function (param) {
            window.removeEventListener("click", curriedFunction);
            return /* () */0;
          };
          if (showDropdown) {
            window.addEventListener("click", curriedFunction);
            return removeEventListener;
          } else {
            removeEventListener(/* () */0);
            return ;
          }
        }), [showDropdown]);
  return React.createElement("div", {
              className: "dropdown inline-block relative text-sm " + className,
              onClick: (function (param) {
                  return toggleDropdown(setShowDropdown, param);
                })
            }, selected, showDropdown ? React.createElement("ul", {
                    className: "dropdown__list bg-white overflow-y-auto shadow-lg rounded mt-1 border border-gray-400 absolute overflow-hidden min-w-full md:w-auto z-30 " + (
                      right ? "right-0" : "left-0"
                    )
                  }, $$Array.mapi((function (index, content) {
                          return React.createElement("li", {
                                      key: "dropdown-" + String(index),
                                      className: "cursor-pointer block text-sm font-semibold text-gray-900 border-b border-gray-200 bg-white hover:text-primary-500 hover:bg-gray-200 md:whitespace-no-wrap"
                                    }, content);
                        }), contents)) : null);
}

var make = Dropdown;

exports.onWindowClick = onWindowClick;
exports.toggleDropdown = toggleDropdown;
exports.containerClasses = containerClasses;
exports.make = make;
/* react Not a pure module */
