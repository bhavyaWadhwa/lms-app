// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var UrlUtils = require("../../../shared/utils/UrlUtils.bs.js");
var ListUtils = require("../../../shared/utils/ListUtils.bs.js");

function str(prim) {
  return prim;
}

var initialState = {
  url: "",
  errors: /* [] */0
};

function validate(url) {
  var urlLength = url.length;
  if (UrlUtils.isInvalid(false, url) && urlLength > 0) {
    return /* :: */[
            "does not look like a valid URL",
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

function reducer(_state, action) {
  if (action) {
    var url = action[0];
    return {
            url: url,
            errors: validate(url)
          };
  } else {
    return initialState;
  }
}

function updateUrl(send, typingCB, $$event) {
  var value = $$event.target.value.trim();
  Curry._1(typingCB, value.length !== 0);
  return Curry._1(send, /* UpdateUrl */[value]);
}

function isDisabled(state) {
  var _someUrl = state.url;
  if (_someUrl === "") {
    return true;
  } else {
    return ListUtils.isNotEmpty(state.errors);
  }
}

function attachUrl(state, send, attachUrlCB, $$event) {
  $$event.preventDefault();
  if (!isDisabled(state)) {
    Curry._1(attachUrlCB, state.url);
  }
  return Curry._1(send, /* ResetForm */0);
}

function CoursesCurriculum__UrlForm(Props) {
  var attachUrlCB = Props.attachUrlCB;
  var typingCB = Props.typingCB;
  var match = React.useReducer(reducer, initialState);
  var send = match[1];
  var state = match[0];
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "flex items-center flex-wrap"
                }, React.createElement("input", {
                      className: "mt-2 cursor-pointer truncate h-10 border border-grey-400 flex px-4 items-center font-semibold rounded text-sm flex-grow mr-2",
                      id: "attachment_url",
                      placeholder: "Type full URL starting with https://...",
                      type: "text",
                      value: state.url,
                      onChange: (function (param) {
                          return updateUrl(send, typingCB, param);
                        })
                    }), React.createElement("button", {
                      className: "mt-2 bg-indigo-600 hover:bg-gray-500 text-white text-sm font-semibold py-2 px-6 focus:outline-none",
                      disabled: isDisabled(state),
                      onClick: (function (param) {
                          return attachUrl(state, send, attachUrlCB, param);
                        })
                    }, "Attach link")), $$Array.of_list(List.map((function (error) {
                        return React.createElement("div", {
                                    key: error,
                                    className: "mt-2 text-red-600 text-sm"
                                  }, React.createElement("i", {
                                        className: "fas fa-exclamation-circle mr-2"
                                      }), React.createElement("span", undefined, error));
                      }), state.errors)));
}

var make = CoursesCurriculum__UrlForm;

exports.str = str;
exports.initialState = initialState;
exports.validate = validate;
exports.reducer = reducer;
exports.updateUrl = updateUrl;
exports.isDisabled = isDisabled;
exports.attachUrl = attachUrl;
exports.make = make;
/* react Not a pure module */
