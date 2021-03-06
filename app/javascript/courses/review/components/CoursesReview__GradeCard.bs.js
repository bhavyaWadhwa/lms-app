// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../../../shared/Icon.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FaIcon = require("../../../shared/components/FaIcon.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var $$String = require("bs-platform/lib/js/string.js");
var DateFns = require("../../../shared/utils/DateFns.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var DomUtils = require("../../../shared/utils/DomUtils.bs.js");
var HelpIcon = require("../../../shared/components/HelpIcon.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ArrayUtils = require("../../../shared/utils/ArrayUtils.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var GradeLabel = require("../../../shared/types/GradeLabel.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var OptionUtils = require("../../../shared/utils/OptionUtils.bs.js");
var GraphqlQuery = require("../../../shared/utils/GraphqlQuery.bs.js");
var DisablingCover = require("../../../shared/components/DisablingCover.bs.js");
var MarkdownEditor = require("../../../shared/components/MarkdownEditor.bs.js");
var EvaluationCriterion = require("../../../shared/types/EvaluationCriterion.bs.js");
var CoursesReview__Grade = require("../types/CoursesReview__Grade.bs.js");
var SubmissionChecklistItem = require("../types/SubmissionChecklistItem.bs.js");
var SubmissionChecklistShow = require("./SubmissionChecklistShow.bs.js");
var CoursesReview__FeedbackEditor = require("./CoursesReview__FeedbackEditor.bs.js");
var CoursesReview__OverlaySubmission = require("../types/CoursesReview__OverlaySubmission.bs.js");

((require("./CoursesReview__GradeCard.css")));

function str(prim) {
  return prim;
}

function reducer(state, action) {
  if (typeof action === "number") {
    if (action === /* BeginSaving */0) {
      return {
              grades: state.grades,
              newFeedback: state.newFeedback,
              saving: true,
              checklist: state.checklist,
              note: state.note
            };
    } else {
      return {
              grades: state.grades,
              newFeedback: state.newFeedback,
              saving: false,
              checklist: state.checklist,
              note: state.note
            };
    }
  } else {
    switch (action.tag | 0) {
      case /* UpdateFeedback */0 :
          return {
                  grades: state.grades,
                  newFeedback: action[0],
                  saving: state.saving,
                  checklist: state.checklist,
                  note: state.note
                };
      case /* UpdateGrades */1 :
          return {
                  grades: action[0],
                  newFeedback: state.newFeedback,
                  saving: state.saving,
                  checklist: state.checklist,
                  note: state.note
                };
      case /* UpdateChecklist */2 :
          return {
                  grades: state.grades,
                  newFeedback: state.newFeedback,
                  saving: state.saving,
                  checklist: action[0],
                  note: state.note
                };
      case /* UpdateNote */3 :
          return {
                  grades: state.grades,
                  newFeedback: state.newFeedback,
                  saving: state.saving,
                  checklist: state.checklist,
                  note: action[0]
                };
      
    }
  }
}

function passed(grades, evaluationCriteria) {
  return ArrayUtils.isEmpty(grades.filter((function (g) {
                    var passGrade = EvaluationCriterion.passGrade(ArrayUtils.unsafeFind((function (ec) {
                                return EvaluationCriterion.id(ec) === CoursesReview__Grade.evaluationCriterionId(g);
                              }), "CoursesReview__GradeCard: Unable to find evaluation criterion with id - " + CoursesReview__Grade.evaluationCriterionId(g), evaluationCriteria));
                    return CoursesReview__Grade.value(g) < passGrade;
                  })));
}

var ppx_printed_query = "mutation CreateGradingMutation($submissionId: ID!, $feedback: String, $grades: [GradeInput!]!, $note: String, $checklist: JSON!)  {\ncreateGrading(submissionId: $submissionId, feedback: $feedback, grades: $grades, note: $note, checklist: $checklist)  {\nsuccess  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "createGrading");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "success");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeBoolean(value$3);
      tmp$1 = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$3));
    } else {
      tmp$1 = Js_exn.raiseError("graphql_ppx: Field success on type CreateGradingPayload is missing");
    }
    tmp = {
      success: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field createGrading on type Mutation is missing");
  }
  return {
          createGrading: tmp
        };
}

