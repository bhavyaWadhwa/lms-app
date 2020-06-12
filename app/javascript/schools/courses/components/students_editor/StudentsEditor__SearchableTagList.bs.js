// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var ArrayUtils = require("../../../../shared/utils/ArrayUtils.bs.js");

function str(prim) {
  return prim;
}

function handleClick(tag, send, clickCB) {
  Curry._1(clickCB, tag);
  return Curry._1(send, "");
}

function search(state, send, allowNewTags, selectedTags, unselectedTags, addTagCB) {
  var normalizedString = state.trim().replace(new RegExp("\\s+", "g"), " ");
  if (normalizedString === "") {
    return [];
  } else {
    var allTags = $$Array.map($$String.lowercase_ascii, $$Array.append(selectedTags, unselectedTags));
    var initial = allowNewTags && !$$Array.mem($$String.lowercase_ascii(normalizedString), allTags) ? [React.createElement("span", {
              key: normalizedString,
              className: "inline-flex cursor-pointer items-center bg-primary-100 border border-dashed border-primary-500 text-primary-700 hover:shadow-md hover:text-primary-800 rounded-lg px-2 py-px mt-1 mr-2 text-xs overflow-hidden",
              title: "Add new tag " + normalizedString,
              onMouseDown: (function (_e) {
                  Curry._1(addTagCB, normalizedString);
                  return Curry._1(send, "");
                })
            }, normalizedString, React.createElement("i", {
                  className: "fas fa-plus ml-1 text-sm text-primary-600"
                }))] : [];
    var searchResults = $$Array.map((function (tag) {
            return React.createElement("span", {
                        key: tag,
                        className: "inline-flex cursor-pointer items-center bg-gray-200 border border-gray-500 text-gray-900 hover:shadow hover:border-primary-500 hover:bg-primary-100 hover:text-primary-600 rounded-lg px-2 py-px mt-1 mr-1 text-xs overflow-hidden",
                        title: "Pick tag " + tag,
                        onMouseDown: (function (_e) {
                            Curry._1(addTagCB, tag);
                            return Curry._1(send, "");
                          })
                      }, tag);
          }), ArrayUtils.copyAndSort($$String.compare, unselectedTags.filter((function (tag) {
                    return $$String.lowercase_ascii(tag).includes($$String.lowercase_ascii(normalizedString));
                  }))));
    return $$Array.append(searchResults, initial);
  }
}

function reducer(_state, searchString) {
  return searchString;
}

function StudentsEditor__SearchableTagList(Props) {
  var unselectedTags = Props.unselectedTags;
  var selectedTags = Props.selectedTags;
  var addTagCB = Props.addTagCB;
  var removeTagCB = Props.removeTagCB;
  var allowNewTags = Props.allowNewTags;
  var match = React.useReducer(reducer, "");
  var send = match[1];
  var state = match[0];
  var results = search(state, send, allowNewTags, selectedTags, unselectedTags, addTagCB);
  return React.createElement("div", {
              className: "mt-2"
            }, ArrayUtils.isNotEmpty(selectedTags) ? React.createElement("div", {
                    className: "flex flex-wrap"
                  }, $$Array.map((function (tag) {
                          return React.createElement("div", {
                                      key: tag,
                                      className: "flex items-center bg-gray-200 border border-gray-500 rounded-lg mt-1 mr-1 text-xs text-gray-900 overflow-hidden"
                                    }, React.createElement("span", {
                                          className: "px-2 py-px"
                                        }, tag), React.createElement("span", {
                                          className: "flex items-center px-2 h-full cursor-pointer px-2 text-gray-700 hover:text-black hover:bg-gray-300 border-l border-gray-400",
                                          title: "Remove tag " + tag,
                                          onClick: (function (_e) {
                                              Curry._1(removeTagCB, tag);
                                              return Curry._1(send, "");
                                            })
                                        }, React.createElement("i", {
                                              className: "fas fa-times"
                                            })));
                        }), ArrayUtils.copyAndSort($$String.compare, selectedTags))) : null, React.createElement("input", {
                  className: "appearance-none block bg-white leading-snug border border-gray-400 rounded w-full py-3 px-4 mt-2 focus:outline-none focus:bg-white focus:border-gray-500",
                  id: "tags",
                  placeholder: allowNewTags ? "Search for, or add new tags" : "Select tags",
                  type: "text",
                  value: state,
                  onChange: (function ($$event) {
                      return Curry._1(send, $$event.target.value);
                    })
                }), ArrayUtils.isNotEmpty(results) ? React.createElement("div", {
                    className: "flex flex-wrap border border-gray-400 bg-white mt-1 rounded-lg shadow-lg searchable-tag-list__dropdown relative px-4 pt-2 pb-3"
                  }, results) : null);
}

var make = StudentsEditor__SearchableTagList;

exports.str = str;
exports.handleClick = handleClick;
exports.search = search;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
