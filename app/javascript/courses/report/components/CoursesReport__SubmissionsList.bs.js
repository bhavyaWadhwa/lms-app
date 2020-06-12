// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FaIcon = require("../../../shared/components/FaIcon.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Sorter = require("../../../shared/components/Sorter.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ArrayUtils = require("../../../shared/utils/ArrayUtils.bs.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var OptionUtils = require("../../../shared/utils/OptionUtils.bs.js");
var GraphqlQuery = require("../../../shared/utils/GraphqlQuery.bs.js");
var LoadingSpinner = require("../../../shared/components/LoadingSpinner.bs.js");
var SkeletonLoading = require("../../../shared/components/SkeletonLoading.bs.js");
var MultiselectDropdown = require("../../../packages/multiselect-dropdown/src/components/MultiselectDropdown.bs.js");
var CoursesReport__Level = require("../types/CoursesReport__Level.bs.js");
var CoursesReport__Submission = require("../types/CoursesReport__Submission.bs.js");
var CoursesReport__Submissions = require("../types/CoursesReport__Submissions.bs.js");

function str(prim) {
  return prim;
}

var sortBy = {
  criterion: "Submitted At",
  criterionType: /* Number */-703661335
};

function statusString(targetStatus) {
  if (targetStatus !== 479410653) {
    if (targetStatus >= 583419792) {
      return "Passed";
    } else {
      return "Submitted";
    }
  } else {
    return "Failed";
  }
}

