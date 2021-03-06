// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var CoursesReport__Level = require("./CoursesReport__Level.bs.js");

function make(submissions, filter, sortDirection) {
  return {
          submissions: submissions,
          filter: filter,
          sortDirection: sortDirection
        };
}

function makeFilter(level, status) {
  return {
          level: level,
          status: status
        };
}

function partiallyLoaded(submissions, filter, sortDirection, cursor) {
  return /* PartiallyLoaded */Block.__(0, [
            {
              submissions: submissions,
              filter: filter,
              sortDirection: sortDirection
            },
            cursor
          ]);
}

function fullyLoaded(submissions, filter, sortDirection) {
  return /* FullyLoaded */Block.__(1, [{
              submissions: submissions,
              filter: filter,
              sortDirection: sortDirection
            }]);
}

function filterLevelId(level) {
  return Belt_Option.mapWithDefault(level, "none", CoursesReport__Level.id);
}

function filterEq(level, status, filter) {
  if (Belt_Option.mapWithDefault(filter.level, "none", CoursesReport__Level.id) === Belt_Option.mapWithDefault(level, "none", CoursesReport__Level.id)) {
    return Caml_obj.caml_equal(filter.status, status);
  } else {
    return false;
  }
}

function needsReloading(selectedLevel, selectedStatus, sortDirection, t) {
  if (typeof t === "number") {
    return true;
  } else {
    var data = t[0];
    return !(filterEq(selectedLevel, selectedStatus, data.filter) && data.sortDirection === sortDirection);
  }
}

exports.make = make;
exports.makeFilter = makeFilter;
exports.partiallyLoaded = partiallyLoaded;
exports.fullyLoaded = fullyLoaded;
exports.filterLevelId = filterLevelId;
exports.filterEq = filterEq;
exports.needsReloading = needsReloading;
/* CoursesReport__Level Not a pure module */
