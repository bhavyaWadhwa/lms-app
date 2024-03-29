// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Link = require("../../../shared/components/Link.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ArrayUtils = require("../../../shared/utils/ArrayUtils.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var CoursesStudents__Level = require("../types/CoursesStudents__Level.bs.js");
var CoursesStudents__TeamInfo = require("../types/CoursesStudents__TeamInfo.bs.js");
var CoursesStudents__TeamCoaches = require("./CoursesStudents__TeamCoaches.bs.js");

((require("./CoursesStudents__Root.css")));

function str(prim) {
  return prim;
}

function levelInfo(levelId, levels) {
  return React.createElement("span", {
              className: "inline-flex flex-col items-center rounded bg-orange-100 border border-orange-300 px-2 pt-2 pb-1 border"
            }, React.createElement("div", {
                  className: "text-xs font-semibold"
                }, "Level"), React.createElement("div", {
                  className: "font-bold"
                }, String(CoursesStudents__Level.number(ArrayUtils.unsafeFind((function (l) {
                                return l.id === levelId;
                              }), "Unable to find level with id: " + (levelId + "in CoursesStudents__TeamsList"), levels)))));
}

function showStudent(team, levels, teamCoaches) {
  var student = Caml_array.caml_array_get(CoursesStudents__TeamInfo.students(team), 0);
  return React.createElement(Link.make, {
              href: "/students/" + (CoursesStudents__TeamInfo.studentId(student) + "/report"),
              ariaLabel: "student-card-" + CoursesStudents__TeamInfo.studentId(student),
              className: "flex md:flex-row justify-between bg-white mt-4 rounded-lg shadow cursor-pointer hover:border-primary-500 hover:text-primary-500 hover:shadow-md",
              children: null,
              key: CoursesStudents__TeamInfo.studentId(student)
            }, React.createElement("div", {
                  className: "flex flex-1 flex-col justify-center md:flex-row md:w-3/5"
                }, React.createElement("div", {
                      className: "flex w-full items-start md:items-center p-3 md:px-4 md:py-5"
                    }, CoursesStudents__TeamCoaches.avatar(undefined, CoursesStudents__TeamInfo.studentAvatarUrl(student), CoursesStudents__TeamInfo.studentName(student)), React.createElement("div", {
                          className: "ml-2 md:ml-3 block text-sm md:pr-2"
                        }, React.createElement("p", {
                              className: "font-semibold inline-block leading-snug"
                            }, CoursesStudents__TeamInfo.studentName(student)), React.createElement("p", {
                              className: "text-gray-600 font-semibold text-xs mt-px leading-snug"
                            }, CoursesStudents__TeamInfo.studentTitle(student))))), React.createElement("div", {
                  "aria-label": "team-level-info-" + CoursesStudents__TeamInfo.id(team),
                  className: "w-2/5 flex items-center justify-end md:justify-between p-3 md:p-4"
                }, React.createElement(CoursesStudents__TeamCoaches.make, {
                      title: React.createElement("div", {
                            className: "mb-1"
                          }, "Personal Coaches"),
                      className: "hidden md:inline-block",
                      coaches: teamCoaches
                    }), levelInfo(CoursesStudents__TeamInfo.levelId(team), levels)));
}

function showTeam(team, levels, teamCoaches) {
  return React.createElement("div", {
              key: CoursesStudents__TeamInfo.id(team),
              "aria-label": "Info of team " + CoursesStudents__TeamInfo.id(team),
              className: "flex shadow bg-white rounded-lg mt-4 overflow-hidden flex-col-reverse md:flex-row"
            }, React.createElement("div", {
                  className: "flex flex-col flex-1 w-full md:w-3/5"
                }, $$Array.map((function (student) {
                        return React.createElement(Link.make, {
                                    href: "/students/" + (CoursesStudents__TeamInfo.studentId(student) + "/report"),
                                    ariaLabel: "student-card-" + CoursesStudents__TeamInfo.studentId(student),
                                    className: "flex items-center bg-white cursor-pointer hover:border-primary-500 hover:text-primary-500 hover:bg-gray-100",
                                    children: React.createElement("div", {
                                          className: "flex w-full md:flex-1 p-3 md:px-4 md:py-5"
                                        }, CoursesStudents__TeamCoaches.avatar(undefined, CoursesStudents__TeamInfo.studentAvatarUrl(student), CoursesStudents__TeamInfo.studentName(student)), React.createElement("div", {
                                              className: "ml-2 md:ml-3 text-sm flex flex-col"
                                            }, React.createElement("p", {
                                                  className: "font-semibold inline-block leading-snug "
                                                }, CoursesStudents__TeamInfo.studentName(student)), React.createElement("p", {
                                                  className: "text-gray-600 font-semibold text-xs mt-px leading-snug "
                                                }, CoursesStudents__TeamInfo.studentTitle(student)))),
                                    key: CoursesStudents__TeamInfo.studentId(student)
                                  });
                      }), CoursesStudents__TeamInfo.students(team))), React.createElement("div", {
                  className: "flex w-full md:w-2/5 items-center bg-gray-200 md:bg-white border-l py-2 md:py-0 px-3 md:px-4"
                }, React.createElement("div", {
                      className: "flex-1 pb-3 md:py-3 pr-3"
                    }, React.createElement("div", undefined, React.createElement("p", {
                              className: "text-xs inline-block leading-tight"
                            }, "Team"), React.createElement("h3", {
                              className: "text-base font-semibold leading-snug"
                            }, CoursesStudents__TeamInfo.name(team)), React.createElement(CoursesStudents__TeamCoaches.make, {
                              title: React.createElement("div", {
                                    className: "mb-1"
                                  }, "Team Coaches"),
                              className: "hidden md:inline-block mt-3",
                              coaches: teamCoaches
                            }))), React.createElement("div", {
                      "aria-label": "team-level-info-" + CoursesStudents__TeamInfo.id(team),
                      className: "flex-shrink-0"
                    }, levelInfo(CoursesStudents__TeamInfo.levelId(team), levels))));
}

function CoursesStudents__TeamsList(Props) {
  var levels = Props.levels;
  var teams = Props.teams;
  var teamCoaches = Props.teamCoaches;
  return React.createElement("div", undefined, ArrayUtils.isEmpty(teams) ? React.createElement("div", {
                    className: "course-review__reviewed-empty text-lg font-semibold text-center py-4"
                  }, React.createElement("h5", {
                        className: "py-4 mt-4 bg-gray-200 text-gray-800 font-semibold"
                      }, "No teams to show")) : $$Array.map((function (team) {
                      var coaches = CoursesStudents__TeamInfo.coaches(teamCoaches, team);
                      if (CoursesStudents__TeamInfo.students(team).length === 1) {
                        return showStudent(team, levels, coaches);
                      } else {
                        return showTeam(team, levels, coaches);
                      }
                    }), teams));
}

var make = CoursesStudents__TeamsList;

exports.str = str;
exports.levelInfo = levelInfo;
exports.showStudent = showStudent;
exports.showTeam = showTeam;
exports.make = make;
/*  Not a pure module */
