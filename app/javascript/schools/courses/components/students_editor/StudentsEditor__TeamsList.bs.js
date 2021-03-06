// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Avatar = require("../../../../shared/Avatar.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ArrayUtils = require("../../../../shared/utils/ArrayUtils.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var GraphqlQuery = require("../../../../shared/utils/GraphqlQuery.bs.js");
var SkeletonLoading = require("../../../../shared/components/SkeletonLoading.bs.js");
var StudentsEditor__Page = require("../../types/students_editor/StudentsEditor__Page.bs.js");
var StudentsEditor__Team = require("../../types/students_editor/StudentsEditor__Team.bs.js");
var StudentsEditor__Level = require("../../types/students_editor/StudentsEditor__Level.bs.js");
var StudentsEditor__Filter = require("../../types/students_editor/StudentsEditor__Filter.bs.js");
var StudentsEditor__Student = require("../../types/students_editor/StudentsEditor__Student.bs.js");
var NoStudentsFoundSvg = require("./images/no-students-found.svg");

var notFoundIcon = NoStudentsFoundSvg.default;

function str(prim) {
  return prim;
}

var ppx_printed_query = "query CourseTeamsQuery($courseId: ID!, $levelId: ID, $search: String, $after: String, $tags: [String!], $sortBy: String!)  {\ncourseTeams(courseId: $courseId, levelId: $levelId, search: $search, first: 20, after: $after, tags: $tags, sortBy: $sortBy)  {\nnodes  {\nid  \nname  \nlevelId  \ncoachIds  \nlevelId  \naccessEndsAt  \nstudents  {\nid  \nname  \ntitle  \navatarUrl  \nemail  \ntags  \nexcludedFromLeaderboard  \naffiliation  \n}\n\n}\n\npageInfo  {\nendCursor  \nhasNextPage  \n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "courseTeams");
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
                    tmp = Js_exn.raiseError("graphql_ppx: Field id on type CourseTeam is missing");
                  }
                  var match$3 = Js_dict.get(value$1, "name");
                  var tmp$1;
                  if (match$3 !== undefined) {
                    var value$3 = Caml_option.valFromOption(match$3);
                    var match$4 = Js_json.decodeString(value$3);
                    tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                  } else {
                    tmp$1 = Js_exn.raiseError("graphql_ppx: Field name on type CourseTeam is missing");
                  }
                  var match$5 = Js_dict.get(value$1, "levelId");
                  var tmp$2;
                  if (match$5 !== undefined) {
                    var value$4 = Caml_option.valFromOption(match$5);
                    var match$6 = Js_json.decodeString(value$4);
                    tmp$2 = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
                  } else {
                    tmp$2 = Js_exn.raiseError("graphql_ppx: Field levelId on type CourseTeam is missing");
                  }
                  var match$7 = Js_dict.get(value$1, "coachIds");
                  var match$8 = Js_dict.get(value$1, "levelId");
                  var tmp$3;
                  if (match$8 !== undefined) {
                    var value$5 = Caml_option.valFromOption(match$8);
                    var match$9 = Js_json.decodeString(value$5);
                    tmp$3 = match$9 !== undefined ? match$9 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
                  } else {
                    tmp$3 = Js_exn.raiseError("graphql_ppx: Field levelId on type CourseTeam is missing");
                  }
                  var match$10 = Js_dict.get(value$1, "accessEndsAt");
                  var tmp$4;
                  if (match$10 !== undefined) {
                    var value$6 = Caml_option.valFromOption(match$10);
                    var match$11 = Js_json.decodeNull(value$6);
                    tmp$4 = match$11 !== undefined ? undefined : Caml_option.some(value$6);
                  } else {
                    tmp$4 = undefined;
                  }
                  var match$12 = Js_dict.get(value$1, "students");
                  return {
                          id: tmp,
                          name: tmp$1,
                          levelId: tmp$2,
                          coachIds: match$7 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$7))).map((function (value) {
                                    var match = Js_json.decodeString(value);
                                    if (match !== undefined) {
                                      return match;
                                    } else {
                                      return Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value));
                                    }
                                  })) : Js_exn.raiseError("graphql_ppx: Field coachIds on type CourseTeam is missing"),
                          levelId: tmp$3,
                          accessEndsAt: tmp$4,
                          students: match$12 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$12))).map((function (value) {
                                    var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                                    var match = Js_dict.get(value$1, "id");
                                    var tmp;
                                    if (match !== undefined) {
                                      var value$2 = Caml_option.valFromOption(match);
                                      var match$1 = Js_json.decodeString(value$2);
                                      tmp = match$1 !== undefined ? match$1 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                                    } else {
                                      tmp = Js_exn.raiseError("graphql_ppx: Field id on type CourseStudent is missing");
                                    }
                                    var match$2 = Js_dict.get(value$1, "name");
                                    var tmp$1;
                                    if (match$2 !== undefined) {
                                      var value$3 = Caml_option.valFromOption(match$2);
                                      var match$3 = Js_json.decodeString(value$3);
                                      tmp$1 = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                                    } else {
                                      tmp$1 = Js_exn.raiseError("graphql_ppx: Field name on type CourseStudent is missing");
                                    }
                                    var match$4 = Js_dict.get(value$1, "title");
                                    var tmp$2;
                                    if (match$4 !== undefined) {
                                      var value$4 = Caml_option.valFromOption(match$4);
                                      var match$5 = Js_json.decodeString(value$4);
                                      tmp$2 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
                                    } else {
                                      tmp$2 = Js_exn.raiseError("graphql_ppx: Field title on type CourseStudent is missing");
                                    }
                                    var match$6 = Js_dict.get(value$1, "avatarUrl");
                                    var tmp$3;
                                    if (match$6 !== undefined) {
                                      var value$5 = Caml_option.valFromOption(match$6);
                                      var match$7 = Js_json.decodeNull(value$5);
                                      if (match$7 !== undefined) {
                                        tmp$3 = undefined;
                                      } else {
                                        var match$8 = Js_json.decodeString(value$5);
                                        tmp$3 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
                                      }
                                    } else {
                                      tmp$3 = undefined;
                                    }
                                    var match$9 = Js_dict.get(value$1, "email");
                                    var tmp$4;
                                    if (match$9 !== undefined) {
                                      var value$6 = Caml_option.valFromOption(match$9);
                                      var match$10 = Js_json.decodeString(value$6);
                                      tmp$4 = match$10 !== undefined ? match$10 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
                                    } else {
                                      tmp$4 = Js_exn.raiseError("graphql_ppx: Field email on type CourseStudent is missing");
                                    }
                                    var match$11 = Js_dict.get(value$1, "tags");
                                    var match$12 = Js_dict.get(value$1, "excludedFromLeaderboard");
                                    var tmp$5;
                                    if (match$12 !== undefined) {
                                      var value$7 = Caml_option.valFromOption(match$12);
                                      var match$13 = Js_json.decodeBoolean(value$7);
                                      tmp$5 = match$13 !== undefined ? match$13 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$7));
                                    } else {
                                      tmp$5 = Js_exn.raiseError("graphql_ppx: Field excludedFromLeaderboard on type CourseStudent is missing");
                                    }
                                    var match$14 = Js_dict.get(value$1, "affiliation");
                                    var tmp$6;
                                    if (match$14 !== undefined) {
                                      var value$8 = Caml_option.valFromOption(match$14);
                                      var match$15 = Js_json.decodeNull(value$8);
                                      if (match$15 !== undefined) {
                                        tmp$6 = undefined;
                                      } else {
                                        var match$16 = Js_json.decodeString(value$8);
                                        tmp$6 = match$16 !== undefined ? match$16 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$8));
                                      }
                                    } else {
                                      tmp$6 = undefined;
                                    }
                                    return {
                                            id: tmp,
                                            name: tmp$1,
                                            title: tmp$2,
                                            avatarUrl: tmp$3,
                                            email: tmp$4,
                                            tags: match$11 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$11))).map((function (value) {
                                                      var match = Js_json.decodeString(value);
                                                      if (match !== undefined) {
                                                        return match;
                                                      } else {
                                                        return Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value));
                                                      }
                                                    })) : Js_exn.raiseError("graphql_ppx: Field tags on type CourseStudent is missing"),
                                            excludedFromLeaderboard: tmp$5,
                                            affiliation: tmp$6
                                          };
                                  })) : Js_exn.raiseError("graphql_ppx: Field students on type CourseTeam is missing")
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
      var match$4 = Js_dict.get(value$4, "endCursor");
      var tmp$3;
      if (match$4 !== undefined) {
        var value$5 = Caml_option.valFromOption(match$4);
        var match$5 = Js_json.decodeNull(value$5);
        if (match$5 !== undefined) {
          tmp$3 = undefined;
        } else {
          var match$6 = Js_json.decodeString(value$5);
          tmp$3 = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
        }
      } else {
        tmp$3 = undefined;
      }
      var match$7 = Js_dict.get(value$4, "hasNextPage");
      var tmp$4;
      if (match$7 !== undefined) {
        var value$6 = Caml_option.valFromOption(match$7);
        var match$8 = Js_json.decodeBoolean(value$6);
        tmp$4 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$6));
      } else {
        tmp$4 = Js_exn.raiseError("graphql_ppx: Field hasNextPage on type PageInfo is missing");
      }
      tmp$2 = {
        endCursor: tmp$3,
        hasNextPage: tmp$4
      };
    } else {
      tmp$2 = Js_exn.raiseError("graphql_ppx: Field pageInfo on type CourseTeamConnection is missing");
    }
    tmp = {
      nodes: tmp$1,
      pageInfo: tmp$2
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field courseTeams on type Query is missing");
  }
  return {
          courseTeams: tmp
        };
}

