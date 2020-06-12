// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Radio = require("../../../shared/components/Radio.bs.js");
var React = require("react");
var PfIcon = require("../../../packages/pf-icon/src/PfIcon.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var UrlUtils = require("../../../shared/utils/UrlUtils.bs.js");
var OptionUtils = require("../../../shared/utils/OptionUtils.bs.js");
var MarkdownEditor = require("../../../shared/components/MarkdownEditor.bs.js");
var CoursesCurriculum__FileForm = require("./CoursesCurriculum__FileForm.bs.js");
var CoursesCurriculum__ChecklistItem = require("../types/CoursesCurriculum__ChecklistItem.bs.js");

function str(prim) {
  return prim;
}

function kindIconClasses(result) {
  switch (result.tag | 0) {
    case /* Files */0 :
        return "if i-file-regular md:text-base text-gray-800 if-fw";
    case /* Link */1 :
        return "if i-link-regular md:text-base text-gray-800 if-fw";
    case /* ShortText */2 :
        return "if i-short-text-regular md:text-base text-gray-800 if-fw";
    case /* LongText */3 :
        return "if i-long-text-regular md:text-base text-gray-800 if-fw";
    case /* MultiChoice */4 :
        return "if i-check-circle-alt-regular md:text-base text-gray-800 if-fw";
    
  }
}

function computeId(index, checklistItem) {
  return String(index) + ("-" + CoursesCurriculum__ChecklistItem.kindAsString(checklistItem));
}

function notBlank(string) {
  return $$String.trim(string) !== "";
}

function placeholder(id, checklistItem) {
  var title = CoursesCurriculum__ChecklistItem.title(checklistItem);
  var optional = CoursesCurriculum__ChecklistItem.optional(checklistItem);
  return React.createElement("div", {
              className: "flex items-center"
            }, React.createElement(PfIcon.make, {
                  className: kindIconClasses(CoursesCurriculum__ChecklistItem.result(checklistItem))
                }), React.createElement("label", {
                  className: "font-semibold text-sm pl-2 tracking-wide",
                  htmlFor: id
                }, title + (
                  optional ? " (optional)" : ""
                )));
}

function showError(message, active) {
  if (active) {
    return React.createElement("div", {
                className: "mt-1 px-1 py-px rounded text-xs font-semibold text-red-600 bg-red-100 inline-flex items-center"
              }, React.createElement("span", {
                    className: "mr-2"
                  }, React.createElement("i", {
                        className: "fas fa-exclamation-triangle"
                      })), React.createElement("span", undefined, message));
  } else {
    return null;
  }
}

function showLink(value, id, updateResultCB) {
  return React.createElement("div", undefined, React.createElement("input", {
                  className: "cursor-pointer truncate h-10 border border-gray-400 focus:outline-none focus:border-primary-400 focus:shadow-inner px-4 items-center font-semibold rounded text-sm mr-2 block w-full",
                  id: id,
                  placeholder: "Type full URL starting with https://...",
                  type: "text",
                  value: value,
                  onChange: (function (e) {
                      return Curry._1(updateResultCB, /* Link */Block.__(1, [e.target.value]));
                    })
                }), showError("This doesn't look like a valid URL.", UrlUtils.isInvalid(true, value)));
}

function showShortText(value, id, updateResultCB) {
  return React.createElement("div", undefined, React.createElement("input", {
                  className: "cursor-pointer truncate h-10 border border-gray-400 focus:outline-none focus:border-primary-400 focus:shadow-inner px-4 items-center font-semibold rounded text-sm mr-2 block w-full",
                  id: id,
                  maxLength: 250,
                  placeholder: "Add a short text",
                  type: "text",
                  value: value,
                  onChange: (function (e) {
                      return Curry._1(updateResultCB, /* ShortText */Block.__(2, [e.target.value]));
                    })
                }), showError("Answer should be less than 250 characters", !CoursesCurriculum__ChecklistItem.validShortText(value) && $$String.trim(value) !== ""));
}

function longTextWarning(value) {
  var currentLength = value.length;
  var showWarning = $$String.trim(value) !== "" && currentLength > 4500;
  var colors = currentLength < 4900 ? "text-orange-700 bg-orange-100" : "text-red-600 bg-red-100";
  if (showWarning) {
    return React.createElement("div", {
                className: "flex justify-between items-center mt-1"
              }, React.createElement("div", {
                    className: "hidden md:inline px-2 py-px rounded text-xs font-semibold inline-flex items-center " + colors
                  }, React.createElement("span", {
                        className: "mr-2"
                      }, React.createElement("i", {
                            className: "fas fa-exclamation-triangle"
                          })), React.createElement("span", undefined, "Please keep your answer to less than 5000 characters in length.")), React.createElement("div", {
                    className: "flex-shrink-1 text-tiny font-semibold px-1 py-px border border-transparent rounded " + colors
                  }, String(currentLength), " / 5000"));
  } else {
    return null;
  }
}

function updateLongText(updateResultCB, value) {
  return Curry._1(updateResultCB, /* LongText */Block.__(3, [value]));
}

function showLongText(value, id, updateResultCB) {
  return React.createElement("div", undefined, React.createElement(MarkdownEditor.make, {
                  value: value,
                  onChange: (function (param) {
                      return Curry._1(updateResultCB, /* LongText */Block.__(3, [param]));
                    }),
                  profile: /* QuestionAndAnswer */1,
                  textareaId: id,
                  maxLength: 5000
                }), longTextWarning(value));
}

function checkboxOnChange(choices, itemIndex, updateResultCB, $$event) {
  if ($$event.target.checked) {
    return Curry._1(updateResultCB, /* MultiChoice */Block.__(4, [
                  choices,
                  itemIndex
                ]));
  } else {
    return Curry._1(updateResultCB, /* MultiChoice */Block.__(4, [
                  choices,
                  undefined
                ]));
  }
}

function showMultiChoice(choices, choice, id, updateResultCB) {
  return React.createElement("div", undefined, React.createElement("div", undefined, $$Array.mapi((function (index, label) {
                        var checked = OptionUtils.mapWithDefault((function (i) {
                                return i === index;
                              }), false, choice);
                        return React.createElement(Radio.make, {
                                    id: id + String(index),
                                    label: label,
                                    onChange: (function (param) {
                                        return checkboxOnChange(choices, index, updateResultCB, param);
                                      }),
                                    checked: checked,
                                    key: String(index)
                                  });
                      }), choices)));
}

function attachFile(updateResultCB, attachingCB, files, id, filename) {
  Curry._1(attachingCB, false);
  return Curry._1(updateResultCB, /* Files */Block.__(0, [$$Array.append([CoursesCurriculum__ChecklistItem.makeFile(id, filename)], files)]));
}

function removeFile(updateResultCB, files, id) {
  return Curry._1(updateResultCB, /* Files */Block.__(0, [files.filter((function (a) {
                        return CoursesCurriculum__ChecklistItem.fileId(a) !== id;
                      }))]));
}

function showFiles(files, preview, id, attachingCB, updateResultCB) {
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "flex flex-wrap",
                  id: id
                }, $$Array.map((function (file) {
                        return React.createElement("div", {
                                    key: "file-" + CoursesCurriculum__ChecklistItem.fileId(file),
                                    "aria-label": "file-" + CoursesCurriculum__ChecklistItem.filename(file),
                                    className: "w-1/3 pr-2 pb-2",
                                    target: "_blank"
                                  }, React.createElement("div", {
                                        className: "flex justify-between border overflow-hidden rounded border-pink-400 bg-white text-pink-700 hover:text-pink-700"
                                      }, React.createElement("div", {
                                            className: "flex"
                                          }, React.createElement("span", {
                                                className: "flex w-10 justify-center items-center p-2 bg-pink-700 text-white"
                                              }, React.createElement("i", {
                                                    className: "far fa-file"
                                                  })), React.createElement("span", {
                                                className: "course-show-attachments__attachment-title rounded text-xs font-semibold inline-block whitespace-normal truncate w-32 md:w-38 pl-3 pr-2 py-2 leading-loose"
                                              }, CoursesCurriculum__ChecklistItem.filename(file))), React.createElement("button", {
                                            className: "flex w-8 justify-center items-center p-2 cursor-pointer bg-gray-100 border-l text-gray-700 hover:bg-gray-200 hover:text-gray-900",
                                            title: "Remove " + CoursesCurriculum__ChecklistItem.filename(file),
                                            onClick: (function (param) {
                                                return removeFile(updateResultCB, files, CoursesCurriculum__ChecklistItem.fileId(file));
                                              })
                                          }, React.createElement(PfIcon.make, {
                                                className: "if i-times-regular text-sm"
                                              }))));
                      }), files)), files.length < 3 ? React.createElement(CoursesCurriculum__FileForm.make, {
                    attachFileCB: (function (param, param$1) {
                        return attachFile(updateResultCB, attachingCB, files, param, param$1);
                      }),
                    attachingCB: attachingCB,
                    preview: preview
                  }) : null);
}