function json_of_GradeInput(value) {
  return Js_dict.fromArray([
                /* tuple */[
                  "evaluationCriterionId",
                  value.evaluationCriterionId
                ],
                /* tuple */[
                  "grade",
                  value.grade
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function make(submissionId, feedback, grades, note, checklist, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "submissionId",
                    submissionId
                  ],
                  /* tuple */[
                    "feedback",
                    feedback !== undefined ? feedback : null
                  ],
                  /* tuple */[
                    "grades",
                    grades.map(json_of_GradeInput)
                  ],
                  /* tuple */[
                    "note",
                    note !== undefined ? note : null
                  ],
                  /* tuple */[
                    "checklist",
                    checklist
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var submissionId = variables.submissionId;
  var feedback = variables.feedback;
  var grades = variables.grades;
  var note = variables.note;
  var checklist = variables.checklist;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "submissionId",
                    submissionId
                  ],
                  /* tuple */[
                    "feedback",
                    feedback !== undefined ? feedback : null
                  ],
                  /* tuple */[
                    "grades",
                    grades.map(json_of_GradeInput)
                  ],
                  /* tuple */[
                    "note",
                    note !== undefined ? note : null
                  ],
                  /* tuple */[
                    "checklist",
                    checklist
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(submissionId, feedback, grades, note, checklist, param) {
  return Js_dict.fromArray([
                /* tuple */[
                  "submissionId",
                  submissionId
                ],
                /* tuple */[
                  "feedback",
                  feedback !== undefined ? feedback : null
                ],
                /* tuple */[
                  "grades",
                  grades.map(json_of_GradeInput)
                ],
                /* tuple */[
                  "note",
                  note !== undefined ? note : null
                ],
                /* tuple */[
                  "checklist",
                  checklist
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, submissionId, feedback, grades, note, checklist, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    /* tuple */[
                      "submissionId",
                      submissionId
                    ],
                    /* tuple */[
                      "feedback",
                      feedback !== undefined ? feedback : null
                    ],
                    /* tuple */[
                      "grades",
                      grades.map(json_of_GradeInput)
                    ],
                    /* tuple */[
                      "note",
                      note !== undefined ? note : null
                    ],
                    /* tuple */[
                      "checklist",
                      checklist
                    ]
                  ].filter((function (param) {
                        return !Js_json.test(param[1], /* Null */5);
                      }))));
}

var definition = /* tuple */[
  parse,
  ppx_printed_query,
  definition_002
];

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var CreateGradingMutation = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  json_of_GradeInput: json_of_GradeInput,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

var ppx_printed_query$1 = "mutation UndoGradingMutation($submissionId: ID!)  {\nundoGrading(submissionId: $submissionId)  {\nsuccess  \n}\n\n}\n";

function parse$1(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "undoGrading");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "success");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeBoolean(value$3);
      tmp$1 = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$3));
    } else {
      tmp$1 = Js_exn.raiseError("graphql_ppx: Field success on type UndoGradingPayload is missing");
    }
    tmp = {
      success: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field undoGrading on type Mutation is missing");
  }
  return {
          undoGrading: tmp
        };
}

