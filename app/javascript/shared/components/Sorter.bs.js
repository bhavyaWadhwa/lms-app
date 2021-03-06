// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../Icon.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FaIcon = require("./FaIcon.bs.js");
var Dropdown = require("./Dropdown.bs.js");

function str(prim) {
  return prim;
}

function Make(Sortable) {
  var dropdown = function (criteria, selectedCriterion, onCriterionChange) {
    var selectedForDropdown = React.createElement("button", {
          className: "inline-flex flex-1 md:flex-auto items-center bg-white leading-relaxed font-semibold border border-gray-400 rounded focus:outline-none focus:bg-white focus:border-gray-500 px-3 py-2 text-xs ",
          title: "Order by " + Curry._1(Sortable.criterion, selectedCriterion)
        }, React.createElement("span", {
              className: "ml-2"
            }, Curry._1(Sortable.criterion, selectedCriterion)), React.createElement("i", {
              className: "fas fa-caret-down ml-3"
            }));
    var dropDownContents = $$Array.map((function (criterion) {
            return React.createElement("button", {
                        key: Curry._1(Sortable.criterion, criterion),
                        className: "inline-flex items-center w-full font-semibold text-xs p-3 text-left focus:outline-none ",
                        title: "Order by " + Curry._1(Sortable.criterion, criterion),
                        onClick: (function (param) {
                            return Curry._1(onCriterionChange, criterion);
                          })
                      }, React.createElement(Icon.make, {
                            className: "if i-clock-regular text-sm if-fw text-gray-700"
                          }), React.createElement("span", {
                            className: "ml-2"
                          }, Curry._1(Sortable.criterion, criterion)));
          }), criteria.filter((function (criterion) {
                return Curry._1(Sortable.criterion, criterion) !== Curry._1(Sortable.criterion, selectedCriterion);
              })));
    return React.createElement(Dropdown.make, {
                selected: selectedForDropdown,
                contents: dropDownContents
              });
  };
  var directionIconClasses = function (criterionType, direction) {
    if (criterionType >= -703661335) {
      if (direction >= 235215128) {
        return "fas fa-sort-amount-down-alt";
      } else {
        return "fas fa-sort-amount-up-alt";
      }
    } else if (direction >= 235215128) {
      return "fas fa-sort-alpha-down-alt";
    } else {
      return "fas fa-sort-alpha-down";
    }
  };
  var Sorter$Make = function (Props) {
    var criteria = Props.criteria;
    var selectedCriterion = Props.selectedCriterion;
    var direction = Props.direction;
    var onDirectionChange = Props.onDirectionChange;
    var onCriterionChange = Props.onCriterionChange;
    return React.createElement("div", {
                className: "flex mt-1"
              }, criteria.length > 1 ? dropdown(criteria, selectedCriterion, onCriterionChange) : React.createElement("div", {
                      className: "inline-flex flex-1 md:flex-auto items-center bg-gray-100 leading-relaxed font-semibold text-gray-700 border border-gray-400 rounded focus:outline-none px-3 py-2 text-xs ",
                      title: "Order by " + Curry._1(Sortable.criterion, selectedCriterion)
                    }, React.createElement("span", undefined, Curry._1(Sortable.criterion, selectedCriterion))), React.createElement("span", {
                    className: "flex ml-1"
                  }, React.createElement("button", {
                        className: "bg-white px-3 py-1 rounded border border-gray-400 text-gray-800 hover:bg-gray-200 hover:text-primary-500 text-sm",
                        title: "toggle-sort-order",
                        onClick: (function (param) {
                            return Curry._1(onDirectionChange, direction >= 235215128 ? /* Ascending */-800424520 : /* Descending */235215128);
                          })
                      }, React.createElement(FaIcon.make, {
                            classes: directionIconClasses(Curry._1(Sortable.criterionType, selectedCriterion), direction)
                          }))));
  };
  return {
          dropdown: dropdown,
          directionIconClasses: directionIconClasses,
          make: Sorter$Make
        };
}

exports.str = str;
exports.Make = Make;
/* Icon Not a pure module */