function CoursesCurriculum__SubmissionItem(Props) {
  var index = Props.index;
  var checklistItem = Props.checklistItem;
  var updateResultCB = Props.updateResultCB;
  var attachingCB = Props.attachingCB;
  var preview = Props.preview;
  var id = computeId(index, checklistItem);
  var match = CoursesCurriculum__ChecklistItem.result(checklistItem);
  var tmp;
  switch (match.tag | 0) {
    case /* Files */0 :
        tmp = showFiles(match[0], preview, id, attachingCB, updateResultCB);
        break;
    case /* Link */1 :
        tmp = showLink(match[0], id, updateResultCB);
        break;
    case /* ShortText */2 :
        tmp = showShortText(match[0], id, updateResultCB);
        break;
    case /* LongText */3 :
        tmp = showLongText(match[0], id, updateResultCB);
        break;
    case /* MultiChoice */4 :
        tmp = showMultiChoice(match[0], match[1], id, updateResultCB);
        break;
    
  }
  return React.createElement("div", {
              "aria-label": id,
              className: "mt-4"
            }, placeholder(id, checklistItem), React.createElement("div", {
                  className: "md:pl-7 pt-2 pr-0 pb-4"
                }, tmp));
}

var make = CoursesCurriculum__SubmissionItem;

exports.str = str;
exports.kindIconClasses = kindIconClasses;
exports.computeId = computeId;
exports.notBlank = notBlank;
exports.placeholder = placeholder;
exports.showError = showError;
exports.showLink = showLink;
exports.showShortText = showShortText;
exports.longTextWarning = longTextWarning;
exports.updateLongText = updateLongText;
exports.showLongText = showLongText;
exports.checkboxOnChange = checkboxOnChange;
exports.showMultiChoice = showMultiChoice;
exports.attachFile = attachFile;
exports.removeFile = removeFile;
exports.showFiles = showFiles;
exports.make = make;
/* Radio Not a pure module */