var ppx_printed_query = "query StudentsReportSubmissionsQuery($studentId: ID!, $after: String, $status: SubmissionReviewStatus, $levelId: ID, $sortDirection: SortDirection!)  {\nstudentSubmissions(studentId: $studentId, after: $after, first: 20, status: $status, levelId: $levelId, sortDirection: $sortDirection)  {\nnodes  {\nid  \ncreatedAt  \nlevelId  \ntargetId  \npassedAt  \ntitle  \nevaluatorId  \nstudentIds  \nteamTarget  \n}\n\npageInfo  {\nhasNextPage  \nendCursor  \n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "studentSubmissions");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "nodes");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$3);
      tmp$1 = match$2 !== undefined ? undefined : Js_option.getExn(Js_json.decodeArray(value$3)).map((function (value) {
                var match = Js_json.decodeNull(value);
                if (match !== undefined) {
                  return ;
                } else {
                  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                  var match$1 = Js_dict.get(value$1, "id");
                  var tmp;
                  if (match$1 !== undefined) {
                    var value$2 = Caml_option.valFromOption(match$1);
                    var match$2 = Js_json.decodeString(value$2);
                    tmp = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Field id on type StudentSubmission is missing");
                  }
                  var match$3 = Js_dict.get(value$1, "createdAt");
                  var match$4 = Js_dict.get(value$1, "levelId");
                  var tmp$1;
                  if (match$4 !== undefined) {
                    var value$3 = Caml_option.valFromOption(match$4);
                    var match$5 = Js_json.decodeString(value$3);
                    tmp$1 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                  } else {
                    tmp$1 = Js_exn.raiseError("graphql_ppx: Field levelId on type StudentSubmission is missing");
                  }
                  var match$6 = Js_dict.get(value$1, "targetId");
                  var tmp$2;
                  if (match$6 !== undefined) {
                    var value$4 = Caml_option.valFromOption(match$6);
                    var match$7 = Js_json.decodeString(value$4);
                    tmp$2 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
                  } else {
                    tmp$2 = Js_exn.raiseError("graphql_ppx: Field targetId on type StudentSubmission is missing");
                  }
                  var match$8 = Js_dict.get(value$1, "passedAt");
                  var tmp$3;
                  if (match$8 !== undefined) {
                    var value$5 = Caml_option.valFromOption(match$8);
                    var match$9 = Js_json.decodeNull(value$5);
                    tmp$3 = match$9 !== undefined ? undefined : Caml_option.some(value$5);
                  } else {
                    tmp$3 = undefined;
                  }
                  var match$10 = Js_dict.get(value$1, "title");
                  var tmp$4;
                  if (match$10 !== undefined) {
                    var value$6 = Caml_option.valFromOption(match$10);
                    var match$11 = Js_json.decodeString(value$6);
                    tmp$4 = match$11 !== undefined ? match$11 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
                  } else {
                    tmp$4 = Js_exn.raiseError("graphql_ppx: Field title on type StudentSubmission is missing");
                  }
                  var match$12 = Js_dict.get(value$1, "evaluatorId");
                  var tmp$5;
                  if (match$12 !== undefined) {
                    var value$7 = Caml_option.valFromOption(match$12);
                    var match$13 = Js_json.decodeNull(value$7);
                    if (match$13 !== undefined) {
                      tmp$5 = undefined;
                    } else {
                      var match$14 = Js_json.decodeString(value$7);
                      tmp$5 = match$14 !== undefined ? match$14 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$7));
                    }
                  } else {
                    tmp$5 = undefined;
                  }
                  var match$15 = Js_dict.get(value$1, "studentIds");
                  var match$16 = Js_dict.get(value$1, "teamTarget");
                  var tmp$6;
                  if (match$16 !== undefined) {
                    var value$8 = Caml_option.valFromOption(match$16);
                    var match$17 = Js_json.decodeBoolean(value$8);
                    tmp$6 = match$17 !== undefined ? match$17 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$8));
                  } else {
                    tmp$6 = Js_exn.raiseError("graphql_ppx: Field teamTarget on type StudentSubmission is missing");
                  }
                  return {
                          id: tmp,
                          createdAt: match$3 !== undefined ? Caml_option.valFromOption(match$3) : Js_exn.raiseError("graphql_ppx: Field createdAt on type StudentSubmission is missing"),
                          levelId: tmp$1,
                          targetId: tmp$2,
                          passedAt: tmp$3,
                          title: tmp$4,
                          evaluatorId: tmp$5,
                          studentIds: match$15 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$15))).map((function (value) {
                                    var match = Js_json.decodeString(value);
                                    if (match !== undefined) {
                                      return match;
                                    } else {
                                      return Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value));
                                    }
                                  })) : Js_exn.raiseError("graphql_ppx: Field studentIds on type StudentSubmission is missing"),
                          teamTarget: tmp$6
                        };
                }
              }));
    } else {
      tmp$1 = undefined;
    }
    var match$3 = Js_dict.get(value$2, "pageInfo");
    var tmp$2;
    if (match$3 !== undefined) {
      var value$4 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match$3)));
      var match$4 = Js_dict.get(value$4, "hasNextPage");
      var tmp$3;
      if (match$4 !== undefined) {
        var value$5 = Caml_option.valFromOption(match$4);
        var match$5 = Js_json.decodeBoolean(value$5);
        tmp$3 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$5));
      } else {
        tmp$3 = Js_exn.raiseError("graphql_ppx: Field hasNextPage on type PageInfo is missing");
      }
      var match$6 = Js_dict.get(value$4, "endCursor");
      var tmp$4;
      if (match$6 !== undefined) {
        var value$6 = Caml_option.valFromOption(match$6);
        var match$7 = Js_json.decodeNull(value$6);
        if (match$7 !== undefined) {
          tmp$4 = undefined;
        } else {
          var match$8 = Js_json.decodeString(value$6);
          tmp$4 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
        }
      } else {
        tmp$4 = undefined;
      }
      tmp$2 = {
        hasNextPage: tmp$3,
        endCursor: tmp$4
      };
    } else {
      tmp$2 = Js_exn.raiseError("graphql_ppx: Field pageInfo on type StudentSubmissionConnection is missing");
    }
    tmp = {
      nodes: tmp$1,
      pageInfo: tmp$2
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field studentSubmissions on type Query is missing");
  }
  return {
          studentSubmissions: tmp
        };
}