function make$1(submissionId, param) {
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray([/* tuple */[
                    "submissionId",
                    submissionId
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeWithVariables$1(variables) {
  var submissionId = variables.submissionId;
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray([/* tuple */[
                    "submissionId",
                    submissionId
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeVariables$1(submissionId, param) {
  return Js_dict.fromArray([/* tuple */[
                  "submissionId",
                  submissionId
                ]].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002$1(graphql_ppx_use_json_variables_fn, submissionId, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([/* tuple */[
                      "submissionId",
                      submissionId
                    ]].filter((function (param) {
                        return !Js_json.test(param[1], /* Null */5);
                      }))));
}

var definition$1 = /* tuple */[
  parse$1,
  ppx_printed_query$1,
  definition_002$1
];

function ret_type$1(f) {
  return { };
}

var MT_Ret$1 = { };

var UndoGradingMutation = {
  ppx_printed_query: ppx_printed_query$1,
  query: ppx_printed_query$1,
  parse: parse$1,
  make: make$1,
  makeWithVariables: makeWithVariables$1,
  makeVariables: makeVariables$1,
  definition: definition$1,
  ret_type: ret_type$1,
  MT_Ret: MT_Ret$1
};

function undoGrading(submissionId, send) {
  Curry._1(send, /* BeginSaving */0);
  (function (eta) {
          return GraphqlQuery.sendQuery(undefined, eta);
        })(make$1(submissionId, /* () */0)).then((function (response) {
          if (response.undoGrading.success) {
            DomUtils.reload(/* () */0);
          } else {
            Curry._1(send, /* FinishSaving */1);
          }
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function trimToOption(s) {
  var s$1 = $$String.trim(s);
  if (s$1 === "") {
    return ;
  } else {
    return s$1;
  }
}

function gradeSubmissionQuery(submissionId, state, send, evaluationCriteria, addGradingCB) {
  var jsGradesArray = $$Array.map(CoursesReview__Grade.asJsType, state.grades);
  var checklist = SubmissionChecklistItem.encodeArray(state.checklist);
  Curry._1(send, /* BeginSaving */0);
  var feedback = trimToOption(state.newFeedback);
  var note = OptionUtils.flatMap(trimToOption, state.note);
  (function (eta) {
          return GraphqlQuery.sendQuery(undefined, eta);
        })(make(submissionId, feedback, jsGradesArray, note, checklist, /* () */0)).then((function (response) {
          if (response.createGrading.success) {
            Curry._4(addGradingCB, state.newFeedback, passed(state.grades, evaluationCriteria), state.grades, state.checklist);
          }
          Curry._1(send, /* FinishSaving */1);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function updateGrading(grade, state, send) {
  var newGrades = $$Array.append([grade], state.grades.filter((function (g) {
              return CoursesReview__Grade.evaluationCriterionId(g) !== CoursesReview__Grade.evaluationCriterionId(grade);
            })));
  return Curry._1(send, /* UpdateGrades */Block.__(1, [newGrades]));
}

function handleGradePillClick(evaluationCriterionId, value, state, send, $$event) {
  $$event.preventDefault();
  if (send !== undefined) {
    return updateGrading(CoursesReview__Grade.make(evaluationCriterionId, value), state, send);
  } else {
    return /* () */0;
  }
}

function findEvaluationCriterion(evaluationCriteria, evaluationCriterionId) {
  var match = evaluationCriteria.find((function (ec) {
          return EvaluationCriterion.id(ec) === evaluationCriterionId;
        }));
  if (match !== undefined) {
    return match;
  } else {
    Rollbar.error("Unable to find evaluation Criterion with id: " + (evaluationCriterionId + "in CoursesRevew__GradeCard"));
    return Caml_array.caml_array_get(evaluationCriteria, 0);
  }
}

function gradePillHeader(evaluationCriteriaName, selectedGrade, gradeLabels) {
  return React.createElement("div", {
              className: "flex justify-between"
            }, React.createElement("p", {
                  className: "text-xs font-semibold"
                }, evaluationCriteriaName), React.createElement("p", {
                  className: "text-xs font-semibold"
                }, String(selectedGrade) + ("/" + String(GradeLabel.maxGrade($$Array.to_list(gradeLabels))))));
}

function gradePillClasses(selectedGrade, currentGrade, passgrade, send) {
  var defaultClasses = "course-review-grade-card__grade-pill border-gray-400 py-1 px-2 text-sm flex-1 font-semibold " + (
    send !== undefined ? "cursor-pointer hover:shadow-lg focus:outline-none " + (
        Caml_obj.caml_greaterequal(currentGrade, passgrade) ? "hover:bg-green-500 hover:text-white " : "hover:bg-red-500 hover:text-white "
      ) : ""
  );
  return defaultClasses + (
          Caml_obj.caml_lessequal(currentGrade, selectedGrade) ? (
              Caml_obj.caml_greaterequal(selectedGrade, passgrade) ? "bg-green-500 text-white shadow-lg" : "bg-red-500 text-white shadow-lg"
            ) : "bg-white text-gray-900"
        );
}

function showGradePill(key, evaluationCriterion, gradeValue, passGrade, state, send) {
  return React.createElement("div", {
              key: String(key),
              "aria-label": "evaluation-criterion-" + EvaluationCriterion.id(evaluationCriterion),
              className: "md:pr-8 mt-4"
            }, gradePillHeader(EvaluationCriterion.name(evaluationCriterion), gradeValue, EvaluationCriterion.gradesAndLabels(evaluationCriterion)), React.createElement("div", {
                  className: "course-review-grade-card__grade-bar inline-flex w-full text-center mt-1"
                }, $$Array.map((function (gradeLabel) {
                        var gradeLabelGrade = GradeLabel.grade(gradeLabel);
                        var partial_arg = EvaluationCriterion.id(evaluationCriterion);
                        return React.createElement("div", {
                                    key: String(gradeLabelGrade),
                                    className: gradePillClasses(gradeValue, gradeLabelGrade, passGrade, send),
                                    title: GradeLabel.label(gradeLabel),
                                    onClick: (function (param) {
                                        return handleGradePillClick(partial_arg, gradeLabelGrade, state, send, param);
                                      })
                                  }, send !== undefined ? String(gradeLabelGrade) : null);
                      }), EvaluationCriterion.gradesAndLabels(evaluationCriterion))));
}

function showGrades(grades, evaluationCriteria, state) {
  return React.createElement("div", undefined, $$Array.mapi((function (key, grade) {
                    var gradeEcId = CoursesReview__Grade.evaluationCriterionId(grade);
                    var ec = ArrayUtils.unsafeFind((function (ec) {
                            return EvaluationCriterion.id(ec) === gradeEcId;
                          }), "Unable to find evaluation Criterion with id: " + (gradeEcId + "in CoursesRevew__GradeCard"), evaluationCriteria);
                    return showGradePill(key, ec, CoursesReview__Grade.value(grade), EvaluationCriterion.passGrade(ec), state, undefined);
                  }), CoursesReview__Grade.sort(evaluationCriteria, grades)));
}

function renderGradePills(evaluationCriteria, targetEvaluationCriteriaIds, state, send) {
  return $$Array.mapi((function (key, evaluationCriterionId) {
                var ec = ArrayUtils.unsafeFind((function (e) {
                        return EvaluationCriterion.id(e) === evaluationCriterionId;
                      }), "CoursesReview__GradeCard: Unable to find evaluation criterion with id - " + evaluationCriterionId, evaluationCriteria);
                var grade = state.grades.find((function (g) {
                        return CoursesReview__Grade.evaluationCriterionId(g) === EvaluationCriterion.id(ec);
                      }));
                var gradeValue = grade !== undefined ? CoursesReview__Grade.value(grade) : 0;
                var passGrade = EvaluationCriterion.passGrade(ec);
                return showGradePill(key, ec, gradeValue, passGrade, state, send);
              }), targetEvaluationCriteriaIds);
}

function gradeStatusClasses(color, status) {
  return "w-12 h-10 p-1 mr-2 md:mr-0 md:w-24 md:h-20 rounded md:rounded-lg border flex justify-center items-center bg-" + (color + ("-100 border-" + (color + ("-400 " + (
                  typeof status === "number" && status === 0 ? "course-review-grade-card__status-pulse" : ""
                )))));
}

function submissionStatusIcon(status, overlaySubmission, send) {
  var match = typeof status === "number" ? (
      status !== 0 ? /* tuple */[
          "Not Reviewed",
          "gray"
        ] : /* tuple */[
          "Reviewing",
          "orange"
        ]
    ) : (
      status[0] ? /* tuple */[
          "Passed",
          "green"
        ] : /* tuple */[
          "Failed",
          "red"
        ]
    );
  var color = match[1];
  var match$1 = CoursesReview__OverlaySubmission.evaluatedAt(overlaySubmission);
  var tmp;
  if (match$1 !== undefined && typeof status !== "number") {
    var match$2 = CoursesReview__OverlaySubmission.evaluatorName(overlaySubmission);
    tmp = React.createElement("div", {
          className: "bg-gray-200 block md:flex flex-col w-full justify-between rounded-lg pt-3 mr-2 mt-4 md:mt-0"
        }, React.createElement("div", undefined, React.createElement("p", {
                  className: "text-xs px-3"
                }, "Evaluated By"), React.createElement("p", {
                  className: "text-sm font-semibold px-3 pb-3"
                }, match$2 !== undefined ? match$2 : React.createElement("em", undefined, "Deleted Coach"))), React.createElement("div", {
              className: "text-xs bg-gray-300 flex items-center rounded-b-lg px-3 py-2 md:px-3 md:py-1"
            }, "on " + DateFns.format(Caml_option.valFromOption(match$1), "MMMM d, yyyy")));
  } else {
    tmp = null;
  }
  var match$3 = CoursesReview__OverlaySubmission.evaluatedAt(overlaySubmission);
  return React.createElement("div", {
              "aria-label": "submission-status",
              className: "flex w-full md:w-3/6 flex-col items-center justify-center md:border-l mt-4 md:mt-0"
            }, React.createElement("div", {
                  className: "flex flex-col-reverse md:flex-row items-start md:items-stretch justify-center w-full md:pl-6"
                }, tmp, React.createElement("div", {
                      className: "w-full md:w-24 flex flex-row md:flex-col md:items-center justify-center"
                    }, React.createElement("div", {
                          className: gradeStatusClasses(color, status)
                        }, typeof status === "number" ? (
                            status !== 0 ? React.createElement(Icon.make, {
                                    className: "if i-eye-solid text-xl md:text-4xl text-gray-400"
                                  }) : React.createElement(Icon.make, {
                                    className: "if i-writing-pad-solid text-xl md:text-5xl text-orange-300"
                                  })
                          ) : (
                            status[0] ? React.createElement(Icon.make, {
                                    className: "if i-badge-check-solid text-xl md:text-5xl text-green-500"
                                  }) : React.createElement(FaIcon.make, {
                                    classes: "fas fa-exclamation-triangle text-xl md:text-4xl text-red-500"
                                  })
                          )), React.createElement("p", {
                          className: "text-xs flex items-center justify-center md:block text-center w-full border rounded px-1 py-px font-semibold md:mt-1 border-" + (color + ("-400 bg-" + (color + ("-100 text-" + (color + "-800 ")))))
                        }, match[0]))), match$3 !== undefined && typeof status !== "number" ? React.createElement("div", {
                    className: "mt-4 md:pl-6 w-full"
                  }, React.createElement("button", {
                        className: "btn btn-danger btn-small",
                        onClick: (function (param) {
                            return undoGrading(CoursesReview__OverlaySubmission.id(overlaySubmission), send);
                          })
                      }, React.createElement("i", {
                            className: "fas fa-undo"
                          }), React.createElement("span", {
                            className: "ml-2"
                          }, "Undo Grading"))) : null);
}

function gradeSubmission(submissionId, state, send, evaluationCriteria, addGradingCB, status, $$event) {
  $$event.preventDefault();
  if (typeof status === "number") {
    return /* () */0;
  } else {
    return gradeSubmissionQuery(submissionId, state, send, evaluationCriteria, addGradingCB);
  }
}

function showFeedbackForm(grades, reviewChecklist, updateReviewChecklistCB, state, send, targetId) {
  if (grades.length !== 0) {
    return null;
  } else {
    return React.createElement(CoursesReview__FeedbackEditor.make, {
                feedback: state.newFeedback,
                updateFeedbackCB: (function (feedback) {
                    return Curry._1(send, /* UpdateFeedback */Block.__(0, [feedback]));
                  }),
                label: "Add Your Feedback",
                reviewChecklist: reviewChecklist,
                updateReviewChecklistCB: updateReviewChecklistCB,
                checklistVisible: true,
                targetId: targetId
              });
  }
}

function reviewButtonDisabled(status) {
  if (typeof status === "number") {
    return true;
  } else {
    return false;
  }
}

function computeStatus(overlaySubmission, selectedGrades, evaluationCriteria) {
  var match = CoursesReview__OverlaySubmission.passedAt(overlaySubmission);
  var match$1 = ArrayUtils.isNotEmpty(CoursesReview__OverlaySubmission.grades(overlaySubmission));
  if (match !== undefined) {
    return /* Graded */[true];
  } else if (match$1) {
    return /* Graded */[false];
  } else if (Caml_obj.caml_equal(selectedGrades, [])) {
    return /* Ungraded */1;
  } else if (selectedGrades.length !== evaluationCriteria.length) {
    return /* Grading */0;
  } else {
    return /* Graded */[passed(selectedGrades, evaluationCriteria)];
  }
}

function submitButtonText(feedback, grades) {
  var match = feedback !== "";
  ArrayUtils.isNotEmpty(grades);
  if (match) {
    return "Save grades & send feedback";
  } else {
    return "Save grades";
  }
}

function noteForm(overlaySubmission, teamSubmission, note, send) {
  var _someGrades = CoursesReview__OverlaySubmission.grades(overlaySubmission);
  if (_someGrades.length !== 0) {
    return null;
  } else {
    var match = teamSubmission ? /* tuple */[
        "team",
        " This submission is from a team, so a note added here will be posted to the report of all students in the team."
      ] : /* tuple */[
        "student",
        ""
      ];
    var noteAbout = match[0];
    var help = React.createElement(HelpIcon.make, {
          className: "ml-1",
          children: "Notes can be used to keep track of a " + (noteAbout + ("'s progress. These notes are shown only to coaches in a student's report." + match[1]))
        });
    var textareaId = "note-for-submission-" + CoursesReview__OverlaySubmission.id(overlaySubmission);
    return React.createElement("div", {
                className: "text-sm"
              }, React.createElement("h5", {
                    className: "font-semibold text-sm flex items-center"
                  }, React.createElement("i", {
                        className: "far fa-sticky-note text-gray-800 text-base"
                      }), note !== undefined ? React.createElement("span", {
                          className: "ml-2 md:ml-3 tracking-wide"
                        }, React.createElement("label", {
                              htmlFor: textareaId
                            }, "Write a Note"), help) : React.createElement("div", {
                          className: "ml-2 md:ml-3 tracking-wide flex justify-between items-center w-full"
                        }, React.createElement("span", undefined, React.createElement("span", undefined, "Would you like to write a note about this " + (noteAbout + "?")), help), React.createElement("button", {
                              className: "btn btn-small btn-primary-ghost ml-1",
                              onClick: (function (param) {
                                  return Curry._1(send, /* UpdateNote */Block.__(3, [""]));
                                })
                            }, "Write a Note"))), note !== undefined ? React.createElement("div", {
                      className: "ml-6 md:ml-7 mt-2"
                    }, React.createElement(MarkdownEditor.make, {
                          value: note,
                          onChange: (function (value) {
                              return Curry._1(send, /* UpdateNote */Block.__(3, [value]));
                            }),
                          profile: /* Permissive */2,
                          textareaId: textareaId,
                          maxLength: 10000,
                          placeholder: "Did you notice something while reviewing this submission?"
                        })) : null);
  }
}

function CoursesReview__GradeCard(Props) {
  var overlaySubmission = Props.overlaySubmission;
  var teamSubmission = Props.teamSubmission;
  var evaluationCriteria = Props.evaluationCriteria;
  var reviewChecklist = Props.reviewChecklist;
  var addGradingCB = Props.addGradingCB;
  var updateReviewChecklistCB = Props.updateReviewChecklistCB;
  var targetId = Props.targetId;
  var targetEvaluationCriteriaIds = Props.targetEvaluationCriteriaIds;
  var match = React.useReducer(reducer, {
        grades: [],
        newFeedback: "",
        saving: false,
        checklist: CoursesReview__OverlaySubmission.checklist(overlaySubmission),
        note: undefined
      });
  var send = match[1];
  var state = match[0];
  var status = computeStatus(overlaySubmission, state.grades, evaluationCriteria);
  var match$1 = CoursesReview__OverlaySubmission.grades(overlaySubmission);
  var updateChecklistCB = match$1.length !== 0 ? undefined : (function (checklist) {
        return Curry._1(send, /* UpdateChecklist */Block.__(2, [checklist]));
      });
  var pending = ArrayUtils.isEmpty(CoursesReview__OverlaySubmission.grades(overlaySubmission));
  var grades = CoursesReview__OverlaySubmission.grades(overlaySubmission);
  var match$2 = CoursesReview__OverlaySubmission.grades(overlaySubmission);
  var tmp;
  if (match$2.length !== 0) {
    tmp = null;
  } else {
    var partial_arg = CoursesReview__OverlaySubmission.id(overlaySubmission);
    tmp = React.createElement("div", {
          className: "bg-white pt-4 mr-4 ml-4 md:mr-6 md:ml-13"
        }, React.createElement("button", {
              className: "btn btn-success btn-large w-full border border-green-600",
              disabled: reviewButtonDisabled(status),
              onClick: (function (param) {
                  return gradeSubmission(partial_arg, state, send, evaluationCriteria, addGradingCB, status, param);
                })
            }, submitButtonText(state.newFeedback, state.grades)));
  }
  return React.createElement(DisablingCover.make, {
              disabled: state.saving,
              children: null
            }, React.createElement("div", undefined, React.createElement("div", {
                      className: "pt-2 pb-6 px-4 md:px-6 bg-gray-100 border-b"
                    }, React.createElement(SubmissionChecklistShow.make, {
                          checklist: state.checklist,
                          updateChecklistCB: updateChecklistCB,
                          pending: pending
                        })), showFeedbackForm(CoursesReview__OverlaySubmission.grades(overlaySubmission), reviewChecklist, updateReviewChecklistCB, state, send, targetId), React.createElement("div", {
                      className: "w-full px-4 pt-4 md:px-6 md:pt-6"
                    }, noteForm(overlaySubmission, teamSubmission, state.note, send), React.createElement("h5", {
                          className: "font-semibold text-sm flex items-center mt-4 md:mt-6"
                        }, React.createElement(Icon.make, {
                              className: "if i-tachometer-regular text-gray-800 text-base"
                            }), React.createElement("span", {
                              className: "ml-2 md:ml-3 tracking-wide"
                            }, "Grade Card")), React.createElement("div", {
                          className: "flex md:flex-row flex-col border md:ml-7 bg-gray-100 p-2 md:p-4 rounded-lg mt-2"
                        }, React.createElement("div", {
                              className: "w-full md:w-3/6"
                            }, grades.length !== 0 ? showGrades(grades, evaluationCriteria, state) : renderGradePills(evaluationCriteria, targetEvaluationCriteriaIds, state, send)), submissionStatusIcon(status, overlaySubmission, send)))), tmp);
}

var make$2 = CoursesReview__GradeCard;

exports.str = str;
exports.reducer = reducer;
exports.passed = passed;
exports.CreateGradingMutation = CreateGradingMutation;
exports.UndoGradingMutation = UndoGradingMutation;
exports.undoGrading = undoGrading;
exports.trimToOption = trimToOption;
exports.gradeSubmissionQuery = gradeSubmissionQuery;
exports.updateGrading = updateGrading;
exports.handleGradePillClick = handleGradePillClick;
exports.findEvaluationCriterion = findEvaluationCriterion;
exports.gradePillHeader = gradePillHeader;
exports.gradePillClasses = gradePillClasses;
exports.showGradePill = showGradePill;
exports.showGrades = showGrades;
exports.renderGradePills = renderGradePills;
exports.gradeStatusClasses = gradeStatusClasses;
exports.submissionStatusIcon = submissionStatusIcon;
exports.gradeSubmission = gradeSubmission;
exports.showFeedbackForm = showFeedbackForm;
exports.reviewButtonDisabled = reviewButtonDisabled;
exports.computeStatus = computeStatus;
exports.submitButtonText = submitButtonText;
exports.noteForm = noteForm;
exports.make = make$2;
/*  Not a pure module */
