// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ListUtils = require("./ListUtils.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var $$Notification = require("../Notification.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var UnsafeFindFailed = Caml_exceptions.create("ArrayUtils.UnsafeFindFailed");

function copyAndSort(f, t) {
  var cp = $$Array.copy(t);
  $$Array.sort(f, cp);
  return cp;
}

function copyAndPush(e, t) {
  var copy = $$Array.copy(t);
  copy.push(e);
  return copy;
}

function isEmpty(a) {
  return a.length === 0;
}

function isNotEmpty(a) {
  return !isEmpty(a);
}

function unsafeFind(p, message, l) {
  var match = l.find(Curry.__1(p));
  if (match !== undefined) {
    return match;
  } else {
    Rollbar.error(message);
    $$Notification.error("An unexpected error occurred", "Our team has been notified about this error. Please try reloading this page.");
    throw [
          UnsafeFindFailed,
          message
        ];
  }
}

function flatten(t) {
  return $$Array.of_list(List.flatten($$Array.to_list(t)));
}

function distinct(t) {
  return $$Array.of_list(ListUtils.distinct($$Array.to_list(t)));
}

function sort_uniq(f, t) {
  return $$Array.of_list(List.sort_uniq(f, $$Array.to_list(t)));
}

function getOpt(a, i) {
  try {
    return Caml_option.some(Caml_array.caml_array_get(i, a));
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return ;
    } else {
      throw exn;
    }
  }
}

function swapUp(i, t) {
  if (i <= 0 || i >= t.length) {
    Rollbar.warning("Index to swap out of bounds in array!");
    return t;
  } else {
    var copy = $$Array.copy(t);
    Caml_array.caml_array_set(copy, i, Caml_array.caml_array_get(t, i - 1 | 0));
    Caml_array.caml_array_set(copy, i - 1 | 0, Caml_array.caml_array_get(t, i));
    return copy;
  }
}

function swapDown(i, t) {
  return swapUp(i + 1 | 0, t);
}

exports.UnsafeFindFailed = UnsafeFindFailed;
exports.copyAndSort = copyAndSort;
exports.copyAndPush = copyAndPush;
exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;
exports.unsafeFind = unsafeFind;
exports.flatten = flatten;
exports.distinct = distinct;
exports.sort_uniq = sort_uniq;
exports.getOpt = getOpt;
exports.swapUp = swapUp;
exports.swapDown = swapDown;
/* Notification Not a pure module */
