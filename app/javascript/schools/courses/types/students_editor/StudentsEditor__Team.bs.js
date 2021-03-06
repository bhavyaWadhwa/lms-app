// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var DateFns = require("../../../../shared/utils/DateFns.bs.js");
var ArrayUtils = require("../../../../shared/utils/ArrayUtils.bs.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var StudentsEditor__Student = require("./StudentsEditor__Student.bs.js");

function id(t) {
  return t.id;
}

function name(t) {
  return t.name;
}

function coachIds(t) {
  return t.coachIds;
}

function accessEndsAt(t) {
  return t.accessEndsAt;
}

function levelId(t) {
  return t.levelId;
}

function students(t) {
  return t.students;
}

function isSingleStudent(t) {
  return t.students.length === 1;
}

function make(id, name, students, coachIds, levelId, accessEndsAt) {
  return {
          id: id,
          name: name,
          coachIds: coachIds,
          levelId: levelId,
          accessEndsAt: accessEndsAt,
          students: students
        };
}

function makeFromJS(teamDetails) {
  return teamDetails.map((function (team) {
                if (team !== undefined) {
                  var team$1 = Caml_option.valFromOption(team);
                  var students = $$Array.map(StudentsEditor__Student.makeFromJS, team$1.students);
                  var coachIds = $$Array.map((function (cids) {
                          return cids;
                        }), team$1.coachIds);
                  return /* :: */[
                          make(team$1.id, team$1.name, students, coachIds, team$1.levelId, Belt_Option.map(team$1.accessEndsAt, DateFns.decodeISO)),
                          /* [] */0
                        ];
                } else {
                  return /* [] */0;
                }
              }));
}

function update(name, student, coachIds, accessEndsAt, team) {
  var students = $$Array.map((function (s) {
          if (StudentsEditor__Student.id(s) === StudentsEditor__Student.id(student)) {
            return student;
          } else {
            return s;
          }
        }), team.students);
  return {
          id: team.id,
          name: name,
          coachIds: coachIds,
          levelId: team.levelId,
          accessEndsAt: accessEndsAt,
          students: students
        };
}

function replaceTeam(team, teams) {
  return $$Array.map((function (t) {
                if (t.id === team.id) {
                  return team;
                } else {
                  return t;
                }
              }), teams);
}

function unsafeFind(teams, componentName, teamId) {
  return ArrayUtils.unsafeFind((function (team) {
                return team.id === teamId;
              }), "Unable to find team with id: " + (teamId + ("in StudentdEditor__" + componentName)), teams);
}

function active(t) {
  return Belt_Option.mapWithDefault(t.accessEndsAt, true, DateFns.isFuture);
}

exports.id = id;
exports.name = name;
exports.coachIds = coachIds;
exports.accessEndsAt = accessEndsAt;
exports.levelId = levelId;
exports.students = students;
exports.isSingleStudent = isSingleStudent;
exports.make = make;
exports.makeFromJS = makeFromJS;
exports.update = update;
exports.replaceTeam = replaceTeam;
exports.unsafeFind = unsafeFind;
exports.active = active;
/* DateFns Not a pure module */
