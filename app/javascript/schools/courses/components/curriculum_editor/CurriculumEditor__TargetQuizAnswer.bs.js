// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../../../../shared/Icon.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var CurriculumEditor__AnswerOption = require("../../types/curriculum_editor/CurriculumEditor__AnswerOption.bs.js");

function str(prim) {
  return prim;
}

function correctAnswerOptionClasses(bool) {
  return "relative mb-2 overflow-hidden " + (
          bool ? "quiz-maker__answer-option-correct" : ""
        );
}

function CurriculumEditor__TargetQuizAnswer(Props) {
  var answerOption = Props.answerOption;
  var updateAnswerOptionCB = Props.updateAnswerOptionCB;
  var removeAnswerOptionCB = Props.removeAnswerOptionCB;
  var canBeDeleted = Props.canBeDeleted;
  var markAsCorrectCB = Props.markAsCorrectCB;
  var answerOptionId = Props.answerOptionId;
  return React.createElement("div", {
              className: correctAnswerOptionClasses(CurriculumEditor__AnswerOption.correctAnswer(answerOption))
            }, CurriculumEditor__AnswerOption.correctAnswer(answerOption) ? React.createElement("div", {
                    className: "quiz-maker__answer-option-pointer flex justify-center items-center quiz-maker__answer-option-pointer--correct"
                  }, React.createElement(Icon.make, {
                        className: "if i-check-light text-xs"
                      })) : React.createElement("div", {
                    className: "quiz-maker__answer-option-pointer cursor-pointer",
                    onClick: (function (_event) {
                        _event.preventDefault();
                        return Curry._1(markAsCorrectCB, CurriculumEditor__AnswerOption.id(answerOption));
                      })
                  }, null), React.createElement("div", {
                  className: "quiz-maker__answer-option-answer flex flex-col bg-white border border-gray-400 rounded-lg ml-12",
                  id: answerOptionId + "-block"
                }, React.createElement("div", {
                      className: "flex"
                    }, React.createElement("textarea", {
                          className: "appearance-none block w-full bg-white text-gray-800 text-sm rounded-lg px-4 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                          id: answerOptionId,
                          placeholder: "Answer option (supports markdown)",
                          value: CurriculumEditor__AnswerOption.answer(answerOption),
                          onChange: (function ($$event) {
                              return Curry._2(updateAnswerOptionCB, CurriculumEditor__AnswerOption.id(answerOption), CurriculumEditor__AnswerOption.updateAnswer($$event.target.value, answerOption));
                            })
                        }), React.createElement("button", {
                          className: CurriculumEditor__AnswerOption.correctAnswer(answerOption) ? "w-28 flex-shrink-0 border-l border-gray-400 text-green-600 font-semibold cursor-default focus:outline-none text-xs py-1 px-2" : "w-28 flex-shrink-0 border-l border-gray-400 text-gray-800 hover:text-gray-900 focus:outline-none text-xs py-1 px-2",
                          type: "button",
                          onClick: (function (_event) {
                              _event.preventDefault();
                              return Curry._1(markAsCorrectCB, CurriculumEditor__AnswerOption.id(answerOption));
                            })
                        }, CurriculumEditor__AnswerOption.correctAnswer(answerOption) ? "Correct Answer" : "Mark as correct"), canBeDeleted ? React.createElement("button", {
                            className: "flex-shrink-0 border-l border-gray-400 text-gray-600 hover:text-gray-900 focus:outline-none text-xs py-1 px-3",
                            title: "Remove this answer option",
                            type: "button",
                            onClick: (function ($$event) {
                                $$event.preventDefault();
                                return Curry._1(removeAnswerOptionCB, CurriculumEditor__AnswerOption.id(answerOption));
                              })
                          }, React.createElement("i", {
                                className: "fas fa-trash-alt text-sm"
                              })) : null)));
}

var make = CurriculumEditor__TargetQuizAnswer;

exports.str = str;
exports.correctAnswerOptionClasses = correctAnswerOptionClasses;
exports.make = make;
/* Icon Not a pure module */
