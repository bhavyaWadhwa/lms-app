// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Notifier = require("./notifier");

function jsNotify(prim, prim$1, prim$2) {
  Notifier.default(prim, prim$1, prim$2);
  return /* () */0;
}

function success(title, text) {
  return jsNotify(title, text, "success");
}

function error(title, text) {
  return jsNotify(title, text, "error");
}

function notice(title, text) {
  return jsNotify(title, text, "notice");
}

var warn = notice;

exports.jsNotify = jsNotify;
exports.success = success;
exports.error = error;
exports.notice = notice;
exports.warn = warn;
/* ./notifier Not a pure module */
