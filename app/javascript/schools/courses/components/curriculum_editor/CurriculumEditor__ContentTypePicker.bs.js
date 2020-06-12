// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ContentBlock = require("../../../../shared/types/ContentBlock.bs.js");

function str(prim) {
  return prim;
}

function buttonClasses(visibility, staticMode) {
  return "add-content-block py-3 cursor-pointer" + (
          visibility || staticMode ? " add-content-block--open" : " "
        );
}

function button(sortIndex, newContentBlockCB, kindOfButton) {
  var match;
  switch (kindOfButton) {
    case /* MarkdownButton */0 :
        match = /* tuple */[
          "fab fa-markdown",
          "Markdown",
          (function (param) {
              return ContentBlock.makeMarkdownBlock("");
            })
        ];
        break;
    case /* FileButton */1 :
        match = /* tuple */[
          "far fa-file-alt",
          "File",
          (function (param) {
              return ContentBlock.makeFileBlock("", "", "");
            })
        ];
        break;
    case /* ImageButton */2 :
        match = /* tuple */[
          "far fa-image",
          "Image",
          (function (param) {
              return ContentBlock.makeImageBlock("", "");
            })
        ];
        break;
    case /* EmbedButton */3 :
        match = /* tuple */[
          "fas fa-code",
          "Embed",
          (function (param) {
              return ContentBlock.makeEmbedBlock("", "");
            })
        ];
        break;
    
  }
  var newBlock = match[2];
  var buttonText = match[1];
  return React.createElement("div", {
              key: buttonText,
              className: "add-content-block__block-content-type-picker px-3 pt-4 pb-3 flex-1 text-center text-primary-200",
              onClick: (function ($$event) {
                  $$event.preventDefault();
                  return Curry._2(newContentBlockCB, sortIndex, Curry._1(newBlock, /* () */0));
                })
            }, React.createElement("i", {
                  className: match[0] + " text-2xl"
                }), React.createElement("p", {
                  className: "font-semibold"
                }, buttonText));
}

function CurriculumEditor__ContentTypePicker(Props) {
  var sortIndex = Props.sortIndex;
  var staticMode = Props.staticMode;
  var newContentBlockCB = Props.newContentBlockCB;
  var match = React.useState((function () {
          return false;
        }));
  var setVisibility = match[1];
  var visibility = match[0];
  return React.createElement("div", {
              className: buttonClasses(visibility, staticMode)
            }, staticMode ? React.createElement("div", {
                    className: "h-10"
                  }) : React.createElement("div", {
                    className: "add-content-block__plus-button-container relative",
                    onClick: (function (_event) {
                        return Curry._1(setVisibility, (function (param) {
                                      return !visibility;
                                    }));
                      })
                  }, React.createElement("div", {
                        className: "add-content-block__plus-button bg-gray-200 hover:bg-gray-300 relative rounded-lg border border-gray-500 w-10 h-10 flex justify-center items-center mx-auto z-20",
                        id: "add-block-" + String(sortIndex),
                        title: "Add block"
                      }, React.createElement("i", {
                            className: "fas fa-plus text-base add-content-block__plus-button-icon"
                          }))), React.createElement("div", {
                  className: "add-content-block__block-content-type text-sm hidden shadow-lg mx-auto relative bg-primary-900 rounded-lg -mt-4 z-10",
                  id: "content-type-picker-" + String(sortIndex)
                }, $$Array.map((function (param) {
                        return button(sortIndex, newContentBlockCB, param);
                      }), [
                      /* MarkdownButton */0,
                      /* ImageButton */2,
                      /* EmbedButton */3,
                      /* FileButton */1
                    ])));
}

var make = CurriculumEditor__ContentTypePicker;

exports.str = str;
exports.buttonClasses = buttonClasses;
exports.button = button;
exports.make = make;
/* react Not a pure module */
