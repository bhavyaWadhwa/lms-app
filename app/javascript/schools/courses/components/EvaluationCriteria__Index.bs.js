// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var EvaluationCriterion = require("../../../shared/types/EvaluationCriterion.bs.js");
var SchoolAdmin__EditorDrawer = require("../../components/SchoolAdmin__EditorDrawer.bs.js");
var EvaluationCriterionEditor__Form = require("./evaluation_criteria_editor/EvaluationCriterionEditor__Form.bs.js");

function str(prim) {
  return prim;
}

function openEditor($$event, evaluationCriterion, setState) {
  $$event.preventDefault();
  return Curry._1(setState, (function (state) {
                return {
                        editorAction: /* ShowEditor */[evaluationCriterion],
                        evaluationCriteria: state.evaluationCriteria
                      };
              }));
}

function showEvaluationCriterion(evaluationCriterion, setState) {
  return React.createElement("div", {
              key: EvaluationCriterion.id(evaluationCriterion),
              className: "flex items-center shadow bg-white rounded-lg mb-4"
            }, React.createElement("div", {
                  className: "course-faculty__list-item flex w-full items-center"
                }, React.createElement("a", {
                      className: "course-faculty__list-item-details flex flex-1 items-center justify-between border border-transparent cursor-pointer rounded-l-lg hover:bg-gray-100 hover:text-primary-500 hover:border-primary-400",
                      title: "Edit " + EvaluationCriterion.name(evaluationCriterion),
                      onClick: (function ($$event) {
                          return openEditor($$event, evaluationCriterion, setState);
                        })
                    }, React.createElement("div", {
                          className: "flex w-full text-sm justify-between"
                        }, React.createElement("span", {
                              className: "flex-1 font-semibold py-5 px-5"
                            }, EvaluationCriterion.name(evaluationCriterion)), React.createElement("span", {
                              className: "ml-2 py-5 px-5 font-semibold text-gray-700 hover:text-primary-500"
                            }, React.createElement("i", {
                                  className: "fas fa-edit text-normal"
                                }), React.createElement("span", {
                                  className: "ml-1"
                                }, "Edit"))))));
}

function addOrUpdateCriterionCB(state, setState, criterion) {
  var updatedCriteria = $$Array.append([criterion], state.evaluationCriteria.filter((function (ec) {
              return EvaluationCriterion.id(ec) !== EvaluationCriterion.id(criterion);
            })));
  return Curry._1(setState, (function (param) {
                return {
                        editorAction: /* Hidden */0,
                        evaluationCriteria: updatedCriteria
                      };
              }));
}

function EvaluationCriteria__Index(Props) {
  var courseId = Props.courseId;
  var evaluationCriteria = Props.evaluationCriteria;
  var match = React.useState((function () {
          return {
                  editorAction: /* Hidden */0,
                  evaluationCriteria: evaluationCriteria
                };
        }));
  var setState = match[1];
  var state = match[0];
  var match$1 = state.editorAction;
  return React.createElement("div", {
              className: "flex-1 flex flex-col overflow-y-scroll bg-gray-200"
            }, match$1 ? React.createElement(SchoolAdmin__EditorDrawer.make, {
                    closeDrawerCB: (function (param) {
                        return Curry._1(setState, (function (state) {
                                      return {
                                              editorAction: /* Hidden */0,
                                              evaluationCriteria: state.evaluationCriteria
                                            };
                                    }));
                      }),
                    children: React.createElement(EvaluationCriterionEditor__Form.make, {
                          evaluationCriterion: match$1[0],
                          courseId: courseId,
                          addOrUpdateCriterionCB: (function (param) {
                              return addOrUpdateCriterionCB(state, setState, param);
                            })
                        })
                  }) : null, React.createElement("div", {
                  className: "flex px-6 py-2 items-center justify-between"
                }, React.createElement("button", {
                      className: "max-w-2xl w-full flex mx-auto items-center justify-center relative bg-white text-primary-500 hover:bg-gray-100 hover:text-primary-600 hover:shadow-lg focus:outline-none border-2 border-gray-400 border-dashed hover:border-primary-300 p-6 rounded-lg mt-8 cursor-pointer",
                      onClick: (function (param) {
                          return Curry._1(setState, (function (state) {
                                        return {
                                                editorAction: /* ShowEditor */[undefined],
                                                evaluationCriteria: state.evaluationCriteria
                                              };
                                      }));
                        })
                    }, React.createElement("i", {
                          className: "fas fa-plus-circle"
                        }), React.createElement("h5", {
                          className: "font-semibold ml-2"
                        }, "Add New Evaluation Criterion"))), React.createElement("div", {
                  className: "px-6 pb-4 mt-5 flex flex-1"
                }, React.createElement("div", {
                      className: "max-w-2xl w-full mx-auto relative"
                    }, $$Array.map((function (ec) {
                            return showEvaluationCriterion(ec, setState);
                          }), EvaluationCriterion.sort(state.evaluationCriteria)))));
}

var make = EvaluationCriteria__Index;

exports.str = str;
exports.openEditor = openEditor;
exports.showEvaluationCriterion = showEvaluationCriterion;
exports.addOrUpdateCriterionCB = addOrUpdateCriterionCB;
exports.make = make;
/* react Not a pure module */