function json_of_SubmissionReviewStatus(value) {
  if (value !== 479410653) {
    if (value >= 583419792) {
      return "Passed";
    } else {
      return "Submitted";
    }
  } else {
    return "Failed";
  }
}

function json_of_SortDirection(value) {
  if (value >= 235215128) {
    return "Descending";
  } else {
    return "Ascending";
  }
}

function make(studentId, after, status, levelId, sortDirection, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "studentId",
                    studentId
                  ],
                  /* tuple */[
                    "after",
                    after !== undefined ? after : null
                  ],
                  /* tuple */[
                    "status",
                    status !== undefined ? json_of_SubmissionReviewStatus(status) : null
                  ],
                  /* tuple */[
                    "levelId",
                    levelId !== undefined ? levelId : null
                  ],
                  /* tuple */[
                    "sortDirection",
                    json_of_SortDirection(sortDirection)
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var studentId = variables.studentId;
  var after = variables.after;
  var status = variables.status;
  var levelId = variables.levelId;
  var sortDirection = variables.sortDirection;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "studentId",
                    studentId
                  ],
                  /* tuple */[
                    "after",
                    after !== undefined ? after : null
                  ],
                  /* tuple */[
                    "status",
                    status !== undefined ? json_of_SubmissionReviewStatus(status) : null
                  ],
                  /* tuple */[
                    "levelId",
                    levelId !== undefined ? levelId : null
                  ],
                  /* tuple */[
                    "sortDirection",
                    json_of_SortDirection(sortDirection)
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(studentId, after, status, levelId, sortDirection, param) {
  return Js_dict.fromArray([
                /* tuple */[
                  "studentId",
                  studentId
                ],
                /* tuple */[
                  "after",
                  after !== undefined ? after : null
                ],
                /* tuple */[
                  "status",
                  status !== undefined ? json_of_SubmissionReviewStatus(status) : null
                ],
                /* tuple */[
                  "levelId",
                  levelId !== undefined ? levelId : null
                ],
                /* tuple */[
                  "sortDirection",
                  json_of_SortDirection(sortDirection)
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, studentId, after, status, levelId, sortDirection, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    /* tuple */[
                      "studentId",
                      studentId
                    ],
                    /* tuple */[
                      "after",
                      after !== undefined ? after : null
                    ],
                    /* tuple */[
                      "status",
                      status !== undefined ? json_of_SubmissionReviewStatus(status) : null
                    ],
                    /* tuple */[
                      "levelId",
                      levelId !== undefined ? levelId : null
                    ],
                    /* tuple */[
                      "sortDirection",
                      json_of_SortDirection(sortDirection)
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

var StudentSubmissionsQuery = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  json_of_SubmissionReviewStatus: json_of_SubmissionReviewStatus,
  json_of_SortDirection: json_of_SortDirection,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function label(t) {
  if (t.tag) {
    return "Status";
  } else {
    return "Level " + String(CoursesReport__Level.number(t[0]));
  }
}

function value(t) {
  if (t.tag) {
    return statusString(t[0]);
  } else {
    return CoursesReport__Level.name(t[0]);
  }
}

function searchString(t) {
  if (t.tag) {
    return "status " + statusString(t[0]);
  } else {
    var level = t[0];
    return "level " + (String(CoursesReport__Level.number(level)) + (" " + CoursesReport__Level.name(level)));
  }
}

function color(t) {
  if (t.tag) {
    var status = t[0];
    if (status !== 479410653) {
      if (status >= 583419792) {
        return "green";
      } else {
        return "blue";
      }
    } else {
      return "red";
    }
  } else {
    return "gray";
  }
}

function level(level$1) {
  return /* Level */Block.__(0, [level$1]);
}

function targetStatus(targetStatus$1) {
  return /* TargetStatus */Block.__(1, [targetStatus$1]);
}

var Selectable = {
  label: label,
  value: value,
  searchString: searchString,
  color: color,
  level: level,
  targetStatus: targetStatus
};

var Multiselect = MultiselectDropdown.Make(Selectable);

function unselected(levels, selectedLevel, selectedStatus) {
  var unselectedLevels = $$Array.map(level, levels.filter((function (level) {
                return CoursesReport__Level.number(level) !== 0;
              })).filter((function (level) {
              return OptionUtils.mapWithDefault((function (selectedLevel) {
                            return CoursesReport__Level.id(level) !== CoursesReport__Level.id(selectedLevel);
                          }), true, selectedLevel);
            })));
  var unselectedStatus = $$Array.map(targetStatus, [
          /* Submitted */-896990053,
          /* Failed */479410653,
          /* Passed */583419792
        ].filter((function (status) {
              return OptionUtils.mapWithDefault((function (selectedStatus) {
                            return status !== selectedStatus;
                          }), true, selectedStatus);
            })));
  return $$Array.append(unselectedStatus, unselectedLevels);
}

function selected(selectedLevel, selectedStatus) {
  var selectedLevel$1 = OptionUtils.mapWithDefault((function (selectedLevel) {
          return [/* Level */Block.__(0, [selectedLevel])];
        }), [], selectedLevel);
  var selectedStatus$1 = OptionUtils.mapWithDefault((function (selectedStatus) {
          return [/* TargetStatus */Block.__(1, [selectedStatus])];
        }), [], selectedStatus);
  return $$Array.append(selectedStatus$1, selectedLevel$1);
}

function onSelectFilter(send, updateSelectedLevelCB, updateSelectedStatusCB, selectable) {
  Curry._1(send, /* UpdateFilterString */[""]);
  if (selectable.tag) {
    return Curry._1(updateSelectedStatusCB, selectable[0]);
  } else {
    return Curry._1(updateSelectedLevelCB, selectable[0]);
  }
}

function onDeselectFilter(updateSelectedLevelCB, updateSelectedStatusCB, selectable) {
  if (selectable.tag) {
    return Curry._1(updateSelectedStatusCB, undefined);
  } else {
    return Curry._1(updateSelectedLevelCB, undefined);
  }
}

function criterion(t) {
  return t.criterion;
}

function criterionType(t) {
  return t.criterionType;
}

var Sortable = {
  criterion: criterion,
  criterionType: criterionType
};

var SubmissionsSorter = Sorter.Make(Sortable);

function submissionsSorter(sortDirection, updateSortDirectionCB) {
  var criteria = [sortBy];
  return React.createElement("div", {
              "aria-label": "Change submissions sorting",
              className: "flex-shrink-0 mt-3 md:mt-0 md:ml-2"
            }, React.createElement("label", {
                  className: "block text-tiny font-semibold uppercase"
                }, "Sort by:"), React.createElement(SubmissionsSorter.make, {
                  criteria: criteria,
                  selectedCriterion: sortBy,
                  direction: sortDirection,
                  onDirectionChange: Curry.__1(updateSortDirectionCB),
                  onCriterionChange: (function (param) {
                      return /* () */0;
                    })
                }));
}

function filterPlaceholder(selectedLevel, selectedStatus) {
  if (selectedLevel !== undefined) {
    if (selectedStatus !== undefined) {
      return "Filter by another level";
    } else {
      return "Filter by another level, or by status";
    }
  } else if (selectedStatus !== undefined) {
    return "Filter by level";
  } else {
    return "Filter by level, or by status";
  }
}

function reducer(state, action) {
  if (typeof action === "number") {
    switch (action) {
      case /* BeginLoadingMore */0 :
          return {
                  loading: /* LoadingMore */2,
                  filterString: state.filterString
                };
      case /* BeginReloading */1 :
          return {
                  loading: /* Reloading */1,
                  filterString: state.filterString
                };
      case /* CompletedLoading */2 :
          return {
                  loading: /* Loaded */0,
                  filterString: state.filterString
                };
      
    }
  } else {
    return {
            loading: state.loading,
            filterString: action[0]
          };
  }
}

function updateStudentSubmissions(send, updateSubmissionsCB, endCursor, hasNextPage, submissions, selectedLevel, selectedStatus, sortDirection, nodes) {
  var updatedSubmissions = $$Array.append(ArrayUtils.flatten(nodes !== undefined ? CoursesReport__Submission.makeFromJs(nodes) : []), submissions);
  var filter = CoursesReport__Submissions.makeFilter(selectedLevel, selectedStatus);
  var submissionsData = CoursesReport__Submissions.make(updatedSubmissions, filter, sortDirection);
  var submissionsData$1 = hasNextPage && endCursor !== undefined ? /* PartiallyLoaded */Block.__(0, [
        submissionsData,
        endCursor
      ]) : /* FullyLoaded */Block.__(1, [submissionsData]);
  Curry._1(updateSubmissionsCB, submissionsData$1);
  return Curry._1(send, /* CompletedLoading */2);
}

function getStudentSubmissions(studentId, cursor, send, level, status, sortDirection, submissions, updateSubmissionsCB) {
  var levelId = Belt_Option.flatMap(level, (function (level) {
          return CoursesReport__Level.id(level);
        }));
  var status$1 = Belt_Option.flatMap(status, (function (status) {
          return status;
        }));
  (function (eta) {
          return GraphqlQuery.sendQuery(undefined, eta);
        })(cursor !== undefined ? make(studentId, cursor, status$1, levelId, sortDirection, /* () */0) : make(studentId, undefined, status$1, levelId, sortDirection, /* () */0)).then((function (response) {
          updateStudentSubmissions(send, updateSubmissionsCB, response.studentSubmissions.pageInfo.endCursor, response.studentSubmissions.pageInfo.hasNextPage, submissions, level, status$1, sortDirection, response.studentSubmissions.nodes);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function showSubmissionStatus(submission) {
  var match = CoursesReport__Submission.status(submission);
  if (match !== 479410653) {
    if (match >= 583419792) {
      return React.createElement("div", {
                  className: "bg-green-100 border border-green-500 flex-shrink-0 leading-normal text-green-800 font-semibold px-3 py-px rounded"
                }, "Passed");
    } else {
      return React.createElement("div", {
                  className: "bg-blue-100 border border-blue-500 flex-shrink-0 leading-normal text-blue-800 font-semibold px-3 py-px rounded"
                }, "Submitted");
    }
  } else {
    return React.createElement("div", {
                className: "bg-red-100 border border-red-500 flex-shrink-0 leading-normal text-red-800 font-semibold px-3 py-px rounded"
              }, "Failed");
  }
}

function submissionCardClasses(submission) {
  var match = CoursesReport__Submission.status(submission);
  return "flex flex-col md:flex-row items-start md:items-center justify-between bg-white border-l-3 p-3 md:py-6 md:px-5 mt-4 cursor-pointer rounded-r-lg shadow hover:border-primary-500 hover:text-primary-500 hover:shadow-md " + (
          match !== 479410653 ? (
              match >= 583419792 ? "border-green-500" : "border-blue-500"
            ) : "border-red-500"
        );
}

function showSubmission(submissions, levels, teamStudentIds) {
  return React.createElement("div", undefined, $$Array.map((function (submission) {
                    var match = CoursesReport__Submission.targetRole(submission);
                    return React.createElement("div", {
                                key: CoursesReport__Submission.id(submission),
                                "aria-label": "student-submission-" + CoursesReport__Submission.id(submission)
                              }, React.createElement("a", {
                                    className: "block relative z-10",
                                    href: "/targets/" + CoursesReport__Submission.targetId(submission),
                                    target: "_blank"
                                  }, React.createElement("div", {
                                        key: CoursesReport__Submission.id(submission),
                                        "aria-label": "student-submission-card-" + CoursesReport__Submission.id(submission),
                                        className: submissionCardClasses(submission)
                                      }, React.createElement("div", {
                                            className: "w-full md:w-3/4"
                                          }, React.createElement("div", {
                                                className: "block text-sm md:pr-2"
                                              }, React.createElement("span", {
                                                    className: "bg-gray-300 text-xs font-semibold px-2 py-px rounded"
                                                  }, CoursesReport__Level.levelLabel(levels, CoursesReport__Submission.levelId(submission))), React.createElement("span", {
                                                    className: "ml-2 font-semibold text-base"
                                                  }, CoursesReport__Submission.title(submission))), React.createElement("div", {
                                                className: "mt-1 ml-px text-xs text-gray-900"
                                              }, React.createElement("span", {
                                                    className: "ml-1"
                                                  }, "Submitted on " + CoursesReport__Submission.createdAtPretty(submission)))), React.createElement("div", {
                                            className: "w-auto md:w-1/4 text-xs flex justify-end mt-2 md:mt-0"
                                          }, showSubmissionStatus(submission)))), match && !Caml_obj.caml_equal(teamStudentIds, match[0]) ? React.createElement("div", {
                                      "aria-label": "Team change notice for submission " + CoursesReport__Submission.id(submission),
                                      className: "w-full text-xs rounded-b bg-indigo-100 text-indigo-700 px-4 pt-3 pb-2 -mt-1 flex flex-1 justify-between items-center"
                                    }, React.createElement("div", {
                                          className: "flex flex-1 justify-start items-start pr-8"
                                        }, React.createElement(FaIcon.make, {
                                              classes: "fas fa-exclamation-triangle text-sm md:text-base mt-1"
                                            }), React.createElement("div", {
                                              className: "inline-block pl-3"
                                            }, "This submission is not considered towards its target's completion; it was a ", React.createElement("span", {
                                                  className: "italic"
                                                }, "team"), " target, and your team changed after you made this submission.")), React.createElement("a", {
                                          className: "flex-shrink-0 px-2 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-200 hover:text-indigo-800 rounded",
                                          href: "/submissions/" + CoursesReport__Submission.id(submission)
                                        }, React.createElement("span", {
                                              className: "hidden md:inline"
                                            }, "View Submission"), React.createElement(FaIcon.make, {
                                              classes: "fas fa-arrow-right ml-2"
                                            }))) : null);
                  }), submissions));
}

function showSubmissions(submissions, levels, teamStudentIds) {
  if (ArrayUtils.isEmpty(submissions)) {
    return React.createElement("div", {
                className: "course-review__reviewed-empty text-lg font-semibold text-center py-4"
              }, React.createElement("h5", {
                    className: "py-4 mt-4 bg-gray-200 text-gray-800 font-semibold"
                  }, "No submissions to show "));
  } else {
    return showSubmission(submissions, levels, teamStudentIds);
  }
}

function CoursesReport__SubmissionsList(Props) {
  var studentId = Props.studentId;
  var levels = Props.levels;
  var submissions = Props.submissions;
  var updateSubmissionsCB = Props.updateSubmissionsCB;
  var teamStudentIds = Props.teamStudentIds;
  var selectedLevel = Props.selectedLevel;
  var selectedStatus = Props.selectedStatus;
  var sortDirection = Props.sortDirection;
  var updateSelectedLevelCB = Props.updateSelectedLevelCB;
  var updateSelectedStatusCB = Props.updateSelectedStatusCB;
  var updateSortDirectionCB = Props.updateSortDirectionCB;
  var match = React.useReducer(reducer, {
        loading: /* Loaded */0,
        filterString: ""
      });
  var send = match[1];
  var state = match[0];
  React.useEffect((function () {
          if (CoursesReport__Submissions.needsReloading(selectedLevel, selectedStatus, sortDirection, submissions)) {
            Curry._1(send, /* BeginReloading */1);
            getStudentSubmissions(studentId, undefined, send, selectedLevel, selectedStatus, sortDirection, [], updateSubmissionsCB);
          }
          return ;
        }), /* tuple */[
        selectedLevel,
        selectedStatus,
        sortDirection
      ]);
  var tmp;
  if (typeof submissions === "number") {
    tmp = SkeletonLoading.multiple(3, SkeletonLoading.card(undefined, /* () */0));
  } else if (submissions.tag) {
    tmp = showSubmissions(submissions[0].submissions, levels, teamStudentIds);
  } else {
    var cursor = submissions[1];
    var submissions$1 = submissions[0].submissions;
    var match$1 = state.loading;
    var tmp$1;
    switch (match$1) {
      case /* Loaded */0 :
          tmp$1 = React.createElement("button", {
                className: "btn btn-primary-ghost cursor-pointer w-full mt-4",
                onClick: (function (param) {
                    Curry._1(send, /* BeginLoadingMore */0);
                    return getStudentSubmissions(studentId, cursor, send, selectedLevel, selectedStatus, sortDirection, submissions$1, updateSubmissionsCB);
                  })
              }, "Load More...");
          break;
      case /* Reloading */1 :
          tmp$1 = null;
          break;
      case /* LoadingMore */2 :
          tmp$1 = SkeletonLoading.multiple(3, SkeletonLoading.card(undefined, /* () */0));
          break;
      
    }
    tmp = React.createElement("div", undefined, showSubmissions(submissions$1, levels, teamStudentIds), tmp$1);
  }
  var tmp$2;
  if (typeof submissions === "number") {
    tmp$2 = null;
  } else {
    var match$2 = state.loading;
    var loading = match$2 === 1;
    tmp$2 = React.createElement(LoadingSpinner.make, {
          loading: loading
        });
  }
  return React.createElement("div", {
              className: "max-w-3xl mx-auto"
            }, React.createElement("div", {
                  className: "md:flex w-full items-start pb-4"
                }, React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement("label", {
                          className: "block text-tiny font-semibold uppercase"
                        }, "Filter by:"), React.createElement(Multiselect.make, {
                          id: "filter",
                          placeholder: filterPlaceholder(selectedLevel, selectedStatus),
                          onChange: (function (filterString) {
                              return Curry._1(send, /* UpdateFilterString */[filterString]);
                            }),
                          value: state.filterString,
                          unselected: unselected(levels, selectedLevel, selectedStatus),
                          selected: selected(selectedLevel, selectedStatus),
                          onSelect: (function (param) {
                              return onSelectFilter(send, updateSelectedLevelCB, updateSelectedStatusCB, param);
                            }),
                          onDeselect: (function (param) {
                              return onDeselectFilter(updateSelectedLevelCB, updateSelectedStatusCB, param);
                            })
                        })), submissionsSorter(sortDirection, updateSortDirectionCB)), React.createElement("div", {
                  "aria-label": "student-submissions"
                }, tmp), tmp$2);
}

var make$1 = CoursesReport__SubmissionsList;

exports.str = str;
exports.sortBy = sortBy;
exports.statusString = statusString;
exports.StudentSubmissionsQuery = StudentSubmissionsQuery;
exports.Selectable = Selectable;
exports.Multiselect = Multiselect;
exports.unselected = unselected;
exports.selected = selected;
exports.onSelectFilter = onSelectFilter;
exports.onDeselectFilter = onDeselectFilter;
exports.Sortable = Sortable;
exports.SubmissionsSorter = SubmissionsSorter;
exports.submissionsSorter = submissionsSorter;
exports.filterPlaceholder = filterPlaceholder;
exports.reducer = reducer;
exports.updateStudentSubmissions = updateStudentSubmissions;
exports.getStudentSubmissions = getStudentSubmissions;
exports.showSubmissionStatus = showSubmissionStatus;
exports.submissionCardClasses = submissionCardClasses;
exports.showSubmission = showSubmission;
exports.showSubmissions = showSubmissions;
exports.make = make$1;
/* Multiselect Not a pure module */
