// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var $$String = require("bs-platform/lib/js/string.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function title(t) {
  return t.title;
}

function feedback(t) {
  return t.feedback;
}

function make(title, feedback) {
  return {
          title: title,
          feedback: feedback
        };
}

function makeFromJs(data) {
  return data.map((function (r) {
                return {
                        title: r.title,
                        feedback: r.feedback
                      };
              }));
}

function emptyTemplate(param) {
  return [
          {
            title: "Yes",
            feedback: "Sample feedback for yes"
          },
          {
            title: "No",
            feedback: "Sample feedback for no"
          }
        ];
}

function empty(param) {
  return {
          title: "",
          feedback: undefined
        };
}

function replace(t, index, checklist) {
  return $$Array.mapi((function (resultIndex, result) {
                if (resultIndex === index) {
                  return t;
                } else {
                  return result;
                }
              }), checklist);
}

function updateTitle(title, t, index, checklist) {
  return replace({
              title: title,
              feedback: t.feedback
            }, index, checklist);
}

function updateFeedback(feedback, t, index, checklist) {
  var optionalFeedback = feedback.trim() === "" ? undefined : feedback;
  return replace({
              title: t.title,
              feedback: optionalFeedback
            }, index, checklist);
}

function trim(t) {
  return {
          title: $$String.trim(t.title),
          feedback: t.feedback
        };
}

function encode(t) {
  var title_000 = /* tuple */[
    "title",
    t.title
  ];
  var title = /* :: */[
    title_000,
    /* [] */0
  ];
  var match = t.feedback;
  var feedback = match !== undefined ? /* :: */[
      /* tuple */[
        "feedback",
        match
      ],
      /* [] */0
    ] : /* [] */0;
  return Json_encode.object_(Pervasives.$at(title, feedback));
}

exports.title = title;
exports.feedback = feedback;
exports.make = make;
exports.makeFromJs = makeFromJs;
exports.emptyTemplate = emptyTemplate;
exports.empty = empty;
exports.replace = replace;
exports.updateTitle = updateTitle;
exports.updateFeedback = updateFeedback;
exports.trim = trim;
exports.encode = encode;
/* No side effect */