function make(courseId, levelId, search, after, tags, sortBy, param) {
  var tmp;
  if (tags !== undefined) {
    var v = tags;
    tmp = v.map((function (prim) {
            return prim;
          }));
  } else {
    tmp = null;
  }
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "courseId",
                    courseId
                  ],
                  /* tuple */[
                    "levelId",
                    levelId !== undefined ? levelId : null
                  ],
                  /* tuple */[
                    "search",
                    search !== undefined ? search : null
                  ],
                  /* tuple */[
                    "after",
                    after !== undefined ? after : null
                  ],
                  /* tuple */[
                    "tags",
                    tmp
                  ],
                  /* tuple */[
                    "sortBy",
                    sortBy
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var courseId = variables.courseId;
  var levelId = variables.levelId;
  var search = variables.search;
  var after = variables.after;
  var tags = variables.tags;
  var sortBy = variables.sortBy;
  var tmp;
  if (tags !== undefined) {
    var v = tags;
    tmp = v.map((function (prim) {
            return prim;
          }));
  } else {
    tmp = null;
  }
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "courseId",
                    courseId
                  ],
                  /* tuple */[
                    "levelId",
                    levelId !== undefined ? levelId : null
                  ],
                  /* tuple */[
                    "search",
                    search !== undefined ? search : null
                  ],
                  /* tuple */[
                    "after",
                    after !== undefined ? after : null
                  ],
                  /* tuple */[
                    "tags",
                    tmp
                  ],
                  /* tuple */[
                    "sortBy",
                    sortBy
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(courseId, levelId, search, after, tags, sortBy, param) {
  var tmp;
  if (tags !== undefined) {
    var v = tags;
    tmp = v.map((function (prim) {
            return prim;
          }));
  } else {
    tmp = null;
  }
  return Js_dict.fromArray([
                /* tuple */[
                  "courseId",
                  courseId
                ],
                /* tuple */[
                  "levelId",
                  levelId !== undefined ? levelId : null
                ],
                /* tuple */[
                  "search",
                  search !== undefined ? search : null
                ],
                /* tuple */[
                  "after",
                  after !== undefined ? after : null
                ],
                /* tuple */[
                  "tags",
                  tmp
                ],
                /* tuple */[
                  "sortBy",
                  sortBy
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, courseId, levelId, search, after, tags, sortBy, param) {
  var tmp;
  if (tags !== undefined) {
    var v = tags;
    tmp = v.map((function (prim) {
            return prim;
          }));
  } else {
    tmp = null;
  }
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    /* tuple */[
                      "courseId",
                      courseId
                    ],
                    /* tuple */[
                      "levelId",
                      levelId !== undefined ? levelId : null
                    ],
                    /* tuple */[
                      "search",
                      search !== undefined ? search : null
                    ],
                    /* tuple */[
                      "after",
                      after !== undefined ? after : null
                    ],
                    /* tuple */[
                      "tags",
                      tmp
                    ],
                    /* tuple */[
                      "sortBy",
                      sortBy
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

var CourseTeamsQuery = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function updateTeams(updateTeamsCB, endCursor, hasNextPage, teams, nodes) {
  var updatedTeams = $$Array.append(teams, ArrayUtils.flatten(nodes !== undefined ? StudentsEditor__Team.makeFromJS(nodes) : []));
  return Curry._1(updateTeamsCB, hasNextPage && endCursor !== undefined ? /* PartiallyLoaded */Block.__(0, [
                  updatedTeams,
                  endCursor
                ]) : /* FullyLoaded */Block.__(1, [updatedTeams]));
}

function getTeams(courseId, cursor, updateTeamsCB, teams, filter, setLoadingCB, loading) {
  var tags = StudentsEditor__Filter.tags(filter);
  var selectedLevelId = StudentsEditor__Filter.levelId(filter);
  var search = StudentsEditor__Filter.searchString(filter);
  var sortBy = StudentsEditor__Filter.sortByToString(filter);
  Curry._1(setLoadingCB, loading);
  var tmp;
  if (selectedLevelId !== undefined) {
    var levelId = selectedLevelId;
    if (search !== undefined) {
      var search$1 = search;
      tmp = cursor !== undefined ? make(courseId, levelId, search$1, cursor, tags, sortBy, /* () */0) : make(courseId, levelId, search$1, undefined, tags, sortBy, /* () */0);
    } else {
      tmp = cursor !== undefined ? make(courseId, levelId, undefined, cursor, tags, sortBy, /* () */0) : make(courseId, levelId, undefined, undefined, tags, sortBy, /* () */0);
    }
  } else if (search !== undefined) {
    var search$2 = search;
    tmp = cursor !== undefined ? make(courseId, undefined, search$2, cursor, tags, sortBy, /* () */0) : make(courseId, undefined, search$2, undefined, tags, sortBy, /* () */0);
  } else {
    tmp = cursor !== undefined ? make(courseId, undefined, undefined, cursor, tags, sortBy, /* () */0) : make(courseId, undefined, undefined, undefined, tags, sortBy, /* () */0);
  }
  (function (eta) {
          return GraphqlQuery.sendQuery(undefined, eta);
        })(tmp).then((function (response) {
          updateTeams(updateTeamsCB, response.courseTeams.pageInfo.endCursor, response.courseTeams.pageInfo.hasNextPage, teams, response.courseTeams.nodes);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function studentAvatar(student) {
  var match = StudentsEditor__Student.avatarUrl(student);
  if (match !== undefined) {
    return React.createElement("img", {
                className: "w-8 h-8 md:w-10 md:h-10 text-xs border rounded-full overflow-hidden flex-shrink-0 mt-1 md:mt-0 mr-2 md:mr-3 object-cover",
                src: match
              });
  } else {
    return React.createElement(Avatar.make, {
                name: StudentsEditor__Student.name(student),
                className: "w-8 h-8 md:w-10 md:h-10 text-xs border rounded-full overflow-hidden flex-shrink-0 mt-1 md:mt-0 mr-2 md:mr-3 object-cover"
              });
  }
}

function levelInfo(levels, team) {
  return React.createElement("span", {
              className: "inline-flex flex-col items-center rounded bg-orange-100 border border-orange-300 px-2 pt-2 pb-1 border"
            }, React.createElement("div", {
                  className: "text-xs font-semibold"
                }, "Level"), React.createElement("div", {
                  className: "font-bold"
                }, String(StudentsEditor__Level.number(StudentsEditor__Level.unsafeFind(levels, "TeamsList", StudentsEditor__Team.levelId(team))))));
}

function teamCard(team, selectedStudentIds, selectStudentCB, deselectStudentCB, showEditFormCB, levels) {
  var isSingleStudent = StudentsEditor__Team.isSingleStudent(team);
  var teamId = StudentsEditor__Team.id(team);
  return React.createElement("div", {
              key: teamId,
              className: "student-team-container flex items-strecth shadow bg-white rounded-lg mb-3 overflow-hidden",
              id: StudentsEditor__Team.name(team)
            }, React.createElement("div", {
                  className: "flex flex-col flex-1 w-3/5"
                }, $$Array.map((function (student) {
                        var studentId = StudentsEditor__Student.id(student);
                        var isChecked = $$Array.mem(studentId, selectedStudentIds);
                        var checkboxId = "select-student-" + studentId;
                        return React.createElement("div", {
                                    key: studentId,
                                    className: "student-team__card h-full cursor-pointer flex items-center bg-white",
                                    id: StudentsEditor__Student.name(student)
                                  }, React.createElement("div", {
                                        className: "flex flex-1 w-3/5 h-full"
                                      }, React.createElement("div", {
                                            className: "flex items-center w-full"
                                          }, React.createElement("label", {
                                                className: "flex items-center h-full text-gray-500 leading-tight font-bold px-4 py-5 hover:bg-gray-100",
                                                htmlFor: checkboxId
                                              }, React.createElement("input", {
                                                    className: "leading-tight",
                                                    id: checkboxId,
                                                    checked: isChecked,
                                                    type: "checkbox",
                                                    onChange: isChecked ? (function (_e) {
                                                          return Curry._1(deselectStudentCB, studentId);
                                                        }) : (function (_e) {
                                                          return Curry._2(selectStudentCB, student, team);
                                                        })
                                                  })), React.createElement("a", {
                                                className: "flex flex-1 items-center py-4 px-4 hover:bg-gray-100 justify-between",
                                                id: StudentsEditor__Student.name(student) + "_edit",
                                                onClick: (function (_e) {
                                                    return Curry._2(showEditFormCB, student, teamId);
                                                  })
                                              }, React.createElement("div", {
                                                    className: "flex"
                                                  }, studentAvatar(student), React.createElement("div", {
                                                        className: "text-sm flex flex-col"
                                                      }, React.createElement("p", {
                                                            className: "text-black font-semibold inline-block "
                                                          }, StudentsEditor__Student.name(student)), React.createElement("div", {
                                                            className: "flex flex-wrap"
                                                          }, $$Array.map((function (tag) {
                                                                  return React.createElement("div", {
                                                                              key: tag,
                                                                              className: "bg-gray-300 rounded mt-1 mr-1 py-px px-2 text-xs text-gray-900"
                                                                            }, tag);
                                                                }), StudentsEditor__Student.tags(student))))), isSingleStudent ? levelInfo(levels, team) : null))));
                      }), StudentsEditor__Team.students(team))), isSingleStudent ? null : React.createElement("div", {
                    className: "flex w-2/5 items-center border-l border-gray-200"
                  }, React.createElement("div", {
                        className: "w-4/6 py-4 pl-5 pr-4"
                      }, React.createElement("div", {
                            className: "students-team--name mb-5"
                          }, React.createElement("p", {
                                className: "inline-block text-xs bg-green-200 leading-tight px-1 py-px rounded"
                              }, "Team"), React.createElement("h4", undefined, StudentsEditor__Team.name(team)))), React.createElement("div", {
                        className: "w-2/6 text-right pr-4"
                      }, levelInfo(levels, team))));
}

function showEmpty(filter, loading, updateFilterCB) {
  if (loading === /* NotLoading */0 && StudentsEditor__Filter.isEmpty(filter)) {
    return React.createElement("div", {
                className: "text-center"
              }, "No Users here.");
  } else {
    return React.createElement("div", {
                className: "flex"
              }, React.createElement("div", {
                    className: "w-1/2 px-3"
                  }, React.createElement("p", {
                        className: "text-xl font-semibold mt-4"
                      }, "Sorry, no results found."), React.createElement("ul", {
                        className: "list-disc text-gray-800 text-sm ml-5 mt-2"
                      }, React.createElement("li", {
                            className: "py-1"
                          }, "Make sure the spelling is correct."), React.createElement("li", {
                            className: "py-1"
                          }, "Try removing the search filter options.")), React.createElement("button", {
                        className: "btn btn-default mt-4",
                        onClick: (function (param) {
                            return Curry._1(updateFilterCB, StudentsEditor__Filter.clear(filter));
                          })
                      }, "Clear Filter")), React.createElement("div", {
                    className: "w-1/2"
                  }, React.createElement("img", {
                        className: "w-full",
                        src: notFoundIcon
                      })));
  }
}

function showTeams(selectedStudentIds, selectStudentCB, deselectStudentCB, showEditFormCB, levels, filter, updateFilterCB, loading, teams) {
  if (teams.length !== 0) {
    return $$Array.map((function (team) {
                  return teamCard(team, selectedStudentIds, selectStudentCB, deselectStudentCB, showEditFormCB, levels);
                }), teams);
  } else {
    return showEmpty(filter, loading, updateFilterCB);
  }
}

function StudentsEditor__TeamsList(Props) {
  var levels = Props.levels;
  var courseId = Props.courseId;
  var updateTeamsCB = Props.updateTeamsCB;
  var filter = Props.filter;
  var pagedTeams = Props.pagedTeams;
  var selectedStudentIds = Props.selectedStudentIds;
  var selectStudentCB = Props.selectStudentCB;
  var deselectStudentCB = Props.deselectStudentCB;
  var showEditFormCB = Props.showEditFormCB;
  var loading = Props.loading;
  var setLoadingCB = Props.setLoadingCB;
  var updateFilterCB = Props.updateFilterCB;
  var refreshTeams = Props.refreshTeams;
  React.useEffect((function () {
          getTeams(courseId, undefined, updateTeamsCB, [], filter, setLoadingCB, /* Reloading */1);
          return ;
        }), [refreshTeams]);
  var tmp;
  if (typeof pagedTeams === "number" || pagedTeams.tag) {
    tmp = null;
  } else {
    var cursor = pagedTeams[1];
    var teams = pagedTeams[0];
    tmp = loading === /* LoadingMore */2 ? SkeletonLoading.multiple(3, SkeletonLoading.card(undefined, /* () */0)) : React.createElement("div", {
            className: "pt-4"
          }, React.createElement("button", {
                className: "btn btn-primary-ghost cursor-pointer w-full",
                onClick: (function (param) {
                    return getTeams(courseId, cursor, updateTeamsCB, teams, filter, setLoadingCB, /* LoadingMore */2);
                  })
              }, "Load More"));
  }
  return React.createElement("div", {
              className: "pb-6"
            }, React.createElement("div", {
                  className: "max-w-3xl mx-auto w-full"
                }, React.createElement("div", undefined, typeof pagedTeams === "number" ? SkeletonLoading.multiple(3, SkeletonLoading.card(undefined, /* () */0)) : showTeams(selectedStudentIds, selectStudentCB, deselectStudentCB, showEditFormCB, levels, filter, updateFilterCB, loading, StudentsEditor__Page.teams(pagedTeams))), tmp));
}

var make$1 = StudentsEditor__TeamsList;

exports.notFoundIcon = notFoundIcon;
exports.str = str;
exports.CourseTeamsQuery = CourseTeamsQuery;
exports.updateTeams = updateTeams;
exports.getTeams = getTeams;
exports.studentAvatar = studentAvatar;
exports.levelInfo = levelInfo;
exports.teamCard = teamCard;
exports.showEmpty = showEmpty;
exports.showTeams = showTeams;
exports.make = make$1;
/* notFoundIcon Not a pure module */
