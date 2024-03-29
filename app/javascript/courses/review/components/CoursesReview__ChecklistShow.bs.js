// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Checkbox = require("../../../shared/components/Checkbox.bs.js");
var DateTime = require("../../../shared/utils/DateTime.bs.js");
var ListUtils = require("../../../shared/utils/ListUtils.bs.js");
var CoursesReview__ReviewChecklistItem = require("../types/CoursesReview__ReviewChecklistItem.bs.js");
var CoursesReview__ChecklistShowFeedback = require("./CoursesReview__ChecklistShowFeedback.bs.js");
var CoursesReview__ReviewChecklistResult = require("../types/CoursesReview__ReviewChecklistResult.bs.js");

function str(prim) {
  return prim;
}

function selectChecklist(itemIndex, resultIndex, setSelecton) {
  return Curry._1(setSelecton, (function (selection) {
                return List.append(/* :: */[
                            {
                              itemIndex: itemIndex,
                              resultIndex: resultIndex
                            },
                            /* [] */0
                          ], selection);
              }));
}

function unSelectChecklist(itemIndex, resultIndex, setSelecton) {
  return Curry._1(setSelecton, (function (selection) {
                return List.filter((function (item) {
                                return !(item.itemIndex === itemIndex && item.resultIndex === resultIndex);
                              }))(selection);
              }));
}

function checkboxOnChange(itemIndex, resultIndex, setSelecton, $$event) {
  if ($$event.target.checked) {
    return selectChecklist(itemIndex, resultIndex, setSelecton);
  } else {
    return unSelectChecklist(itemIndex, resultIndex, setSelecton);
  }
}

function generateFeedback(reviewChecklist, selection, feedback, updateFeedbackCB) {
  return Curry._1(updateFeedbackCB, feedback + ("\n\n" + $$Array.of_list(List.flatten($$Array.to_list($$Array.mapi((function (i, reviewChecklistItem) {
                                    var resultIndexList = List.map((function (item) {
                                            return item.resultIndex;
                                          }), List.filter((function (selectionItem) {
                                                  return selectionItem.itemIndex === i;
                                                }))(selection));
                                    return List.flatten($$Array.to_list($$Array.mapi((function (index, resultItem) {
                                                          if (List.mem(index, resultIndexList)) {
                                                            var match = CoursesReview__ReviewChecklistResult.feedback(resultItem);
                                                            if (match !== undefined) {
                                                              return /* :: */[
                                                                      match,
                                                                      /* [] */0
                                                                    ];
                                                            } else {
                                                              return /* [] */0;
                                                            }
                                                          } else {
                                                            return /* [] */0;
                                                          }
                                                        }), CoursesReview__ReviewChecklistItem.result(reviewChecklistItem))));
                                  }), reviewChecklist)))).join("\n\n")));
}

function checklistItemCheckedClasses(itemIndex, selection) {
  return "mb-4 px-2 pb-2 md:px-4 border-l-2 border-transparent " + (
          ListUtils.isNotEmpty(List.filter((function (s) {
                        return s.itemIndex === itemIndex;
                      }))(selection)) ? "border-green-400" : ""
        );
}

function checklistItemChecked(itemIndex, resultIndex, selection) {
  return ListUtils.isNotEmpty(List.filter((function (s) {
                      if (s.itemIndex === itemIndex) {
                        return s.resultIndex === resultIndex;
                      } else {
                        return false;
                      }
                    }))(selection));
}

function CoursesReview__ChecklistShow(Props) {
  var reviewChecklist = Props.reviewChecklist;
  var feedback = Props.feedback;
  var updateFeedbackCB = Props.updateFeedbackCB;
  var showEditorCB = Props.showEditorCB;
  var match = React.useState((function () {
          return /* [] */0;
        }));
  var setSelecton = match[1];
  var selection = match[0];
  var match$1 = React.useState((function () {
          return DateTime.randomId(/* () */0) + "-review-checkbox-";
        }));
  var id = match$1[0];
  return React.createElement("div", {
              className: "relative border bg-gray-100 rounded-lg py-2 md:py-4"
            }, React.createElement("div", {
                  className: "absolute right-0 top-0 -mt-9"
                }, React.createElement("button", {
                      className: "flex items-center btn btn-small btn-primary-ghost",
                      onClick: (function (param) {
                          return Curry._1(showEditorCB, /* () */0);
                        })
                    }, React.createElement("i", {
                          className: "far fa-edit"
                        }), React.createElement("span", {
                          className: "ml-2 leading-tight"
                        }, "Edit Checklist"))), $$Array.mapi((function (itemIndex, reviewChecklistItem) {
                    return React.createElement("div", {
                                key: String(itemIndex),
                                "aria-label": "checklist-item-" + String(itemIndex),
                                className: checklistItemCheckedClasses(itemIndex, selection)
                              }, React.createElement("h4", {
                                    className: "text-base font-semibold mt-2 md:mt-0 w-full md:w-4/5"
                                  }, CoursesReview__ReviewChecklistItem.title(reviewChecklistItem)), React.createElement("div", undefined, $$Array.mapi((function (resultIndex, checklistItem) {
                                          return React.createElement("div", {
                                                      key: String(itemIndex) + String(resultIndex),
                                                      "aria-label": "result-item-" + String(resultIndex),
                                                      className: "px-2 md:px-4 mt-2"
                                                    }, React.createElement(Checkbox.make, {
                                                          id: id + (String(itemIndex) + String(resultIndex)),
                                                          label: CoursesReview__ReviewChecklistResult.title(checklistItem),
                                                          onChange: (function (param) {
                                                              return checkboxOnChange(itemIndex, resultIndex, setSelecton, param);
                                                            }),
                                                          checked: checklistItemChecked(itemIndex, resultIndex, selection)
                                                        }), React.createElement("div", {
                                                          className: "pl-7"
                                                        }, React.createElement(CoursesReview__ChecklistShowFeedback.make, {
                                                              feedback: CoursesReview__ReviewChecklistResult.feedback(checklistItem)
                                                            })));
                                        }), CoursesReview__ReviewChecklistItem.result(reviewChecklistItem))));
                  }), reviewChecklist), React.createElement("div", {
                  className: "text-center max-w-xs mx-2 md:mx-auto"
                }, React.createElement("button", {
                      className: "btn btn-primary btn-large w-full ",
                      disabled: ListUtils.isEmpty(selection),
                      onClick: (function (param) {
                          return generateFeedback(reviewChecklist, selection, feedback, updateFeedbackCB);
                        })
                    }, "Generate Feedback")));
}

var make = CoursesReview__ChecklistShow;

exports.str = str;
exports.selectChecklist = selectChecklist;
exports.unSelectChecklist = unSelectChecklist;
exports.checkboxOnChange = checkboxOnChange;
exports.generateFeedback = generateFeedback;
exports.checklistItemCheckedClasses = checklistItemCheckedClasses;
exports.checklistItemChecked = checklistItemChecked;
exports.make = make;
/* react Not a pure module */
