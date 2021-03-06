// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var MarkdownEditor = require("../../../../shared/components/MarkdownEditor.bs.js");
var CurriculumEditor__AnswerOption = require("../../types/curriculum_editor/CurriculumEditor__AnswerOption.bs.js");
var CurriculumEditor__QuizQuestion = require("../../types/curriculum_editor/CurriculumEditor__QuizQuestion.bs.js");
var CurriculumEditor__TargetQuizAnswer = require("./CurriculumEditor__TargetQuizAnswer.bs.js");

function str(prim) {
  return prim;
}

function CurriculumEditor__TargetQuizQuestion(Props) {
  var questionNumber = Props.questionNumber;
  var quizQuestion = Props.quizQuestion;
  var updateQuizQuestionCB = Props.updateQuizQuestionCB;
  var removeQuizQuestionCB = Props.removeQuizQuestionCB;
  var questionCanBeRemoved = Props.questionCanBeRemoved;
  var answerOptionId = function (questionId, index) {
    return questionId + ("-answer-option-" + String(index + 1 | 0));
  };
  var updateQuestion = function (question) {
    return Curry._2(updateQuizQuestionCB, CurriculumEditor__QuizQuestion.id(quizQuestion), CurriculumEditor__QuizQuestion.updateQuestion(question, quizQuestion));
  };
  var updateAnswerOptionCB = function (id, answer) {
    return Curry._2(updateQuizQuestionCB, CurriculumEditor__QuizQuestion.id(quizQuestion), CurriculumEditor__QuizQuestion.replace(id, answer, quizQuestion));
  };
  var removeAnswerOptionCB = function (id) {
    return Curry._2(updateQuizQuestionCB, CurriculumEditor__QuizQuestion.id(quizQuestion), CurriculumEditor__QuizQuestion.removeAnswerOption(id, quizQuestion));
  };
  var markAsCorrectCB = function (id) {
    return Curry._2(updateQuizQuestionCB, CurriculumEditor__QuizQuestion.id(quizQuestion), CurriculumEditor__QuizQuestion.markAsCorrect(id, quizQuestion));
  };
  var canBeDeleted = CurriculumEditor__QuizQuestion.answerOptions(quizQuestion).length > 2;
  var questionId = "quiz-question-" + questionNumber;
  return React.createElement("div", {
              className: "quiz-maker__question-container p-4 bg-gray-100 rounded-lg border mt-4"
            }, React.createElement("div", {
                  className: "flex items-center justify-between"
                }, React.createElement("label", {
                      className: "block tracking-wide uppercase text-gray-800 text-sm font-bold",
                      htmlFor: questionId
                    }, "Question " + questionNumber), React.createElement("div", {
                      className: "quiz-maker__question-remove-button invisible"
                    }, questionCanBeRemoved ? React.createElement("button", {
                            className: "flex items-center flex-shrink-0 bg-white p-2 rounded-lg text-gray-600 hover:text-gray-700 text-xs",
                            title: "Remove Quiz Question",
                            type: "button",
                            onClick: (function ($$event) {
                                $$event.preventDefault();
                                return Curry._1(removeQuizQuestionCB, CurriculumEditor__QuizQuestion.id(quizQuestion));
                              })
                          }, React.createElement("i", {
                                className: "fas fa-trash-alt text-lg"
                              })) : null)), React.createElement("div", {
                  className: "my-2 bg-white"
                }, React.createElement(MarkdownEditor.make, {
                      value: CurriculumEditor__QuizQuestion.question(quizQuestion),
                      onChange: updateQuestion,
                      profile: /* Permissive */2,
                      textareaId: questionId,
                      placeholder: "Type the question here (supports markdown)"
                    })), React.createElement("div", {
                  className: "quiz-maker__answers-container relative"
                }, $$Array.mapi((function (index, answerOption) {
                        return React.createElement(CurriculumEditor__TargetQuizAnswer.make, {
                                    answerOption: answerOption,
                                    updateAnswerOptionCB: updateAnswerOptionCB,
                                    removeAnswerOptionCB: removeAnswerOptionCB,
                                    canBeDeleted: canBeDeleted,
                                    markAsCorrectCB: markAsCorrectCB,
                                    answerOptionId: answerOptionId(questionId, index),
                                    key: CurriculumEditor__AnswerOption.id(answerOption)
                                  });
                      }), CurriculumEditor__QuizQuestion.answerOptions(quizQuestion)), React.createElement("div", {
                      className: "quiz-maker__add-answer-option cursor-pointer relative",
                      onClick: (function (_event) {
                          _event.preventDefault();
                          return Curry._2(updateQuizQuestionCB, CurriculumEditor__QuizQuestion.id(quizQuestion), CurriculumEditor__QuizQuestion.newAnswerOption(Date.now().toString(), quizQuestion));
                        })
                    }, React.createElement("div", {
                          className: "flex items-center border border-dashed border-primary-500 justify-center text-gray-600 quiz-maker__add-answer-option-pointer quiz-maker__add-answer-option-pointer"
                        }, React.createElement("i", {
                              className: "fas fa-plus"
                            })), React.createElement("a", {
                          className: "quiz-maker__add-answer-option-button flex items-center h-11 text-gray-900 bg-gray-200 border border-dashed border-primary-400 hover:bg-white hover:text-primary-500 hover:shadow-md rounded-lg ml-12 py-3 px-4"
                        }, React.createElement("p", {
                              className: "text-xs"
                            }, "Add another Answer Option")))));
}

var make = CurriculumEditor__TargetQuizQuestion;

exports.str = str;
exports.make = make;
/* react Not a pure module */
